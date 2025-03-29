import { apiInstanceAuth } from "../utils/axios";

export const getCourses = async () =>
  apiInstanceAuth.get("/courses").then((res) => res.data);

export const getCourseDetail = async (id) =>
  apiInstanceAuth.get(`/courses/${id}`).then((res) => res.data);

export const getCategories = async () =>
  apiInstanceAuth.get("/categories").then((res) => res.data);
export const createCourse = async (data) =>
  apiInstanceAuth
    .post("/courses", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const updateCourse = async (data, id) =>
  apiInstanceAuth
    .put(`/courses/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const deleteCourse = async (id) =>
  apiInstanceAuth.delete(`/courses/${id}`).then((res) => res.data);

export const createCourseContent = async (data) =>
  apiInstanceAuth.post("/courses/contents", data).then((res) => res.data);

export const getDetailContent = async (id) =>
  apiInstanceAuth.get(`/courses/contents/${id}`).then((res) => res.data);

export const updateCourseContent = async (data, id) => 
  apiInstanceAuth.put(`/courses/contents/${id}`, data).then((res) => res.data);

export const deleteCourseContent = async (id) => 
  apiInstanceAuth.delete(`/courses/contents/${id}`).then((res) => res.data);