import Link from "next/link";
import Button from "@/components/ui/Button";
import { fontFeatures } from "@/lib/fonts";

export default function AboutSection() {
  return (
    <section className="py-16 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          style={fontFeatures.heading}
        >
          A Connecticut Yankee in King Arthur's Court
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I saw that I was just another Robinson Crusoe cast away on an
          uninhabited island, with no society but some more or less tame
          animals, and if I wanted to make life bearable I must do as he
          did—invent, contrive, create, reorganize things; set brain and hand to
          work, and keep them busy.
        </p>
        <Link href="/about">
          <Button variant="outline">Learn More</Button>
        </Link>
      </div>
    </section>
  );
}
