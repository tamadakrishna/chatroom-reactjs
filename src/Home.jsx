import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center px-2 ">
      <div className="w-[400px] h-[150px] flex justify-center items-center gap-2 rounded-[5px] bg-[#F3F4F6] border-2 border-gray-400
                      mobile:w-[250px] mobile:h-[120px]">
      <Link to="private">
        <div className="w-[150px] h-[40px] cursor-pointer rounded-[5px] flex justify-center items-center  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border-2 border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 
                      dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
                        mobile:w-[80px] mobile:h-[25px]">
          <span className="font-semibold text-[#292929]">Private</span>
        </div>
        </Link>
        <Link to="public">
        <div className="w-[150px] h-[40px] cursor-pointer rounded-[5px] flex justify-center items-center  py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border-2 border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 
                      dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
                        mobile:w-[80px] mobile:h-[25px]">
          <span className="font-semibold text-[#292929]">Public</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Home