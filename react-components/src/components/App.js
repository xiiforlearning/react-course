import React from 'react'
import cardsInfo from './cardsInfo'
import SearchBar from './SearchBar/SearchBar'
import Card from './Cards/Card'

function App() {
  const cards = cardsInfo.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      images={card.images}
      old_price={card.old_price}
      newPrice={card.newPrice}
      rupess={card.rupess}
      alt={card.alt}
      exp_date={card.exp_date}
    />
  ))

  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </div>
  )
}

export default App
