import Title from "../../Components/Title/Title";
import Banner from "./Banner";
import CoreStack from "./CoreStack";
import Ido from "./Ido";


const Home = () => {
  return (
    <>
    {/* title section start */}
    <Title name={'Home'}></Title>
    {/* title section end */}
    {/* banner section start */}
      <Banner></Banner>
    {/* banner section end */}
    {/* core stack section start */}
    <CoreStack></CoreStack>
    {/* core stack section end */}
    {/* ido section start */}
    <Ido></Ido>
    {/* ido section end */}
    </>
  );
};

export default Home;