import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Contact from './Contact';
import ContactDetails from './ContactDetails';

const RootStack = createStackNavigator(
  {
    Contact: {screen: Contact},
    ContactDetails: {screen: ContactDetails},
  },
  {
    initialRouteName: 'Contact',
  },
);
const Router = createAppContainer(RootStack);

export default Router;
