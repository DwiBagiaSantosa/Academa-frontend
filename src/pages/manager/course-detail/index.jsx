import React from 'react'
import TableContent from './table-content'
import { Link } from 'react-router-dom'

export default function ManageCourseDetail() {
  return (
    <>
        <div id="Breadcrumb" class="flex items-center gap-5 *:after:content-['/'] *:after:ml-5">
            <span class="last-of-type:after:content-[''] last-of-type:font-semibold">Dashboard</span>
            <span class="last-of-type:after:content-[''] last-of-type:font-semibold">Manage Course</span>
            <span class="last-of-type:after:content-[''] last-of-type:font-semibold">Details</span>
        </div>
        <header class="flex items-center justify-between gap-[30px]">
            <div>
                <h1 class="font-extrabold text-[28px] leading-[42px]">
                    Mastering React TypeScript 7 <br/>
                    Website Development
                </h1>
            </div>
            <div class="flex items-center gap-3">
                <Link to="#" class="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                    Edit Course
                </Link>
                <Link to={`/manager/courses/1/preview`} class="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                    Preview
                </Link>
            </div>
        </header>
        <section id="CourseInfo" class="flex gap-[50px]">
            <div id="Thumbnail" class="flex shrink-0 w-[480px] h-[250px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src="/assets/images/thumbnails/th-4.png" class="w-full h-full object-cover" alt="thumbnail"/>
            </div>
            <div class="grid grid-cols-2 gap-5 w-full">
                <div class="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                    <img src="/assets/images/icons/profile-2user-purple.svg" class="w-8 h-8" alt="icon"/>
                    <p class="font-semibold">12,489 Students</p>
                </div>
                <div class="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                    <img src="/assets/images/icons/crown-purple.svg" class="w-8 h-8" alt="icon"/>
                    <p class="font-semibold">Programming</p>
                </div>
                <div class="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                    <img src="/assets/images/icons/note-favorite-purple.svg" class="w-8 h-8" alt="icon"/>
                    <p class="font-semibold">873 Contents</p>
                </div>
                <div class="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
                    <img src="/assets/images/icons/cup-purple.svg" class="w-8 h-8" alt="icon"/>
                    <p class="font-semibold">Certificate</p>
                </div>
            </div>
        </section>
        <TableContent/>
    </>
  )
}
