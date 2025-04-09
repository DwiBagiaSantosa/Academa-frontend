import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Courses = () => {
    const overview = useLoaderData();
    // console.log("🚀 ~ Courses ~ overview:", overview)

  return (
    <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Courses</h2>
        {overview?.courses?.length === 0 && <p className="text-[#838C9D] my-auto ">You don't have any course yet</p>}
        {overview?.courses?.map((course) => (
            <div className="card flex items-center gap-5" key={course._id}>
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img src={course.thumbnail.url} className="w-full h-full object-cover" alt="thumbnail"/>
                </div>
                <div className="w-full">
                    <Link to={`/manager/courses/${course._id}`} className="font-bold text-xl leading-[30px] line-clamp-1">{course.name}</Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img src="/assets/images/icons/crown-purple.svg" alt="icon"/>
                        <p className="text-[#838C9D]">{course.category.name}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Courses
