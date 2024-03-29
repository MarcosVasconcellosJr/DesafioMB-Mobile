//Modules imports
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Screens for navigation
import Opening from './screens/Opening'
import Signin from "./screens/Signin"
import Signup from "./screens/Signup"
import Feed from './screens/Feed'
import DetailEvent from './screens/DetailEvent'
import DescriptionDetailed from './screens/DescriptionDetailed'
import CalendarPicker from './screens/CalendarPicker/CalendarPicker'
// import BuyScreen from './screens/BuyScreen'


//Routes for screens navigation
export default createAppContainer(
    createSwitchNavigator({
        Opening,
        // BuyScreen,
        Feed,
        Signin,
        DetailEvent,
        CalendarPicker,
        DescriptionDetailed,
        Signup,
    })
);