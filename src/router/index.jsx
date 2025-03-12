import { createBrowserRouter } from "react-router-dom"
import ManagerHome from "../pages/manager/home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import SuccessCheckout from "../pages/SuccessCheckout"
import LayoutDashboard from "../components/layout"
import ManageCourse from "../pages/manager/courses"

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
    path: "/manager",
    element: <LayoutDashboard/>,
    children: [
      {
        index: true,
        element: <ManagerHome/>
      },{
        path: "/manager/courses",
        element: <ManageCourse/>
      }
    ]
  }
])

export default router