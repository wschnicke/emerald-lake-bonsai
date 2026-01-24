const sharp = require("sharp");
const path = require("node:path");

async function generateBlurDataURL(imagePath) {
  const buffer = await sharp(imagePath)
    .resize(20, 15, { fit: "cover" }) // Tiny thumbnail
    .modulate({ brightness: 1.5 }) // Brighten to compensate for 30% dark overlay
    .webp({ quality: 20 }) // Low quality for small size
    .toBuffer();

  const base64 = buffer.toString("base64");
  return `data:image/webp;base64,${base64}`;
}

async function main() {
  const heroPath = path.join(__dirname, "../public/images/hero.webp");
  const heroMobilePath = path.join(
    __dirname,
    "../public/images/hero-mobile.webp",
  );

  console.log("Generating blur placeholders...\n");

  const heroBlur = await generateBlurDataURL(heroPath);
  const heroMobileBlur = await generateBlurDataURL(heroMobilePath);

  console.log("Desktop hero blur data URL:");
  console.log(heroBlur);
  console.log("\n");

  console.log("Mobile hero blur data URL:");
  console.log(heroMobileBlur);
  console.log("\n");

  console.log("✓ Done! Copy these into your HeroSection.tsx");
}

main().catch(console.error);
