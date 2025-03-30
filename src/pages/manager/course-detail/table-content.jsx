import React from 'react'
import ContentItem from './content-item'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'

export default function TableContent({details, courseId}) {
  return (
    <section id="CourseList" class="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
        <div class="header flex items-center justify-between">
            <h2 class="font-bold text-[22px] leading-[33px]">Course Content</h2>
            <Link to={`/manager/courses/${courseId}/create`} class="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                Add Content
            </Link>
        </div>
        {details.map((content, index) => (
            <ContentItem key={content._id} type={content.type} title={content.title} id={content._id} index={index+1} courseId={courseId} />
        ))}
        {/* <ContentItem type='video'/> */}
        {/* <div id="Pagination" class="flex items-center gap-3">
            <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white">
                <span class="font-semibold text-sm leading-[21px]">1</span>
            </button>
            <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                <span class="font-semibold text-sm leading-[21px]">2</span>
            </button>
            <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                <span class="font-semibold text-sm leading-[21px]">3</span>
            </button>
            <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                <span class="font-semibold text-sm leading-[21px]">4</span>
            </button>
            <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                <span class="font-semibold text-sm leading-[21px]">5</span>
            </button>
        </div> */}
    </section>
  )
}

TableContent.propTypes = {
    details: Proptypes.array,
    courseId: Proptypes.string
}