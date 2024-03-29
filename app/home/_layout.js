/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Home from './index';
import Employees from './Employee';
import AddDetails from './AddDetails';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Employees" component={Employees} />
      <Stack.Screen name="AddDetails" component={AddDetails} />
    </Stack.Navigator>
  );
}

export default MyStack;
