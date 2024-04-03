import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CommunityCropReportResponseItem = {
  crop_id?: string;
  cfc_id?: string;
  crop_name?: string;
  date_planted?: string;
  date_harvested?: string;
  harvested_qty?: string;
  withered_crops?: string;
  image?: string;
};

const initialState: CommunityCropReportResponseItem = {
  crop_id: "",
  cfc_id: "",
  crop_name: "",
  date_planted: "",
  date_harvested: "",
  harvested_qty: "",
  withered_crops: "",
  image: ""
};

const existingCropSlice = createSlice({
  name: "existingCrop",
  initialState,
  reducers: {
    setExistingCrop: (
      state,
      action: PayloadAction<CommunityCropReportResponseItem>
    ) => {
      return action.payload;
    },
    clearExistingCrop: state => initialState
  }
});

export const { setExistingCrop, clearExistingCrop } = existingCropSlice.actions;

export default existingCropSlice.reducer;
