import {StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const AddDetails = () => {
  return (
    <ScrollView style={styles.mainComp}>
      <View style={styles.firstComp}>
        <Text style={styles.HeadText}>Add a new Employee</Text>
        <TextInput
          style={styles.mainTextInput}
          placeholder="India"
          placeholderTextColor={'black'}
        />
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Full Name (First and last Name)</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Enter your name"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Employee ID</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Employee ID"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Designation</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Designation"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Mobile Number</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Mobile Number"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Enter Date of Birth</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Enter date of birth"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Joining Date</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Joining Date"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.mainSecComp}>
          <Text>Active Employee</Text>
          <Text>True</Text>
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Salary</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Enter your salary"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.secComp}>
          <Text style={styles.HeadText}>Address</Text>
          <TextInput
            style={styles.mainTextInput}
            placeholder="Enter your address"
            placeholderTextColor={'black'}
          />
        </View>
        <TouchableOpacity style = {styles.addbtn}>
            <Text style = {styles.addEmp}>Add Employee</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddDetails;

const styles = StyleSheet.create({
  mainComp: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeadText: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
  },
  firstComp: {
    padding: 10,
  },
  mainTextInput: {
    padding: 10,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  secComp: {
    marginVertical: 10,
  },
  mainSecComp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addbtn: {
    backgroundColor: '#ABCABA',
    padding: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 5,
  },
  addEmp:{
    fontWeight: "bold",
    color: 'white',
  }
});
