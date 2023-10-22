import React, { useState } from 'react'
import Navbar_1 from './components/Navbar';
import './sass/main.css'
import Meals from './components/MealsAll.js'
import Filter from './components/Filter'
import {items} from './dataMenu';


const App = () => {

  const [state, setstate] = useState(items);

  const categoryArr = [...new Set(items.map((item) => item.category))]

  const filterCategory = (cat) => {
  if (cat === 'الكل') {
    setstate(items);
  }else {
    const newArr = items.filter((item) => item.category === cat)
   setstate(newArr)
  }
  }
  const filterSearch = (word) => {
  if (word !== "") {
    const newArr = items.filter((item) => 
    item.title === word
    )
    setstate(newArr)
  }else {
    setstate(items)
  }
  }
  return (
    <div className="">

        <Navbar_1 filterSearch={filterSearch}/>
        <div className="flex flex-col gap-8 items-center">
          <Filter filterCategory={filterCategory} items={state} categoryArr={categoryArr}/>
          <Meals items_2={state}/>
        </div>

    </div>
  )
}

export default App
