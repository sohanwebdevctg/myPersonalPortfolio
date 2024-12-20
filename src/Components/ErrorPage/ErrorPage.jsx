import { useNavigate, useRouteError } from "react-router-dom";
import Title from "../Title/Title";


const ErrorPage = () => {

  // error status
  const error = useRouteError();

  // back to previous page
  const navigation = useNavigate();

  // navigate function btn
  const backPageBtn = () => {
    navigation(-1)
  };

  return (
<>
    {/* title start */}
    <Title name={'not-found'}></Title>
      {/* title end */}
      <div className="bg-black bg-opacity-95 h-screen flex justify-center items-center">
      {/* content section start */}
      <div className="text-center space-y-3">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-white">Oops!</h1>
        <p className="text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-500">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={backPageBtn} className="btn bg-yellow-400 hover:bg-yellow-400 btn-md font-bold text-white">Back</button>
      </div>
      {/* content section end */}
    </div>
    </>
  );
};

export default ErrorPage;