import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import SplashScreen from '../../Screens/SplashScreen';
import ScreenOne from '../../Screens/ScreenOne';
import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import principalNavigation from './principalNavigation';
import { AuthContext } from '../Context/AuthContext';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {

    const {logueado,cargando} = useContext(AuthContext)
    if(cargando){
        return(
            <SplashScreen />
        )
    }
    return (
     
      
        <Stack.Navigator>
          {
              logueado ? (
                <Stack.Screen options={{headerShown: false}} name="Principal" component={principalNavigation} />
              ) : (
                <>
                
                <Stack.Screen options={{headerShown: false}} name="One" component={ScreenOne} /> 
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
                </>
              )
          }
          
  
        </Stack.Navigator>
      
    );
  }
  