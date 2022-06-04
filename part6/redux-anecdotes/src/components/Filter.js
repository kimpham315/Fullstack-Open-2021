import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer'
import React from 'react'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(filterAnecdote(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter