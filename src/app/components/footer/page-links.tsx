import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LinksPages from '../sub-components/links'
import Copyrights from '../sub-components/copyrights'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const imageLink: string = '/Logo.png'

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="md:flex max-w-7xl h-full mx-auto px-4 sm:px-6 py-12 lg:px-0 justify-between text-gray-500">
        <div className="w-96 md:w-[390px]">
          <Link href="/"><Image src={imageLink} alt="Dine Market" width={140} height={25} /></Link>
          <p className="py-8 leading-5 tracking-widest">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className="flex">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Link href="https://twitter.com/" target="_blank"><FaTwitter className="inline-block text-gray-800" /></Link>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg mx-2">
              <Link href="https://facebook.com/" target="_blank"><FaFacebookF className="inline-block text-gray-800" /></Link>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <Link href="https://linkedin.com/" target="_blank"><FaLinkedinIn className="inline-block text-gray-800" /></Link>
            </div>
          </div>
        </div>
        <LinksPages
          title="Company"
          linkOne="/about" labelOne="About"
          linkTwo="/terms-of-use" labelTwo="Terms Of Use"
          linkThree="/privacy-policy" labelThree="Privacy Policy"
          linkFour="/how-it-works" labelFour="How it works"
          linkFive="/contact" labelFive="Contact Us" 
        />
        <LinksPages
          title="Support"
          linkOne="/support-carrer" labelOne="Support Carrer"
          linkTwo="/service" labelTwo="24h Service"
          linkThree="/quick-chat" labelThree="Quick Chat"
          linkFour="/" labelFour=""
          linkFive="/" labelFive="" 
        />
        <LinksPages
          title="Contact"
          linkOne="/" labelOne="Whatsapp"
          linkTwo="/support-24" labelTwo="Support 24"
          linkThree="/" labelThree=""
          linkFour="/" labelFour=""
          linkFive="/" labelFive="" 
        />
      </div>
      <div className="border-t-2 border-gray-400">
        <Copyrights />
      </div>
    </div>
  )
}

export default Footer