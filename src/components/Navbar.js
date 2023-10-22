import React, { useEffect, useRef, useState } from 'react'
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import onFilter from './Filter'

const Navbar_1 = ({ filterSearch }) => {

  const [state, setstate] = useState('');

  const onSearch = () => {
    filterSearch(state)
  }
  useEffect(() => {
    onSearch()
  }, [state])

  console.log();
  return( 
      <div className="w-full bg-black p-4">
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900 w-full">
                    <button className="mr-4 ml-2 cursor-pointer py-1.5 text-2xl text-orange-900 font-bold">
                    مطعم البر
                    </button>
                <div className="relative flex w-full gap-2 md:w-max ">
                    <input onInput={(e) => {  
                        onSearch()
                        setstate(e.target.value)
                    }} placeholder='البحث هنا...' value={state} className='border-2 rounded-lg p-2 border-deep-orange-50 focus:outline-none focus:border-orange-900'></input>
                    {/* <button onClick={() => onSearch()} className='outline-none border-none py-2 px-3 rounded-lg font-bold border-deep-orange-50 bg-white border-2 hover:bg-orange-900 hover:text-white text-black hover:shadow-none shadow-none ' variant='none'>البحث</button> */}
                </div>
            </div>
      </div>);
}

export default Navbar_1
