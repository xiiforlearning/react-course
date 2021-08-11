import React, { useState } from 'react'
import './styles.scss'
import Form from './components/Form/Form'
import Card from './components/CardList/Card'

const App: React.FC = () => {
  const [formValues, setFormValues] = useState([])
  return (
    <>
      <div className="title">
        <h1>React Forms</h1>
      </div>
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => {
          return <Card item={item} key={index} />
        })}
      </main>
    </>
  )
}
export default App
