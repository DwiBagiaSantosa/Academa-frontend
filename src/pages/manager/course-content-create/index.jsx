import React, { useState } from 'react'
import Editor, { Toolbar, BtnStyles, BtnBulletList } from 'react-simple-wysiwyg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { mutateContentSchema } from '../../../utils/zodSchema';
import { createCourseContent, updateCourseContent } from '../../../services/courseService';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

export default function ManageContentCreate() {
    const {id, contentId} = useParams()
    const navigate = useNavigate()

    const content = useLoaderData()
    // console.log("🚀 ~ ManageContentCreate ~ content:", content)

    const initialEditor = '<h1>Input your content here</h1>'

    const {register, handleSubmit, formState: { errors }, setValue, watch} = useForm({
        resolver: zodResolver(mutateContentSchema),
        defaultValues: {
            title: content?.title,
            type: content?.type,
            youtubeId: content?.youtubeId,
            // text: content?.text ? content.text : initialEditor,
        }
    });

    const [editorContent, setEditorContent] = useState(content?.text ? content.text : initialEditor)

    const mutateCreate = useMutation({
        mutationFn: (data) => createCourseContent(data)
    })

    const mutateUpdate = useMutation({
        mutationFn: (data) => updateCourseContent(data, contentId)
    })


    const type = watch('type')

    const onSubmit = async(values) => {
        // console.log("🚀 ~ onSubmit ~ values:", values)
        try {
            if (content === undefined) {
                await mutateCreate.mutateAsync({
                    ...values,
                    courseId: id
                })
            } else {
                await mutateUpdate.mutateAsync({
                    ...values,
                    courseId: id
                })
            }


            navigate(`/manager/courses/${id}`)
        } catch (error) {
            console.log("🚀 ~ onSubmit ~ error:", error)
        }
        
    }

  return (
    <>
        <div id="Breadcrumb" className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5">
            <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Manage Course</span>
            <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Course</span>
            <span className="last-of-type:after:content-[''] last-of-type:font-semibold">{content === undefined ? 'Add' : 'Edit'} Content</span>
        </div>
        <header className="flex items-center justify-between gap-[30px]">
            <div className="flex items-center gap-[30px]">
                <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                    <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail"/>
                </div>
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">{content === undefined ? 'Add' : 'Edit'} Content</h1>
                    <p className="text-[#838C9D] mt-[1]">Give a best content for the course</p>
                </div>
            </div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="title" className="font-semibold">Content Title</label>
                <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <img src="/assets/images/icons/note-favorite-black.svg" className="w-6 h-6" alt="icon" />
                    <input {...register("title")} type="text" id="title" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write better name for your course"  />
                </div>
                <span className="error-message text-[#FF435A]">
                    {errors?.title?.message}
                </span>
            </div>
            <div className="flex flex-col gap-[10px]">
                <label htmlFor="type" className="font-semibold">Select Type</label>
                <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <img src="/assets/images/icons/crown-black.svg" className="w-6 h-6" alt="icon" />
                    <select {...register("type")} id="type" className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent">
                        <option value="" hidden>Choose content type</option>
                        <option value="video" >Video</option>
                        <option value="text" >Text</option>
                    </select>
                    <img src="/assets/images/icons/arrow-down.svg" className="w-6 h-6" alt="icon" />
                </div>
                <span className="error-message text-[#FF435A]">
                    {errors?.type?.message}
                </span>
            </div>
            {type === 'video' && (
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="video" className="font-semibold">Youtube Video ID</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/bill-black.svg" className="w-6 h-6" alt="icon" />
                        <input {...register("youtubeId")} type="text" id="video" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write tagline for better copy" />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.youtubeId?.message}
                    </span>
                </div>
            )}
            {/* <div className="flex flex-col gap-[10px]">
                <label for="desc" className="font-semibold">Description</label>
                <div className="flex w-full rounded-[20px] border border-[#CFDBEF] gap-3 p-5  transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF] ring-2 ring-[#FF435A]">
                    <img src="/assets/images/icons/note-black.png" className="w-6 h-6" alt="icon" />
                    <textarea name="desc" id="desc" rows="5" className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Explain what this course about"></textarea>
                </div>
                <span className="error-message text-[#FF435A]">The description is  /</span>
            </div> */}
            {type === 'text' && (
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold">Content Text</label>
                    {/* <div id="editor">
                    </div>                 */}
                    {/* <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            toolbar: [
                            'undo', 'redo', '|',
                            'heading', '|', 'bold', 'italic', '|',
                            'link', 'insertTable', 'mediaEmbed', '|',
                            'bulletedList', 'numberedList', 'indent', 'outdent'
                            ],
                            licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDMwMzM1OTksImp0aSI6IjFhMDE1YjViLWY3YmItNGU2ZC1hY2NjLWIwYzMwMDAwY2JhMCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6Ijg1MmM1MGM2In0.R5urs3ihPH4UD5GEbpz7vd6zWGDNu2uj5UargJsiALkywXriJjDeGCZ50cKLVtZFzn9lbv_xjNlYCTgDVp-TTg',
                            plugins: [
                            Bold,
                            Essentials,
                            Heading,
                            Indent,
                            IndentBlock,
                            Italic,
                            Link,
                            List,
                            MediaEmbed,
                            Paragraph,
                            Table,
                            Undo
                            ],
                            initialData: '<h1>Hello from CKEditor 5!</h1>',
                        } }
                    /> */}
                    <Editor value={editorContent} onChange={(e)=> {
                        const data = e.target.value
                        setEditorContent(data)
                        setValue('text', data)
                    }} >
                        <Toolbar>
                            <BtnStyles />
                            <BtnBulletList />
                        </Toolbar>
                    </Editor>
                    <span className="error-message text-[#FF435A]">
                        {errors?.text?.message}
                    </span>
                </div>
            )}
            <div className="flex items-center gap-[14px]">
                <button type="button" className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                    Save as Draft
                </button>
                <button type="submit" disabled={content === undefined ? mutateCreate.isLoading : mutateUpdate.isLoading} className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                    {content === undefined ? 'Add' : 'Edit'} Content Now
                </button>
            </div>
        </form>
    </>
  )
}
