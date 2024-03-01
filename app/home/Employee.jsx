import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        const response = await axios.get('https://localhost:8000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.log('Error in fetching Employees data', error);
      }
    };
    fetchEmployeesData();
  }, []);
  console.log(employees);
  return (
    <View>
      <Text>employee</Text>
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({});
