import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Recommanded from "../components/Recommanded";
import TabCategory from "../components/TabCategory";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Helmet>
        <title>Vix-Career | Home</title>
      </Helmet>
      <Banner />
      <TabCategory />
      <Recommanded />
      <Testimonials />
    </>
  );
}

export default Home;
