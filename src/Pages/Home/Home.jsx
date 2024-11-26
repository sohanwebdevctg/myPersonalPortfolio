import Title from "../../Components/Title/Title";
import Banner from "./Banner";


const Home = () => {
  return (
    <>
    {/* title section start */}
    <Title name={'Home'}></Title>
    {/* title section end */}
    {/* banner section start */}
      <Banner></Banner>
    {/* banner section end */}
    </>
  );
};

export default Home;