import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './pages/detail';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Giriş' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Kayıt Ol' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Anasayfa' }} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detay' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
