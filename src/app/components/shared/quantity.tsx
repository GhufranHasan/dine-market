"use client";
import React, {useState} from 'react'

const Quantity = () => {
    const [num, setNum] = useState(1);

  return (
    <div className="flex items-center gap-x-2">
        <div className="border h-6 w-6 rounded-full flex items-center justify-center" onClick={() => {
            setNum(num <= 1 ? num : num - 1)
        }}>
            -
        </div>
        {num}
        <div className="border h-6 w-6 rounded-full flex items-center justify-center" onClick={() => {
            setNum(num + 1)
        }}>
            +
        </div>
    </div>
  )
}

export default Quantity