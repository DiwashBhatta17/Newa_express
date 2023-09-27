import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userAuthentication: true,
    restaurantAuthentication: true,
    adminAuthentication: true,
    loginPopup: false,
    signupPopup: false,
  },
  reducers: {
    setLogin: (state,action) =>{
        state.loginPopup = action.payload;
    },

    setSignup: (state, action)=>{
        state.signupPopup = action.payload
    },

    setUserTrue: (state)=>{
        state.userAuthentication = true;
    },
    setUserFalse: (state)=>{
        state.userAuthentication = false;
    }
    ,
    setRestaurantTrue: (state)=>{
        state.restaurantAuthenticationAuthentication = true;
    },
    setRestaurantFalse: (state)=>{
        state.restaurantAuthenticationAuthentication = true;
    },

    setAdminTrue: (state)=>{
        state.adminAuthentication = true;
    }
    ,
    setAdminFalse: (state)=>{
        state.adminAuthentication = false;
    }







  },
})

// Action creators are generated for each case reducer function
export const { setLogin,setSignup,setUserTrue,setUserFalse, setRestaurantTrue,setRestaurantFalse, setAdminTrue, setAdminFalse } = counterSlice.actions

export default counterSlice.reducer;