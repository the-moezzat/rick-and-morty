import {createSlice} from "@reduxjs/toolkit";

interface DrawerState {
    isOpen: boolean
}

const initialState: DrawerState = {
    isOpen: false,
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer(state,  action: { payload: boolean }) {
            state.isOpen = action.payload
        },
    }
})

export const {openDrawer} = drawerSlice.actions
export default drawerSlice.reducer