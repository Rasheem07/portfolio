import { createSlice } from "@reduxjs/toolkit"

const defaultTheme: string = "light";

const themeReducer = createSlice({
    name: 'theme',
    initialState: defaultTheme,
    reducers: {
        light() {
          return "light"
        },
        dark(){
          return "dark"
        },
        default(){
         return "light"
        }
    }
})

export default themeReducer.reducer;