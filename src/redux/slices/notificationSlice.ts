import { createSlice } from "@reduxjs/toolkit";

interface NotificationState {
  isRead: boolean;
}

const initialState: NotificationState = {
  isRead: Boolean(localStorage.getItem("notification"))
};

const notification = createSlice({
  name: "notification",
  initialState,
  reducers: {
    hideNotificationBadge: state => {
      state.isRead = true;
    },
    showNotificationBadge: state => {
      state.isRead = false;
    }
  }
});

export const { hideNotificationBadge, showNotificationBadge } =
  notification.actions;
export default notification.reducer;
