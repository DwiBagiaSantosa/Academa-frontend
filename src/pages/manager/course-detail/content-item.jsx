import React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function ContentItem({
    id = "1", 
    index = 1, 
    type = "video", 
    title = "Install VSCode di Windows",
    courseId = "505"
}) {
  return (
    <div class="card flex items-center gap-5">
        <div class="relative flex shrink-0 w-[140px] h-[110px] ">
            <p class="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                <span class="font-bold text-sm leading-[21px]">{index}</span>
            </p>
            <div class="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src={`/assets/images/thumbnails/cover-${type}.png`} class="w-full h-full object-cover" alt="thumbnail"/>
            </div>
        </div>
        <div class="w-full">
            <h3 class="font-bold text-xl leading-[30px] line-clamp-1">{title}</h3>
            <div class="flex items-center gap-5">
                <div class="flex items-center gap-[6px] mt-[6px]">
                    <img src={`/assets/images/icons/${type === "text" ? "note-favorite-purple.svg": "video-play-purple.svg"}`} class="w-5 h-5" alt="icon"/>
                    <p class="text-[#838C9D]">{type} Content</p>
                </div>
            </div>
        </div>
        <div class="flex justify-end items-center gap-3">
            <Link to={`/manager/courses/${courseId}/edit/${id}`} class="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                Edit Content
            </Link>
            <button type="button" class="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
        </div>
    </div>
  )
}

ContentItem.propTypes = {
    id: Proptypes.string,
    index: Proptypes.number,
    type: Proptypes.string,
    title: Proptypes.string,
    courseId: Proptypes.string
}