import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchResults from '../../components/SearchResults';


const Employee = ({navigation}) => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        const response = await axios.get(
          'http://192.168.1.21:8000/employees',
        );
        setEmployees(response.data);
      } catch (error) {
        console.log('Error in fetching Employees data', error);
      }
    };
    fetchEmployeesData();
  }, []);
  console.log(employees);
  return (
    <View style={styles.firstComponent}>
      <View style={styles.secondComponent}>
        <Ionicons
          style={styles.SearchIcon}
          name="arrow-back"
          size={20}
          color="black"
        />
        <TouchableOpacity style={styles.thirdComponent}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            style={styles.textInput}
            placeholder="Search"
          />
          {employees.length > 0 && (
            <View>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {Employee.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={styles.SearchResults}>
          <Text>No Data</Text>
          <Text>Press on the Plus button and add your Employee</Text>
          <TouchableOpacity onPress={navigation.navigate('AddDetails')}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  firstComponent: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  thirdComponent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 4,
  },
  SearchIcon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
  },
  SearchResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
