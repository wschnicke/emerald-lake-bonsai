import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public/images");
const QUALITY = 82;
const MAX_DIMENSION = 2400;
const EXTENSIONS = [".png", ".jpg", ".jpeg"];

interface OptimizationResult {
  file: string;
  originalSize: number;
  optimizedSize: number;
  skipped: boolean;
}

async function findImages(dir: string): Promise<string[]> {
  const images: string[] = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await findImages(fullPath)));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        images.push(fullPath);
      }
    }
  }

  return images;
}

async function optimizeImage(imagePath: string): Promise<OptimizationResult> {
  const webpPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const relativePath = path.relative(IMAGES_DIR, imagePath);

  const originalStats = fs.statSync(imagePath);
  const originalSize = originalStats.size;

  // Check if WebP already exists and is newer than source
  if (fs.existsSync(webpPath)) {
    const webpStats = fs.statSync(webpPath);
    if (webpStats.mtimeMs >= originalStats.mtimeMs) {
      return {
        file: relativePath,
        originalSize,
        optimizedSize: webpStats.size,
        skipped: true,
      };
    }
  }

  // Optimize the image
  // Use .rotate() with no args to auto-rotate based on EXIF orientation
  const image = sharp(imagePath).rotate();
  const metadata = await image.metadata();

  // Resize if larger than max dimension
  let resizedImage = image;
  if (
    metadata.width &&
    metadata.height &&
    (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION)
  ) {
    resizedImage = image.resize(MAX_DIMENSION, MAX_DIMENSION, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  // Convert to WebP
  await resizedImage.webp({ quality: QUALITY }).toFile(webpPath);

  const optimizedStats = fs.statSync(webpPath);

  return {
    file: relativePath,
    originalSize,
    optimizedSize: optimizedStats.size,
    skipped: false,
  };
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  console.log("🖼️  Image Optimization Script");
  console.log("============================\n");

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Error: Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const images = await findImages(IMAGES_DIR);
  console.log(`Found ${images.length} image(s) to process\n`);

  if (images.length === 0) {
    console.log("No images to optimize.");
    return;
  }

  const results: OptimizationResult[] = [];

  for (const imagePath of images) {
    const result = await optimizeImage(imagePath);
    results.push(result);

    const status = result.skipped ? "⏭️  Skipped" : "✅ Optimized";
    const savings = result.skipped
      ? ""
      : ` (${formatBytes(result.originalSize)} → ${formatBytes(result.optimizedSize)})`;

    console.log(`${status}: ${result.file}${savings}`);
  }

  // Summary
  const optimized = results.filter((r) => !r.skipped);
  const totalOriginal = optimized.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = optimized.reduce((sum, r) => sum + r.optimizedSize, 0);
  const totalSaved = totalOriginal - totalOptimized;

  console.log("\n============================");
  console.log(`📊 Summary:`);
  console.log(`   Files processed: ${results.length}`);
  console.log(`   Files optimized: ${optimized.length}`);
  console.log(`   Files skipped: ${results.length - optimized.length}`);

  if (optimized.length > 0) {
    console.log(`   Total saved: ${formatBytes(totalSaved)}`);
    console.log(
      `   Reduction: ${((totalSaved / totalOriginal) * 100).toFixed(1)}%`,
    );
  }
}

main().catch(console.error);
