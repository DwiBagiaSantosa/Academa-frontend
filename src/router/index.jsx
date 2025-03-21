import { createBrowserRouter, redirect } from "react-router-dom"
import { MANAGER_SESSION, STORAGE_KEY } from "../utils/const"
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
import ManageStudents from "../pages/manager/students"
import StudentPage from "../pages/student"
import secureLocalStorage from "react-secure-storage"
import { getCategories, getCourses } from "../services/courseService"

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
    id: MANAGER_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (!session || session.role !== 'manager') {
        throw redirect('/manager/sign-in')
      }

      return session
    },
    element: <LayoutDashboard/>,
    children: [
      {
        index: true,
        element: <ManagerHome/>
      },{
        path: "/manager/courses",
        loader: async () => {
          const data = await getCourses()
          console.log("🚀 ~ loader: ~ data:", data)

          return data
        },
        element: <ManageCourse/>
      },
      {
        path: "/manager/courses/create",
        loader: async () => {
          const categories = await getCategories()

          return categories
        },
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
      },
      {
        path: "/manager/students",
        element: <ManageStudents/>
      }
    ]
  },
  {
    path: "/student",
    element: <LayoutDashboard isAdmin={false}/>,
    children:[
      {
        index: true,
        element: <StudentPage/>
      },
      {
        path: "/student/detail-course/:id",
        element: <ManageCoursePreview/>
      }
    ]
  }
])

export default router