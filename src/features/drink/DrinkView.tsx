import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './drinkBottle'

export const DrinkView = () => {
  const numOfDrinks = useAppSelector(state => state.drink.numofDrinks)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of drinks - {numOfDrinks}</h2>
      <button onClick={() => dispatch(ordered())}>Order drink</button>
      <button onClick={() => dispatch(restocked(5))}>Restock drinks</button>
    </div>
  )
}