import React from 'react'
import contract1 from '../assets/contract1.png';
import contract2 from '../assets/contract2.png';
import contract3 from '../assets/contract3.png';
import { Button } from "@repo/ui/button";
const Advantages = () => {
  return (
    <div className="mt-[50px] font-semibold flex-col flex justify-center  w-[1200px] ml-auto mr-auto ">   
     
        <h1 className="text-white text-center text-[100px]">Advantages</h1>
       
        <div className="mt-[20px] border-[1px] border-slate-400   flex text-white  ">
           <div className="flex flex-col justify-center items-center">
                <img src={contract1} alt="" />
                <h1 className=" text-[24px] font-semibold">Smart contract #1</h1>
                <p className="text-[16px] ">Smart contracts are simply programs stored </p>
           </div>
           <div  className="flex flex-col justify-center items-center">
                <img src={contract2} alt="" />
                <h1 className="text-[24px] font-semibold">Smart contract #1</h1>
                <p className="text-[16px] ">Smart contracts are simply programs stored </p>
           </div>
           <div  className="flex flex-col justify-center items-center">
                <img src={contract3} alt="" />
                <h1 className="text-[24px] font-semibold">Smart contract #1</h1>
                <p className="text-[16px]">Smart contracts are simply programs stored </p>
           </div>
        
        </div>
        <div className="flex justify-center">
        <Button appName="Create Project"></Button>
        </div>
    </div>
  )
}

export default Advantages
