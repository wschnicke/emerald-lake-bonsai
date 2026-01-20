import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { fontFeatures } from "@/lib/fonts";

export default function AboutSection() {
  return (
    <section className="border-t border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight"
            style={fontFeatures.heading}
          >
            Collaboration first bonsai services and education
          </h2>
          <p className="text-lg text-gray-900 mb-8 leading-relaxed">
            Emerald Lake Garden is a garden and practice focused on working and learning with you to create beautiful bonsai.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn more</Button>
          </Link>
        </div>
        <div className="relative aspect-4/3 w-full">
          <Image
            src="/images/will-portrait.png"
            alt="Will at Pacific Bonsai Museum with bonsai"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
