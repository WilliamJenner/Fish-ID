import FishQuestion from "@/components/FishQuestion";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Fishes } from "@/constants/Fish";

export default function HomeScreen() {
  const fishes = Fishes.filter((f) => f.enabled);

  return (
    <ParallaxScrollView>
      <FishQuestion fishes={fishes} />
    </ParallaxScrollView>
  );
}
