import React from 'react'
import tokenomic from "../assets/tokenomic.png"
const Tokenmics = () => {
  return (
   <div>
     <div className='flex justify-center text-white h-full mt-[70px]'>
        <div >
        <div className='text-[62px] text-center font-bold '>
            <h1>TOKENOMICS</h1>
        </div>
        <div className=' flex w-[1100px] mt-[100px] gap-[60px] justify-center items-start'>
            <div className='flex flex-col w-[497px]  items-start gap-[10px] '>
                <h1 className='text-[45px] font-bold '>Distribution of tokens</h1>
                <p className='text-[23px] font-bold'>The <span className='text-[#01C3FD] '>CRYPTODO</span> company has its own <span className='text-[#01C3FD]'>CDO</span></p>
                <span><p className='text-[18px]'>It is accepted as a payment for the service, and also distributes the company's profits among the leaders.</p></span>
                <span><p className='text-[18]'>All tokens accepted as payment are burned and withdrawn from circulation.</p></span>
            </div>
            <div className=' gap-10'>
               <div className='flex gap-5 p-4'>
               <div className='w-[165px] h-[47px] rounded-lg flex justify-center items-center bg-[#102644] border-1 border-blue-500 ]'>
                    <p className='text-[18px]'>Liquidity</p>
                </div>
                <div className='w-[165px] h-[47px] flex justify-center items-center bg-[#102644] border-1 border-blue-500 ]'>
                    <p className='text-[18px]'>Team</p>
                </div>
                </div>
                <div className='flex gap-5 p-4'>
              
                <div className='w-[165px] h-[47px] flex justify-center items-center bg-[#102644] border-1 border-blue-500 ]'>
                    <p className='text-[18px]'>Presale</p>
                </div>
                <div className='w-[165px] h-[47px] flex justify-center items-center bg-[#102644] border-1 border-blue-500 ]'>
                    <p className='text-[18px]'>Private</p>
                </div>
                <div className='w-[165px] h-[47px] flex justify-center items-center bg-[#102644] border-1 border-blue-500 ]'>
                    <p className='text-[18px]'>Public</p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    <div className='text-white flex items-center gap-[100px] mt-[100px] '>
        <div>
            <img src={tokenomic} alt="" />
            </div>
   
    <div className='text-white'>
    <div className='flex flex-col w-[497px]  items-start gap-[10px] '>
                <h1 className='text-[45px] font-bold '>PROFIT DISTRIBUTION</h1>
                <p className='text-[23px] font-bold'>The <span className='text-[#01C3FD] '>CRYPTODO</span> company has its own <span className='text-[#01C3FD]'>CDO</span></p>
                <span><p className='text-[18px]'>It is accepted as a payment for the service, and also distributes the company's profits among the leaders.</p></span>
                <span><p className='text-[18]'>All tokens accepted as payment are burned and withdrawn from circulation.</p></span>
            </div>
    </div>
    </div>


   </div>
  )
}

export default Tokenmics
