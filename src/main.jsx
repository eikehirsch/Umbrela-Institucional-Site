import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import RaccoonCity from "./routes/raccoon-city/raccoonCity";
import OurHistory from "./routes/our-history/ourHistory";
import RedQueen from "./routes/red-queen/RedQueen"
import ErrorPage from "./routes/error-page/ErrorPage";

// 1 - Setting router
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "raccoon-city",
    element: <RaccoonCity/>
  },
  {
    path: "nossa-historia",
    element: <OurHistory/>
  },
  {
    path: "red-queen",
    element: <RedQueen />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
