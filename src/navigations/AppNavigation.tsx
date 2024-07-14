import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroPage from '../screens/IntroPage';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import Dashboard from '../screens/Dashboard';
import MyHealthScreen from '../screens/MyHealthScreen';
import ReportScreen from '../screens/ReportScreen';
import DoctorScreen from '../screens/DoctorScreen';
import OrderScreen from '../screens/OrderScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import LogOutScreen from '../screens/LogOutScreen';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Dash" component={Dashboard} />
        <Stack.Screen name="MyHealth" component={MyHealthScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Doctor" component={DoctorScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="LogOut" component={LogOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
