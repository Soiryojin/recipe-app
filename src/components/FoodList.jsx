import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div> 
      {foodData.map((food, index) => (
        <FoodItem setFoodId={setFoodId} key={food.id || index} food={food}/>
      ))}
    </div>
  )  
}
