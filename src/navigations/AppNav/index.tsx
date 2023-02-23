import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../screens/dashboard';
import CarsList from '../../screens/cars';
import Details from '../../screens/cars/Details';
import AddForm from '../../screens/cars/AddForm';
import {Button} from 'react-native-paper';
const Stack = createNativeStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="CarsList"
          component={CarsList}
          options={({navigation, route}) => ({
            title: 'Car List',
            headerRight: () => (
              <Button
                mode="contained"
                onPress={() => navigation.navigate('AddForm')}>
                Add New
              </Button>
            ),
          })}
        />
        <Stack.Screen name="AddForm" component={AddForm} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;
