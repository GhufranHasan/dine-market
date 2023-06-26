import React from 'react'

const Copyrights = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const designer = "Weird Design Studio"
    const developer = "Ghufran Hasan"
  return (
    <div className="md:flex max-w-7xl h-full md:mx-auto px-4 sm:px-6 py-6 lg:px-0 mx-10 md:justify-between text-gray-500 tracking-widest">
        <p>Copyright &copy; {currentYear} Dine Market</p>
        <p className="py-4 md:py-0">Designed by.<span className="text-black font-bold pl-1">{designer}</span></p>
        <p>Developed by.<span className="text-black font-bold pl-1">{developer}</span></p>
    </div>
  )
}

export default Copyrights