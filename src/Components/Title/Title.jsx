import { Helmet } from "react-helmet-async";


const Title = ({name}) => {
  return (
    <>
      <Helmet>
        <title>SohanMozumder | {name}</title>
      </Helmet>
    </>
  );
};

export default Title;