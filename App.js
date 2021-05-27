import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndicatorsScreen from './screens/Indicators';
import Modal from './screens/Modal';

const AppNavigator = createStackNavigator(
  {
    Indicators: {
      screen: IndicatorsScreen,
    },
  },
  {initialRouteName: 'Indicators'},
);

const RootStack = createStackNavigator(
  {
    Main: AppNavigator,
    Modal: Modal,
  },
  {mode: 'modal', headerMode: 'none'},
);

export default createAppContainer(RootStack);