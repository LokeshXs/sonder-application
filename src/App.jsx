
import "./App.css";
import About from "./Components/AboutUs/AboutUs";
import MainComponent from "./Components/Main/Main";
import AboutUsPage from "./Pages/AboutUs";
import RootLayoutPage from "./Pages/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupportPage from "./Pages/Support";
import ResponsibilityPage from "./Pages/Responsibility";
import BlogPage from "./Pages/Blog";
import { Explore } from "@mui/icons-material";
import ExplorePage from "./Pages/Explore";
import LoginSignUpPage from "./Pages/LoginSignup";
import { loader as hotelImageLoader } from "./Pages/Explore";
import ErrorPage from "./Pages/Error";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayoutPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <MainComponent />,
        },
        {
          path: 'aboutus',
          element: <AboutUsPage />
        },
        {
          path: 'explore',
          element: <ExplorePage />,
          loader: hotelImageLoader,
        },


      ]
    },
    {
      path: '/auth',
      element: <LoginSignUpPage />
    }

  ]);

  return <RouterProvider router={router} />
};

export default App;