import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = process.env.REACT_APP_API_KEY

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    async function fetchFood() {
      if (!query) return  // اگه سرچ خالی بود درخواست نفرسته
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      const data = await res.json()
      console.log(data.results)
      setFoodData(data.results)
    }
    fetchFood()
  }, [query])

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for food..."
      />
    </div>
  )
}
