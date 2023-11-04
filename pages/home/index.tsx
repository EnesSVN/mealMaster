import About from "@/components/layout/About";
import Campaigns from "@/components/layout/Campaigns";
import Carousel from "@/components/layout/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import Reservation from "@/components/layout/Reservation";

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default Home;
