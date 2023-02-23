import {createSlice} from '@reduxjs/toolkit';

interface authType {
  cars: Array<any>;
}

const initialState: authType = {
  cars: [],
};

export const carsSlice = createSlice({
  name: 'carsSlice',
  initialState,
  reducers: {
    getCars: (state, action) => {
      state.cars = action.payload;
    },

    addCars: (state, action) => {
      state.cars = [...state.cars, action.payload];
    },
    updateCars: (state, action) => {
      state.cars = state.cars.map(car =>
        car.id.toString() === action.payload.id.toString()
          ? {car, ...action.payload}
          : car,
      );
    },

    deleteCars: (state, action) => {
      state.cars = state.cars.filter(
        car => car.id.toString() !== action.payload.id.toString(),
      );
    },
  },
});

export const {getCars, addCars, updateCars, deleteCars} = carsSlice.actions;

export default carsSlice.reducer;
