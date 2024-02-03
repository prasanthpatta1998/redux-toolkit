const store = require("./App/Store")
const { cakeActions } = require("./Features/Cake/cakeSlice")
const {iceCreamActions} = require('./Features/IceCream/iceCreamSlice')
const {fetchUsers} = require('./Features/User/userSlice')

// console.log('Initial State', store.getState())
store.subscribe(() => console.log('Updated State', store.getState()))
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(5))

store.dispatch(fetchUsers())