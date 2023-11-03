import { createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
  name: "root",
  initialState: {
    PortFolioData: null,
  },
  reducers: {
    setPortFolioData: (state, action) => {
      state.PortFolioData = action.payload;
    },
  },
});

export default rootSlice.reducer;
export const { setPortFolioData } = rootSlice.actions;
