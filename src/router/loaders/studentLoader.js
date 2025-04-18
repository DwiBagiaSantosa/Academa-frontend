import { redirect } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "../../utils/const";
import { getCourseStudent } from "../../services/studentService";
import { getCourseDetail } from "../../services/courseService";

export const requireStudentSession = async () => {
  const session = secureLocalStorage.getItem(STORAGE_KEY);
  if (!session || session.role !== "student") throw redirect("/");
  return session;
};

export const studentHomeLoader = async () => {
  const courses = await getCourseStudent();
  return courses?.data;
};

export const studentCourseDetailLoader = async ({ params }) => {
  const course = await getCourseDetail(params.id, true);
  return course?.data;
};
