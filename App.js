import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet, useSearchParams } from "react-router-dom"
import About from "./Components/About";
import Error from "./Components/Error";
import ReastrauntMenu from "./Components/RestrauntMenu";
import { Suspense } from "react";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
//import Groccery from "./Components/Groccery";
const Groccery = lazy(() => import("./Components/Groccery"));
const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "prabhu"
    }
    setUserName(data.name);
  }, [])
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ logedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <ReastrauntMenu />,
      },
      {
        path: "/groccery",
        element: <Suspense fallback={<h1>grocery is loading</h1>}><Groccery /></Suspense>,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ],
    errorElement: <Error />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

