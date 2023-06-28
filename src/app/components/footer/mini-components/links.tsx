import React from 'react'
import Link from 'next/link';

interface LinkProps {
    title:string;
    linkOne:string;
    labelOne:string;
    linkTwo:string;
    labelTwo:string;
    linkThree:string;
    labelThree:string;
    linkFour:string;
    labelFour:string;
    linkFive:string;
    labelFive:string
    
}

const LinksPages:React.FC<LinkProps> = ({
    title,
    linkOne,
    labelOne,
    linkTwo,
    labelTwo,
    linkThree,
    labelThree,
    linkFour,
    labelFour,
    linkFive,
    labelFive
}) => {
  return (
    <div className="text-gray-500 px-20 md:px-0 pt-8 md:py-0">
        <div className="pb-6">
            <p className="font-bold text-3xl">{title}</p>
        </div>
        <ul className="ml-1">    
            <li className="tracking-widest pb-3"><Link href={linkOne}>{labelOne}</Link></li>
            <li className="tracking-widest pb-3"><Link href={linkTwo}>{labelTwo}</Link></li>
            <li className="tracking-widest pb-3"><Link href={linkThree}>{labelThree}</Link></li>
            <li className="tracking-widest pb-3"><Link href={linkFour}>{labelFour}</Link></li>
            <li className="tracking-widest"><Link href={linkFive}>{labelFive}</Link></li>
        </ul>
    </div>
  )
}

export default LinksPages