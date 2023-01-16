import React from 'react'

const ProcessBar3 = ({ passOne, passTwo, passFour }) => {
    return (
        <div className='flex justify-center my-7'>
            {/* first step */}
            <div className='flex mr-5'>
                <div><img src="./images/tenancyApplication/tick.png" alt="tick" onClick={passOne} /></div>

                <div className='text-[0.7rem] font-semibold my-auto px-4'>Your Details</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>
            {/*second step*/}
            <div className='flex mr-5'>
                <div><img src="./images/tenancyApplication/tick.png" alt="tick" onClick={passTwo} /></div>

                <div className='text-[0.7rem] font-semibold my-auto px-4 '>Co-Applicants</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>
            {/*third step */}
            <div className='flex mr-5'>
                <div className='bg-bookMeBtnBg w-6 h-6 rounded-full text-white text-center bg-opacity'>3</div>

                <div className='text-[0.7rem] font-semibold my-auto px-4'>References</div>

                <div className='my-auto'>
                    <img src="./images/tenancyApplication/arrow.png" alt="arrow" />
                </div>
            </div>
            {/*fourth step*/}
            <div className='flex'>
                <div className='bg-bookMeBtnBg w-6 h-6 rounded-full text-white text-center bg-opacity-30' onClick={passFour}>4</div>

                <div className='text-[0.7rem] font-semibold my-auto px-4 opacity-30'>Review & Submit</div>


            </div>
        </div>
    )
}

export default ProcessBar3