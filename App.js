import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from '../rn-starter/src/screens/ComponentScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen
  },
  {
    initialRouteName: "Component",
    defaultNavigationOptions: {
      title: "Glitch"
    }
  }
);

export default createAppContainer(navigator);
