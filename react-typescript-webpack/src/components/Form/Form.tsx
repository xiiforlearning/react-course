import React from 'react'
import { useState, useEffect } from 'react'

interface Props {
  setFormValues: (state: any) => void
}

interface IErrors {
  fullName: string
  birthDate: string
  agree: boolean
}

const Form: React.FC<Props> = ({ setFormValues }) => {
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [country, setCountry] = useState('USA')
  const [gender, setGender] = useState('Male')
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validate()
  }, [fullName, birthDate, agree])

  const reset = () => {
    setFullName('')
    setBirthDate('')
    setCountry('USA')
    setGender('Male')
    setAgree(false)
  }

  const validate = () => {
    setErrors({})
    if (!agree) {
      setErrors((state) => ({ ...state, agree }))
    }
    if (fullName === '') {
      setErrors((state) => ({ ...state, fullName }))
    }
    if (birthDate === '') {
      setErrors((state) => ({ ...state, birthDate }))
    }
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (Object.keys(errors).length !== 0) {
      return
    }

    setFormValues((state: any) => [
      ...state,
      { fullName, birthDate, country, gender, agree },
    ])
    reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form-field">
        <label className="form-label" htmlFor="fullName">
          <p>
            Full Name:
            {errors.fullName !== undefined && (
              <span className="errors">* This field can not be empty</span>
            )}
          </p>
          <input
            type="text"
            name="fullName"
            value={fullName}
            autoComplete="off"
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
      </fieldset>

      <fieldset className="form-field">
        <label className="form-label" htmlFor="birthDate">
          <p>
            Birth Date:
            {errors.birthDate !== undefined && (
              <span className="errors">* Please enter your birth date</span>
            )}
          </p>
          <input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
          />
        </label>
      </fieldset>

      <fieldset className="form-field">
        <label className="form-label" htmlFor="country">
          Country:
          <select
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Uzbekistan">Uzbekistan</option>
          </select>
        </label>
      </fieldset>

      <fieldset className="form-field switcher">
        <div>
          <input
            type="radio"
            name="gender"
            id="male"
            checked={gender === 'Male'}
            onChange={(event) => setGender('Male')}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            id="female"
            checked={gender === 'Female'}
            onChange={(event) => setGender('Female')}
          />
          <label htmlFor="female">Female</label>
        </div>
      </fieldset>

      <fieldset className="form-field">
        <label className="form-label" htmlFor="agree">
          <p>
            Are you agree?
            {errors.agree !== undefined && (
              <span className="errors">* agree should be checked</span>
            )}
          </p>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={() => setAgree((prev) => !prev)}
          />
        </label>
      </fieldset>

      <div className="submit-btn">
        <input type="submit" value="Send" />
      </div>
    </form>
  )
}
export default Form
