import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './home/_layout';

const index = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default index;
