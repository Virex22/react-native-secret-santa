import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/HomeScreen';
import Details from './screens/DetailsScreen';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Profile from './screens/ProfileScreen';
import CreateGroup from './screens/CreateGroupScreen';
import Group from './screens/GroupScreen';
import { UserProvider } from './context/UserContext';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Group" component={Group} />
          <Stack.Screen name="CreateGroup" component={CreateGroup} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;
