import { RouterProvider } from "react-router-dom";
import router from "../router";

const MainApp = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default MainApp;
