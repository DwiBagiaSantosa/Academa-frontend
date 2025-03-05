import { createBrowserRouter } from "react-router-dom"
import ManagerHome from "../pages/ManagerHome"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHome/>
  },
  {
    path: "/manager/sign-in",
    element: <SignIn />
  },
  {
    path: "/manager/sign-up",
    element: <SignUp />
  }
])

export default router