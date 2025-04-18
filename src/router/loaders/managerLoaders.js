import secureLocalStorage from "react-secure-storage";
import { STORAGE_KEY } from "../../utils/const";
import { redirect } from "react-router-dom";
import { getOverviews } from "../../services/overviewService";
import {
  getCategories,
  getCourseDetail,
  getCourses,
  getDetailContent,
  getStudentCourse,
} from "../../services/courseService";
import { getStudentById, getStudents } from "../../services/studentService";

export const requireManagerSession = () => {
  const session = secureLocalStorage.getItem(STORAGE_KEY);
  if (!session || session.role !== "manager") throw redirect("/");
  return session;
};

export const managerHomeLoader = async () => {
  const overviews = await getOverviews();
  return overviews?.data;
};

export const managerCoursesLoader = async () => {
  const data = await getCourses();
  return data;
};

export const createCourseLoader = async () => {
  const categories = await getCategories();
  return { categories, course: null };
};

export const editCourseLoader = async ({ params }) => {
  const categories = await getCategories();
  const course = await getCourseDetail(params.id);
  return { categories, course: course?.data };
};

export const courseDetailLoader = async ({ params }) => {
  const course = await getCourseDetail(params.id);
  return course?.data;
};

export const contentEditLoader = async ({ params }) => {
  const content = await getDetailContent(params.contentId);
  return content?.data;
};

export const coursePreviewLoader = async ({ params }) => {
  const course = await getCourseDetail(params.id, true);
  return course?.data;
};

export const managerStudentsLoader = async () => {
  const students = await getStudents();
  return students?.data;
};

export const editStudentLoader = async ({ params }) => {
  const student = await getStudentById(params.id);
  return student?.data;
};

export const studentCourseListLoader = async ({ params }) => {
  const course = await getStudentCourse(params.id);
  return course?.data;
};

export const studentFormLoader = async () => {
  const students = await getStudents();
  return students?.data;
};
