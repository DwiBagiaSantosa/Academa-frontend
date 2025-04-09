import React from 'react'
import CardCourse from './CardCourse'
import { useLoaderData } from 'react-router-dom'

export default function StudentPage() {
  const courses = useLoaderData();
  console.log("🚀 ~ StudentPage ~ courses:", courses)

  return (
    <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB] h-full">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
        {courses?.length === 0 && <p className="text-[#838C9D] text-center text-xl my-auto ">You don't have any course yet</p>}
        {courses?.map((course) => (
            <CardCourse key={course._id} title={course.name} imageUrl={course.thumbnail.url} id={course._id} category={course.category.name} />
        ))}
    </section>
  )
}
