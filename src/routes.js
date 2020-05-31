import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Principal from '~/pages/Principal';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Applies from '~/pages/Applies';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Principal,
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Applies,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: false,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(150, 150, 150, 0.6)',
              style: {
                backgroundColor: '#7b2be8',
                height: 70,
                padding: 5,
                borderTopWidth: 0,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signed ? 'App' : 'Sign',
      }
    )
  );
