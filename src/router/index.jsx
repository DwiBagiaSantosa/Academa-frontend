import { createBrowserRouter } from "react-router-dom"
import ManagerHome from "../pages/manager/home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import SuccessCheckout from "../pages/SuccessCheckout"
import LayoutDashboard from "../components/layout"
import ManageCourse from "../pages/manager/courses"
import ManageCreateCourse from "../pages/manager/create-course"
import ManageCourseDetail from "../pages/manager/course-detail"
import ManageContentCreate from "../pages/manager/course-content-create"
import ManageCoursePreview from "../pages/manager/course-preview"

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
      },
      {
        path: "/manager/courses/create",
        element: <ManageCreateCourse/>
      },
      {
        path: "/manager/courses/:id",
        element: <ManageCourseDetail/>
      },{
        path: "/manager/courses/:id/create",
        element: <ManageContentCreate/>
      },
      {
        path: "/manager/courses/:id/preview",
        element: <ManageCoursePreview/>
      }
    ]
  }
])

export default router