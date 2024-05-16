import React from 'react'
import phone from '../assets/phone.png'
import {Button} from '@repo/ui/button'
const HomePage = () => {
  return (
    <div className='flex mt-20 justify-center gap-[80px]'>
       
        <div className='flex items-start flex-col ml-[100px] text-white '>
            <h1 className='text-[144px] font-bold text-white'>CryptoDo</h1>
            <span><p className='mt-5 p-[10px] text-white text-[25]'>The best crypto smart-contract to make better future.
            <br/>
            </p></span>
            <span className='mt-1 p-[10px]'>
            Start building your smart contract with <span>CryptoDo</span>
            </span>
            <button className='mt-5 h-[48px] w-[200px] rounded-[25px] bg-[#00C3FD] '>Create a contract</button>
        </div>
        <div>
            <img className="w-[450px] mr-[100px]" src={phone}  />
        </div>
       
    </div>
  )
}

export default HomePage
