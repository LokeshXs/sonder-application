import { useRouteError } from "react-router-dom";
import NavigationComponent from "../Components/Navigation/Navigation";

const ErrorPage = () =>{

  const error = useRouteError();
  console.log(error.status);
  console.log(JSON.parse(error.data).message);

  const errorMessage = JSON.parse(error.data).message;


  return <>
  <NavigationComponent />
  <h1>{errorMessage}</h1>
  </>
};

export default ErrorPage;