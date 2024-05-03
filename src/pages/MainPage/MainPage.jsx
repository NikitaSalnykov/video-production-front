import { FeaturedWork } from "../../components/FeaturedWork/FeaturedWork";
import {Container} from "../../components/Container/Container"
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Skills } from "../../components/Skills/Skills";

const MainPage = () => {
  return (
<div className="">
    <AboutUs/>
    <Skills/>
    <Container>
      <FeaturedWork/>
    </Container>
</div>
  );
};

export default MainPage;
