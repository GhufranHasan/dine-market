import React from 'react'

interface FeatureProps{
    title:string
}

const FeaturePart:React.FC<FeatureProps> = ({title}) => {
  return (
    <div className="">
        <p className="font-semibold tracking-[0.48px]">{title}</p>
        <p className="font-light tracking-[0.48px] py-2">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
  )
}

export default FeaturePart