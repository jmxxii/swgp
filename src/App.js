import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./components/Home";
import CategoryListScreen from './components/CategoryList';
import ProfileScreen from './components/Profile';

const App = () => {
  const AppContainer = createAppContainer(AppNavigator)
  return (
    <AppContainer />
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  CategoryList: {
    screen: CategoryListScreen
  },
  Profile: {
    screen: ProfileScreen
  }
},
{
  initialRouteName: 'Home',
});

export default App;
