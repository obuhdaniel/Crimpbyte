import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function SeeMore() {
  return (
    <div>
          <button className="border-2 border-[#EA5F00] rounded-[8px] py-2 px-6 flex items-center justify-center gap-2 dark:text-[#f2f1f1] text-black hover:bg-orange-500 hover:text-white transition-all">
  See More <IoIosArrowForward />
</button>        </div>
  )
}

export default SeeMore