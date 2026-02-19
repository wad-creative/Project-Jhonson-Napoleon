import { Hero } from "@/components/home/hero";
import { DrinksList } from "@/components/home/drinks-list";
import { Community } from "@/components/home/community";

export default function Home() {
  return (
    <div>
      <Hero />
      <DrinksList />
      <Community />
    </div>
  );
}
