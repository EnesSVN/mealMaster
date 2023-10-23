import Campaigns from "@/components/layout/Campaigns";
import Carousel from "@/components/layout/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
};

export default Home;
