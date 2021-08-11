import React from 'react'

interface Item {
  item: {
    fullName: string
    birthDate: string
    country: string
    gender: string
  }
}

const Card: React.FC<Item> = ({ item }) => {
  return (
    <div className="card">
      <div className="background-space" />
      <div className="container">
        <h4>
          <b>{item.fullName}</b>
        </h4>
        <p>{item.birthDate}</p>
        <p>{item.country}</p>
        <p>{item.gender}</p>
      </div>
    </div>
  )
}
export default Card
