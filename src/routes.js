//Modules imports
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Screens for navigation
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Feed from './screens/Feed';

//Routes for screens navigation
export default createAppContainer(
    createSwitchNavigator({
        Feed,
        Signin,
        Signup,
    })
);