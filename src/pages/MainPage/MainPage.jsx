import { FeaturedWork } from "../../components/FeaturedWork/FeaturedWork";
import {Container} from "../../components/Container/Container"
import { AboutUs } from "../../components/AboutUs/AboutUs";

const MainPage = () => {
  return (
<div className="">
    <AboutUs/>
    <Container>
      <FeaturedWork/>
    </Container>
</div>
  );
};

export default MainPage;
