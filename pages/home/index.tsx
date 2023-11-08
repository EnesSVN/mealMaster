import About from "@/components/layout/About";
import Campaigns from "@/components/layout/Campaigns";
import Carousel from "@/components/layout/Carousel";
import MenuWrapper from "@/components/product/MenuWrapper";
import Reservation from "@/components/layout/Reservation";
import Customers from "@/components/layout/Customers";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </div>
  );
};

export default Home;
