import { createBrowserRouter } from "react-router-dom"
import ManagerHome from "../pages/ManagerHome"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import SuccessCheckout from "../pages/SuccessCheckout"
import LayoutDashboard from "../components/layout"

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
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckout/>
  },
  {
    path: "manager",
    element: <LayoutDashboard/>,
    children: [
      {
        index: true,
        element: <ManagerHome/>
      }
    ]
  }
])

export default router