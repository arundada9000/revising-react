import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Github from "./components/Github.jsx";
import { getGithubData } from "./helpers/githubLoader.js";

import ResourceLayout from "./components/ResourceLayout.jsx";
import Resources from "./components/Resources.jsx";
import Counter from "./components/Counter.jsx";
// import Card from "./components/Card.jsx";
import BgChanger from "./components/BgChanger.jsx";
import PasswordGenerator from "./components/PasswordGenerator.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
      <Route loader={getGithubData} path="github" element={<Github />}></Route>
    </Route>,
    <Route path="/resources" element={<ResourceLayout />}>
      <Route path="" element={<Resources />}></Route>
      <Route path="bgchanger" element={<BgChanger />}></Route>
      <Route path="passwordgenerator" element={<PasswordGenerator />}></Route>
      <Route path="counter" element={<Counter />}></Route>
      <Route path="currencyconverter" element={<App />}></Route>
    </Route>,
  ]),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Counter />
    <Card name="Arun Neupane" btnText="Click Me" />
    <Card name="Thesthesti" btnText="Visit Me" />
    <BgChanger />
    <PasswordGenerator /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
