import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './chaser'

export const ChaserView = () => {
  const [value, setValue] = useState(1)
  const numOfChasers = useAppSelector((state) => state.chaser.numofChasers)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of chasers - {numOfChasers}</h2>
      <button onClick={() => dispatch(ordered())}>Order chaser</button>
      <input type='number' value={value} onChange={e=>setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restocked(value))}>Restock chasers</button>
    </div>
  )
}