import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
const FoodDisplay = ({category}) => {
    const{food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Makanan favoritmu</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

          }
        })}
      </div>
    </div>
  )
}
import { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
export default FoodDisplay
