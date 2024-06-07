import { configureStore } from '@reduxjs/toolkit'
import Cartsl from './slices/Cartsl'

export const store = configureStore({
  reducer: {
    // counter: CounterSlice
    cart: Cartsl
  },
});