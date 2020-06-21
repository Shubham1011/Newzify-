import { createAppContainer } from "react-navigation";
import ArticleDetails from "./screen/ArticleDetails";
import SpecialScreen from "./screen/SpecialScreen";

const { createStackNavigator } = require("react-navigation-stack");
const { default: HomeScreen } = require("./screen/homescreen");


const navigator=createStackNavigator({
   HomeScreen:HomeScreen,
   ArticleDetails:ArticleDetails,
   SpecialScreen:SpecialScreen
},{
  initialRouteName:'HomeScreen',
  
  defaultNavigationOptions:{
    title:'Newzify',
    headerTitleStyle:{
      alignSelf:'center',
      fontWeight:'bold',
      fontStyle:'italic'
    }
  }
}
);
export default createAppContainer(navigator)