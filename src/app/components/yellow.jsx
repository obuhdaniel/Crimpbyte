import React from "react";
import Link from "next/link";





function OrangeButton({buttonText}) {
  return (
    <div>
      <button
       className="bg-orange-500 border-2 border-orange-400 px-5 py-1 rounded-lg text-white">
        {buttonText}
      </button>
    </div>
  );
}

export default OrangeButton;
