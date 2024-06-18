import { FeaturedWork } from "../../components/FeaturedWork/FeaturedWork";
import {Container} from "../../components/Container/Container"
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Skills } from "../../components/Skills/Skills";
import { ColoristicsWork } from "../../components/ColoristicsWork/ColoristicsWork";
import { EditWork } from "../../components/EditWork/EditWork";
import { DirectedWork } from "../../components/DirectedWork/DirectedWork";



const MainPage = () => {
  return (
<div className="">
    <AboutUs/>
    <Skills/>
    <Container>
    <ColoristicsWork/>
    <EditWork/>
    <DirectedWork/>
    </Container>
    <Container>
      <FeaturedWork/>
    </Container>
</div>
  );
};

export default MainPage;
