import { useRouteError } from "react-router-dom";
import Error from "../Components/ErrorComponent/Error";

const ErrorPage = () => {

  const error = useRouteError();
  console.log(error.status);

  return <>
    <Error />
  </>
};

export default ErrorPage;