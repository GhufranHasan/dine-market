import { FC } from 'react'

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" max-w-7xl h-full mx-auto px-4 sm:px-6 py-12 lg:px-0 justify-between">
        { children }
    </div>
  )
}

export default Wrapper