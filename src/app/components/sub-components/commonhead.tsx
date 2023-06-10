import React from 'react'

interface HeadingProps {
    bluehead: string
    mainhead: string
}

const Commonhead: React.FC<HeadingProps> = ({
    bluehead,
    mainhead,
}) => {
  return (
    <div className="text-center">
        <span className="text-xs tracking-widest text-blue-700">{bluehead}</span>
        <p className="text-2xl md:text-4xl py-3 tracking-wide">{mainhead}</p>
    </div>
  )
}

export default Commonhead