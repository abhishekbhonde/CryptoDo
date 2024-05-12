import React from 'react'
import about from '../assets/about.png'
const AboutCompany = () => {
  return (
    <div className='flex mt-[70px]  justify-center gap-[90px]'>
        <div className='h-[462px] w-[408px] bg-[#2C3D4C] rounded-3xl flex flex-col items-center justify-center gap-10'>
            <h1 className='text-[24px] text-white mt-[15px]'>SMART CONTRACT #1</h1>
            <span><p className='text-white text-[20px]'>from CryptoDo</p></span>
            <img src={about} alt="" className='w-[127px]' />
            <button className='mt-5 h-[48px] w-[200px] rounded-[25px] bg-[#00C3FD] '>Create Contract</button>
        </div>
        <div className='flex flex-col justify-between'>
            <h1 className='text-[62px] text-white'>ABOUT COMPANY</h1>
            <div className='h-[264px] w-[693px]  text-white gap-10 flex flex-col'>
            <span><p>Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.</p></span>
            <span><p>Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.</p></span>
            <span><p className='text-[#0194FE] text-[23px]'>SMART-CONTRACT <span>- is a decentralized blockchain application. </span></p></span>
            </div>
        </div>
    </div>
  )
}

export default AboutCompany
