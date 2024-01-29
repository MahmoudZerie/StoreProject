import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/homePage";
import ErrorHandler from "../components/errors/ErrorHandler";
//  import { useState } from "react";
// import ProtectedRoute from "../components/auth/ProtectedRoute";

//  const [isLogin,setIsLogin]=useState(false);
const router = createBrowserRouter(createRoutesFromElements(
  <>
	<Route path="/"  errorElement={<ErrorHandler statusCode={404}/>}>
	<Route index element={<HomePage/>}/>
    <Route path="main" element={<App />}/>
	</Route>
  </>
));
 
export default router;
