//Modules imports
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Screens for navigation
import Opening from './screens/Opening'
import Signin from "./screens/Signin"
import Signup from "./screens/Signup"
import Feed from './screens/Feed'
import DetailEvent from './screens/DetailEvent/index'
import DescriptionExtended from './screens/DetailEvent/DescriptionExtended'

//Routes for screens navigation
export default createAppContainer(
    createSwitchNavigator({
        Feed,
        Opening,
        DetailEvent,
        DescriptionExtended,
        Signin,
        Signup,
    })
);