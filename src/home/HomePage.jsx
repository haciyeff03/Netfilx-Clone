import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)

  return (
    <>
      <Homes />
      <Upcomming items={items} title='Cizgi filmləri' />
      <Upcomming items={item} title='Ən yeni filmlər' />
      <Trending />
      <Upcomming items={rec} title='Tövsiyə edilənlər' />
    </>
  )
}

export default HomePage
