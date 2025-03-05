import React from 'react'
import Navbar from '../../components/navbar'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div class="relative flex flex-col flex-1 p-[10px]">
        <div class="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
            <img src="/assets/images/backgrounds/background-glow.png" class="absolute bottom-0 transform -translate-x-1/2 left-1/2" alt=""/>
        </div>
        <nav class="flex items-center justify-between p-[30px]">
            <Navbar/>
            <div class="flex items-center gap-3">
                <Link to="/manager/sign-in" >
                    <div class="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                        <span class="font-semibold text-white">My Dashboard</span>
                    </div>
                </Link>           
                <Link to="#" >
                    <div class="flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                        <span class="font-semibold text-white">Sign Up</span>
                    </div>
                </Link>
            </div>
        </nav>
        <header class="flex flex-col items-center gap-5 text-center mt-[50px]">
            <h1 class="font-extrabold text-[46px] leading-[69px] text-white">Best Pricing For Everyone<br />Who Wants to Grow Business</h1>
            <p class="text-lg leading-[27px] text-white">We delivery robust features to anyone unconditionally.</p>
        </header>
        <div class="grid grid-cols-2 gap-[30px] max-w-[840px] mx-auto mt-[60px]">
            <div class="card flex flex-col h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[30px] bg-[#080A2A]">
                <img src="/assets/images/icons/note-favorite-white.svg" class="w-[60px] h-[60px]" alt="icon" />
                <div>
                    <p class="font-extrabold text-[46px] leading-[69px] text-white">Rp 80.000</p>
                    <p class="text-[#6B6C7F] mt-[6px]">Billed every single month</p>
                </div>
                <hr class="border-[#262A56]" />
                <div class="flex flex-col gap-5">
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">Access gigantic features company</p>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">Students analytics and export</p>
                    </div>
                </div>
                <hr class="border-[#262A56]" />
                <p class="text-[#FF435A]">This plan is not available at this moment in your country, try again later.</p>
                <div class="flex flex-col gap-3">
                    <Link to="#" >
                        <div class="flex items-center justify-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                            <span class="font-semibold text-white">Contact Our Sales</span>
                        </div>
                    </Link>  
                </div>
            </div>
            <div class="card flex flex-col h-fit rounded-[20px] border border-[#262A56] p-[30px] gap-[30px] bg-[#080A2A]">
                <img src="/assets/images/icons/note-favorite-white.svg" class="w-[60px] h-[60px]" alt="icon" />
                <div>
                    <p class="font-extrabold text-[46px] leading-[69px] text-white">Rp 280.000</p>
                    <p class="text-[#6B6C7F] mt-[6px]">Billed every single month</p>
                </div>
                <hr class="border-[#262A56]" />
                <div class="flex flex-col gap-5">
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">Access gigantic features company</p>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">Students analytics and export</p>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">Life support 24/7 maintenances</p>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">Export and analyze data real time</p>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <img src="/assets/images/icons/tick-circle-white.svg" class="flex shrink-0 w-6 h-6" alt="icon" />
                        <p class="font-semibold text-white">More big features coming soon</p>
                    </div>
                </div>
                <hr class="border-[#262A56]" />
                <div class="flex flex-col gap-3">
                    <Link to="#" >
                        <div class="flex items-center justify-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                            <span class="font-semibold text-white">Choose This Plan</span>
                        </div>
                    </Link>
                    <Link to="#" >
                        <div class="flex items-center justify-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                            <span class="font-semibold text-white">Contact Our Sales</span>
                        </div>
                    </Link>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
