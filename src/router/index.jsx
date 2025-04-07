import { createBrowserRouter, redirect } from "react-router-dom"
import { MANAGER_SESSION, STORAGE_KEY, STUDENT_SESSION } from "../utils/const"
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
import { getCategories, getCourseDetail, getCourses, getDetailContent, getStudentCourse } from "../services/courseService"
import ManageStudentCreate from "../pages/manager/students-create"
import { getCourseStudent, getStudentById, getStudents } from "../services/studentService"
import StudentCourseList from "../pages/manager/student-course"
import StudentForm from "../pages/manager/student-course/student-form"
import { getOverviews } from "../services/overviewService"

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (!session || session.role !== 'manager') {
        throw redirect('/manager/sign-in')
      }

      return true
    },
    element: <ManagerHome/>
  },
  {
    path: "/manager/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (session && session.role === 'manager') {
        throw redirect('/manager')
      }

      return true
    },
    element: <SignIn />
  },
  {
    path: "/manager/sign-up",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (session && session.role === 'manager') {
        throw redirect('/manager')
      }

      return true
    },
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
        loader: async () => {
          const overviews = await getOverviews()

          return overviews?.data
        },
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

          return {categories, course: null}
        },
        element: <ManageCreateCourse/>
      },
      {
        path: "/manager/courses/edit/:id",
        loader: async ({params}) => {
          const categories = await getCategories()
          const course = await getCourseDetail(params.id)
          // console.log("🚀 ~ loader: ~ course:", course)

          return {categories, course: course?.data}
        },
        element: <ManageCreateCourse/>
      },
      {
        path: "/manager/courses/:id",
        loader: async ({params}) => {
          const course = await getCourseDetail(params.id)
          console.log("🚀 ~ loader: ~ course:", course)
          return course?.data
        },
        element: <ManageCourseDetail/>
      },{
        path: "/manager/courses/:id/create",
        element: <ManageContentCreate/>
      },
      {
        path: "/manager/courses/:id/edit/:contentId",
        loader: async ({params}) => {
          const content = await getDetailContent(params.contentId)

          return content?.data
        },
        element: <ManageContentCreate/>
      },
      {
        path: "/manager/courses/:id/preview",
        loader: async ({params}) => {
          const course = await getCourseDetail(params.id, true)

          return course?.data
        },
        element: <ManageCoursePreview/>
      },
      {
        path: "/manager/students",
        loader: async () => {
          const students = await getStudents()

          return students?.data
        },
        element: <ManageStudents/>
      },
      {
        path: "/manager/students/create",
        element: <ManageStudentCreate/>
      },
      {
        path: "/manager/students/edit/:id",
        loader: async ({params}) => {
          const student = await getStudentById(params.id)

          return student?.data
        },
        element: <ManageStudentCreate/>
      },
      {
        path: "/manager/courses/students/:id",
        loader: async ({params}) => {

          const course = await getStudentCourse(params.id)

          return course?.data
        },
        element: <StudentCourseList/>
      },
      {
        path: "/manager/courses/students/:id/add",
        loader: async () => {
          const students = await getStudents()

          return students?.data
        },
        element: <StudentForm/>
      }
    ]
  },
  {
    path: "/student",
    id: STUDENT_SESSION,
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (!session || session.role !== 'student') {
        throw redirect('/student/sign-in')
      }

      return session
    },
    element: <LayoutDashboard isAdmin={false}/>,
    children:[
      {
        index: true,
        loader: async () => {
          const courses = await getCourseStudent()

          return courses?.data
        },
        element: <StudentPage/>
      },
      {
        path: "/student/detail-course/:id",
        loader: async ({params}) => {
          const course = await getCourseDetail(params.id, true)

          return course?.data
        },
        element: <ManageCoursePreview isAdmin={false}/>
      }
    ]
  },
  {
    path: "/student/sign-in",
    loader: async () => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (session && session.role === 'student') {
        throw redirect('/student')
      }

      return true
    },
    element: <SignIn type="student" />
  }
])

export default router