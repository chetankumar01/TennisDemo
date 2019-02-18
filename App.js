import { createAppContainer, createStackNavigator } from 'react-navigation';
import PlayerList from './PlayerList';
import PlayerFilter from './PlayerFilter';

const MainStack = createStackNavigator(
  {
    PlayerList: {
      screen: PlayerList,
    },
  },
  {
    headerMode: 'none',
  },
);

// using reactnavigation modal for better user experience
const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    PlayerFilter: {
      screen: PlayerFilter,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
