import { createBrowserRouter } from "react-router-dom";
import { MANAGER_SESSION, STUDENT_SESSION } from "../utils/const";
import ManagerHome from "../pages/manager/home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SuccessCheckout from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/layout";
import ManageCourse from "../pages/manager/courses";
import ManageCreateCourse from "../pages/manager/create-course";
import ManageCourseDetail from "../pages/manager/course-detail";
import ManageContentCreate from "../pages/manager/course-content-create";
import ManageCoursePreview from "../pages/manager/course-preview";
import ManageStudents from "../pages/manager/students";
import StudentPage from "../pages/student";
import ManageStudentCreate from "../pages/manager/students-create";
import StudentCourseList from "../pages/manager/student-course";
import StudentForm from "../pages/manager/student-course/student-form";
import {
  managerAuthLoader,
  rootLoader,
  studentAuthLoader,
} from "./loaders/authLoaders";
import {
  contentEditLoader,
  courseDetailLoader,
  coursePreviewLoader,
  createCourseLoader,
  editCourseLoader,
  editStudentLoader,
  managerCoursesLoader,
  managerHomeLoader,
  managerStudentsLoader,
  requireManagerSession,
  studentCourseListLoader,
  studentFormLoader,
} from "./loaders/managerLoaders";
import {
  requireStudentSession,
  studentCourseDetailLoader,
  studentHomeLoader,
} from "./loaders/studentLoader";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/manager/sign-in",
    loader: managerAuthLoader,
    element: <SignIn />,
  },
  {
    path: "/manager/sign-up",
    loader: managerAuthLoader,
    element: <SignUp />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckout />,
  },
  {
    path: "/manager",
    id: MANAGER_SESSION,
    loader: requireManagerSession,
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        loader: managerHomeLoader,
        element: <ManagerHome />,
      },
      {
        path: "/manager/courses",
        loader: managerCoursesLoader,
        element: <ManageCourse />,
      },
      {
        path: "/manager/courses/create",
        loader: createCourseLoader,
        element: <ManageCreateCourse />,
      },
      {
        path: "/manager/courses/edit/:id",
        loader: editCourseLoader,
        element: <ManageCreateCourse />,
      },
      {
        path: "/manager/courses/:id",
        loader: courseDetailLoader,
        element: <ManageCourseDetail />,
      },
      {
        path: "/manager/courses/:id/create",
        element: <ManageContentCreate />,
      },
      {
        path: "/manager/courses/:id/edit/:contentId",
        loader: contentEditLoader,
        element: <ManageContentCreate />,
      },
      {
        path: "/manager/courses/:id/preview",
        loader: coursePreviewLoader,
        element: <ManageCoursePreview />,
      },
      {
        path: "/manager/students",
        loader: managerStudentsLoader,
        element: <ManageStudents />,
      },
      {
        path: "/manager/students/create",
        element: <ManageStudentCreate />,
      },
      {
        path: "/manager/students/edit/:id",
        loader: editStudentLoader,
        element: <ManageStudentCreate />,
      },
      {
        path: "/manager/courses/students/:id",
        loader: studentCourseListLoader,
        element: <StudentCourseList />,
      },
      {
        path: "/manager/courses/students/:id/add",
        loader: studentFormLoader,
        element: <StudentForm />,
      },
    ],
  },
  {
    path: "/student",
    id: STUDENT_SESSION,
    loader: requireStudentSession,
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        loader: studentHomeLoader,
        element: <StudentPage />,
      },
      {
        path: "/student/detail-course/:id",
        loader: studentCourseDetailLoader,
        element: <ManageCoursePreview isAdmin={false} />,
      },
    ],
  },
  {
    path: "/student/sign-in",
    loader: studentAuthLoader,
    element: <SignIn type="student" />,
  },
]);

export default router;
