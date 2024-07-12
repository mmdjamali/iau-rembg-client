import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import NotFound from "@/app/404/page";
import Home from "@/app/home/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
