import LayoutContent from "@/components/Asset/LayoutContent";
import FeaturedMovies from "@/components/Routes/Home/FeaturedMovies";
import FeaturedTv from "@/components/Routes/Home/FeaturedTv";

export default function Home() {
  return (
    <LayoutContent className="flex flex-col gap-20">
      <FeaturedMovies />

      <FeaturedTv />
    </LayoutContent>
  );
}
