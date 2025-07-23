import { configureStore, createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    destination: "Hyderabad",
    checkIn: null,
    checkOut: null,
    guests: "2 adults · 0 children · 1 room",
    isWorkTravel: false,
  },
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    toggleWorkTravel: (state) => {
      state.isWorkTravel = !state.isWorkTravel;
    },
  },
});

export const {
  setDestination,
  setCheckIn,
  setCheckOut,
  setGuests,
  toggleWorkTravel,
} = searchSlice.actions;

const Store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

export default Store;
