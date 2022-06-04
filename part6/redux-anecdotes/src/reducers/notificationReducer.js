import { createSlice } from "@reduxjs/toolkit"

const notificationAtStart = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationAtStart,
  reducers: {
    showNotification(state, action) {
      const content = action.payload
      return content
    }
  }
})

export const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer