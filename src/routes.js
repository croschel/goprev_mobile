import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Principal from '~/pages/Principal';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Quiz from '~/pages/Quiz';
import FirstQuestion from '~/pages/Quiz/FirstQuestion';
import SecondQuestion from '~/pages/Quiz/SecondQuestion';
import ThirdQuestion from '~/pages/Quiz/ThirdQuestion';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Applies from '~/pages/Applies';

export default (signed = false, firstlogin = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Principal,
          SignIn,
          SignUp,
        }),
        App: firstlogin
          ? createStackNavigator(
            {
              Quiz,
              FirstQuestion,
              SecondQuestion,
              ThirdQuestion,
            },
            {
              headerMode: 'none',
            },
            {
              defaultNavigationOptions: {
                headerLeftContainerStyle: {
                  alignContent: 'center',
                },
              },
            }
          )
          : createBottomTabNavigator(
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
                  width: 345,
                  marginHorizontal: 7,
                  marginBottom: 5,
                  padding: 5,
                  borderTopWidth: 0,
                  borderRadius: 40,
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
