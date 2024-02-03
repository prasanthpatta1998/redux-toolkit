const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../Features/Cake/cakeSlice')
const iceCreamReducer = require('../Features/IceCream/iceCreamSlice')
const userReducer = require('../Features/User/userSlice')

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
})


module.exports = store