import { configureStore} from '@reduxjs/toolkit'
import TripsSlice from '../features/Trips/TripsSlice'
export const store=configureStore({
    reducer:{
        trip:TripsSlice
    }
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
