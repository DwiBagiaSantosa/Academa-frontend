import React from 'react'
import Proptypes from 'prop-types'
import { Link, useRevalidator } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { deleteStudent } from '../../../services/studentService'

export default function StudentItem({
    imageUrl = "/assets/images/photos/photo-3.png",
    name = "Angga Risky Setiawan",
    totalCourse = 0,
    id = 1
}) {
    const revalidator = useRevalidator()

    const {ispending, mutateAsync} = useMutation({
        mutationFn: () => deleteStudent(id)
    })

    const handleDelete = async () => {
        try {
            await mutateAsync()

            revalidator.revalidate()
        } catch (error) {
            console.log("🚀 ~ handleDelete ~ error:", error)
            
        }
    }

  return (
    <div className="card flex items-center gap-5">
        <div className="relative flex shrink-0 w-20 h-20">
            <div className="w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src={imageUrl} className="w-full h-full object-cover" alt="photo"/>
            </div>
        </div>
        <div className="w-full">
            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">{name}</h3>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-[6px] mt-[6px]">
                    <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon"/>
                    <p className="text-[#838C9D]">{totalCourse} Course Joined</p>
                </div>
            </div>
        </div>
        <div className="flex justify-end items-center gap-3">
            <Link to={`/manager/students/edit/${id}`} className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                Edit Profile
            </Link>
            <button disabled={ispending} onClick={handleDelete} type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
        </div>
    </div>
  )
}

StudentItem.propTyeps = {
    imageUrl: Proptypes.string,
    name: Proptypes.string,
    totalCourse: Proptypes.number,
    id: Proptypes.number
}