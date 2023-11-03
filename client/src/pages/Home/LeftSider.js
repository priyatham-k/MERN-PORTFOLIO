import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row sm:gap-2 sm:pb-4'>
                    <a href='#'><i className="ri-facebook-circle-line text-gray-400 text-xl"></i></a>
                    <a href='#'><i className="ri-mail-line text-gray-400 text-xl"></i></a>
                    <a href='#'><i className="ri-instagram-line text-gray-400 text-xl"></i></a>
                    <a href='#'><i className="ri-linkedin-box-line text-gray-400 text-xl"></i></a>
                    <a href='#'><i className="ri-github-fill text-gray-400 text-xl"></i></a>
                </div>
                <div className='w-[1px] h-32 bg-[#2d959590] sm:hidden'></div>
            </div>
        </div>

    )
}

export default LeftSider;























