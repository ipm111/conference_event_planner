import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://pixabay.com/images/download/business-20031_640.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
  },
  {
      img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
  },
  {
      img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
  },
  {
      img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
  },

  {
      img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
  },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      //esto es lo mismo que recuperar el indice 
      //const index = action.payload
      //state[index] y esto validarlo en el if oo
      //const { payload: index } = action; que tambien asigna el valor de indice papaya de celaya!!
      const item = state[action.payload];
      if (item) {
          item.quantity++;
      }

    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
          item.quantity--;
      }
     
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
