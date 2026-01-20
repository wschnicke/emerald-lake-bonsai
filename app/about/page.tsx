import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContentBlock from "@/components/ui/ContentBlock";
import { fontFeatures } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About | Emerald Lake Garden",
  description:
    "Learn about Emerald Lake Garden and the practice of bonsai cultivation in the Pacific Northwest.",
};

export default function AboutPage() {
  return (
    <article>
      <Container className="pt-6">
        <div>
        <ContentBlock
          imageSrc="/images/understory-vine-maple.jpg"
          imageAlt="A photo of a vine maple in the understory in Olympic National Forest"
          reversed={false}
        >
          <h2
            className="text-3xl font-bold mb-4 text-gray-900"
            style={fontFeatures.heading}
          >
            About Emerald Lake Garden
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Emerald Lake Garden is the bonsai practice of Will Schnicke, located in Seattle, Washington.
          </p>
        </ContentBlock>

        <ContentBlock
          imageSrc="/images/class-pic.jpg"
          imageAlt="A class of bonsai students"
          reversed={true}
        >
          <h2
            className="text-3xl font-bold mb-4 text-gray-900"
            style={fontFeatures.heading}
          >
            The offerings
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Emerald Lake Garden is a full-service (though part-time!) bonsai garden with a focus on collaborative work
            and education. Whether you need an extra pair of hands or a guide, a demo or workshop, I would love to help.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Bonsai services for hire, onsite or in my workspace</li>
            <li>Education, either 1-on-1 or in a workshop setting</li>
            <li>Corporate and club events: demos, workshops, display rental</li>
            <li>White glove bonsai transporation</li>
            <li>Landscape tree pruning</li>
          </ul>
        </ContentBlock>

        <ContentBlock
          imageSrc="/images/will-at-nbpm.jpg"
          imageAlt="Will at the National Bonsai and Penjing Museum -- Tree by Bjorn Bjorholm"
          reversed={false}
        >
          <h2
            className="text-3xl font-bold mb-4 text-gray-900"
            style={fontFeatures.heading}
          >
            About Will
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Will is a bonsai student and hobbyist whose obsession has grown over the last 4 years.
            In 2025, he was the intern at Pacific Bonsai Museum. Will’s bonsai interests include contemporary display,
            mixed media, and conceptual bonsai art. He still doesn’t know how to answer the question “why did you
            get in to bonsai?” but has a plethora of answers for why he’s stayed.
          </p>
        </ContentBlock>
        </div>
      </Container>
    </article>
  );
}
