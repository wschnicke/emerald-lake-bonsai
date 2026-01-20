import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import RecentPostsSection from "@/components/home/RecentPostsSection";
import Container from "@/components/ui/Container";
import { getPublishedPosts } from "@/lib/blog";

export default async function Home() {
  const recentPosts = (await getPublishedPosts()).slice(0, 3);

  return (
    <>
      <HeroSection />

      <Container>
        <RecentPostsSection posts={recentPosts} />
        <AboutSection />
      </Container>
    </>
  );
}
