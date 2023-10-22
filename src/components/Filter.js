import React, { useEffect, useRef } from 'react';


const Filter = ({ filterCategory, items, categoryArr }) => {

  const oneEffect = useRef();

  useEffect(() => {
    oneEffect.current.classList.add("bg-orange-900")
    oneEffect.current.classList.add("text-white")
  }, [])

  const classButton = "outline-none py-2 px-2 rounded-lg hover:bg-orange-900 hover:text-white text-black border border-orange-900 "
  const onFilter = (cat) => {
    filterCategory(cat.innerHTML)
    for (let i = 0; i < document.querySelector(".ui").children.length; i++) {
      document.querySelector(".ui").children[i].classList.remove("bg-orange-900");
      document.querySelector(".ui").children[i].classList.remove("text-white");
    }
    cat.classList.add("bg-orange-900");
    cat.classList.add("text-white");
  }
  return (
    <div className="flex items-center flex-col gap-8">
         <h1 className='font-bold text-3xl relative before:absolute before:h-1 before:w-full before:left-0 before:bottom-0 p-4 before:bg-orange-900'>قائمة الطعام</h1>
        <div className='flex gap-2 ui'>
              <button ref={oneEffect} onClick={(e) => onFilter(e.currentTarget)} className={classButton}>الكل</button>
          {
            categoryArr.map((cat) => {
              return (
                <button onClick={(e) => onFilter(e.currentTarget)} className={classButton}>{cat}</button>
              )
            })
          }
        </div>
    </div>
  )
   
}

export default Filter
