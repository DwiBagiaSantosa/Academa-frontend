import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Students = () => {
    const overview = useLoaderData();
  return (
    <section id="LatestStudents" className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <h2 className="font-extrabold text-[22px] leading-[33px]">Latest Students</h2>
        {overview?.students?.length === 0 && <p className="text-[#838C9D] my-auto ">You don't have any student yet</p>}
        {overview?.students?.map((student) => (
            <div className="card flex items-center gap-5" key={student._id}>
                <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img src={student.photo.url} className="w-full h-full object-cover" alt="thumbnail"/>
                </div>
                <div className="w-full">
                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">{student.name}</h3>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img src="/assets/images/icons/crown-purple.svg" alt="icon"/>
                        <p className="text-[#838C9D]">{student.courses.length} Course Joined</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}

export default Students
