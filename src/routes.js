//Modules imports
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Screens for navigation
import Opening from './screens/Opening'
import Signin from "./screens/Signin"
import Signup from "./screens/Signup"
import Feed from './screens/Feed'

//Routes for screens navigation
export default createAppContainer(
    createSwitchNavigator({
        Opening,
        Feed,
        Signin,
        Signup,
    })
);