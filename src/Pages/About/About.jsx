
import Title from "../../Components/Title/Title";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";



const About = () => {

  return (
    <>
    {/* title section start */}
    <Title name={'About'}></Title>
    {/* title section end */}
      {/* content section start */}
        <div className="container mx-auto overflow-hidden">
          <AboutMe></AboutMe>
          <TechStack></TechStack>
        </div>
      {/* content section end */}
    </>
  );
};

export default About;