import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../reduser/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice
  },
})