import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { fontFeatures } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About | Emerald Lake Garden",
  description:
    "Learn about Emerald Lake Garden and the practice of bonsai cultivation in the Pacific Northwest.",
};

export default function AboutPage() {
  return (
    <Container>
      <article className="max-w-3xl mx-auto py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          style={fontFeatures.heading}
        >
          Life on the Mississippi
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            When I was a boy, there was but one permanent ambition among my
            comrades in our village on the west bank of the Mississippi River.
            That was, to be a steamboatman.
          </p>

          <h2
            className="text-3xl font-bold mb-4 mt-12 text-gray-900"
            style={{
              fontFeatureSettings:
                '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
            }}
          >
            The Glory of the Pilot-House
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We had transient ambitions of other sorts, but they were only
            transient. When a circus came and went, it left us all burning to
            become clowns; the first negro minstrel show that came to our
            section left us all suffering to try that kind of life; now and then
            we had a hope that if we lived and were good, God would permit us to
            be pirates.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            These ambitions faded out, each in its turn; but the ambition to be
            a steamboatman always remained. Once a day a cheap, gaudy packet
            arrived upward from St. Louis, and another downward from Keokuk.
            Before these events, the day was glorious with expectancy; after
            them, the day was a dead and empty thing.
          </p>

          <h2
            className="text-3xl font-bold mb-4 mt-12 text-gray-900"
            style={{
              fontFeatureSettings:
                '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
            }}
          >
            The River's Majesty
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I still kept in mind a certain wonderful sunset which I witnessed
            when steamboating was new to me. A broad expanse of the river was
            turned to blood; in the middle distance the red hue brightened into
            gold, through which a solitary log came floating, black and
            conspicuous; in one place a long, slanting mark lay sparkling upon
            the water.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I stood like one bewitched. I drank it in, in a speechless rapture.
            The world was new to me and I had never seen anything like this at
            home.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
            <li>
              The majestic, the magnificent Mississippi, rolling its mile-wide
              tide along
            </li>
            <li>The dense forest away on the other side</li>
            <li>The tumbling boil of the current</li>
            <li>The sombre borders of deep woods</li>
            <li>The clean-stemmed dead trees waving a single leafy bough</li>
          </ul>

          <h2
            className="text-3xl font-bold mb-4 mt-12 text-gray-900"
            style={{
              fontFeatureSettings:
                '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
            }}
          >
            Learning the River
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Now when I had mastered the language of this water and had come to
            know every trifling feature that bordered the great river as
            familiarly as I knew the letters of the alphabet, I had made a
            valuable acquisition. But I had lost something, too.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
            <li>The romance and beauty were all gone from the river</li>
            <li>All the grace, the beauty, the poetry had gone out of it</li>
            <li>I had lost something which could never be restored to me</li>
            <li>
              All the value any feature of it had for me now was the amount of
              usefulness it could furnish
            </li>
          </ul>

          <h2
            className="text-3xl font-bold mb-4 mt-12 text-gray-900"
            style={{
              fontFeatureSettings:
                '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
            }}
          >
            The Cub Pilot's Education
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            My chief was presently hired to go on a big New Orleans boat, and I
            packed my satchel and went with him. She was a grand affair. When I
            stood in her pilot-house I was so far above the water that I seemed
            perched on a mountain; and her decks stretched so far away, fore and
            aft, below me, that I wondered how I could ever have considered the
            little Paul Jones a large craft.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            There were other pilots in the association, and they were all good
            pilots. But the pilots held the most lucrative and comfortable berth
            of any variety of men known to commerce, and were naturally jealous
            of their prerogatives.
          </p>

          <h2
            className="text-3xl font-bold mb-4 mt-12 text-gray-900"
            style={{
              fontFeatureSettings:
                '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
            }}
          >
            A Daring Deed
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Two things seemed pretty apparent to me. One was, that in order to
            be a pilot a man had got to learn more than any one man ought to be
            allowed to know; and the other was, that he must learn it all over
            again in a different way every twenty-four hours.
          </p>
        </div>
      </article>
    </Container>
  );
}
