import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainComponent from "../Components/Main/Main";
import NavigationComponent from "../Components/Navigation/Navigation";


const RootLayoutPage = () => {

  return <>
    <NavigationComponent />
    <Outlet />
    <Footer />
  </>
};
export default RootLayoutPage;