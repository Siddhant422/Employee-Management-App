/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Lock from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Index = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Feather name="bar-chart" size={24} />
          <Text style={styles.headingText}>Employee Management System</Text>
          <Lock name="lock" size={24} />
        </View>

        <View style={styles.secMainComp}>
          <TouchableOpacity style={styles.secComp} onPress={() => navigation.navigate('Employees') }>
            <View style={styles.secCompBtn}>
              <Ionicons name="people" size={24} />
            </View>
            <Text style={styles.ListStyle}>Employee List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secComp}>
            <View style={styles.secCompBtn}>
              <Ionicons name="people" size={24} />
            </View>
            <Text style={styles.ListStyle}>Mark Attendance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thirdMainComp}>
          <TouchableOpacity style={styles.thirdComp}>
            <View style={styles.thirdCompBtn}>
              <Ionicons name="newspaper-outline" size={24} />
            </View>
            <Text style={styles.thirdCompText}>Attendance Report</Text>
            <View style={styles.thirdCompBtnTwo}>
              <MaterialCommunityIcons name="chevron-right" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thirdComp}>
            <View style={styles.thirdCompBtn}>
              <Octicons name="repo-pull" size={24} />
            </View>
            <Text style={styles.thirdCompText}>Summary Report</Text>
            <View style={styles.thirdCompBtnTwo}>
              <MaterialCommunityIcons name="chevron-right" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thirdComp}>
            <View style={styles.thirdCompBtn}>
              <Octicons name="report" size={24} />
            </View>
            <Text style={styles.thirdCompText}>All Generate Reports</Text>
            <View style={styles.thirdCompBtnTwo}>
              <MaterialCommunityIcons name="chevron-right" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.thirdComp}>
            <View style={styles.thirdCompBtn}>
              <Ionicons name="people" size={24} />
            </View>
            <Text style={styles.thirdCompText}>Overtime Employees</Text>
            <View style={styles.thirdCompBtnTwo}>
              <MaterialCommunityIcons name="chevron-right" size={24} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.forthMainComp}>
          <TouchableOpacity style={styles.forthComp}>
            <View style={styles.fourthCompBtn}>
              <MaterialCommunityIcons name="guy-fawkes-mask" size={24} />
            </View>
            <Text style={styles.forthCompText}>Attendance Criteria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.forthComp, {backgroundColor: '#ABCABA'}]}>
            <View style={styles.fourthCompBtn}>
              <Feather name="bar-chart" size={24} />
            </View>
            <Text style={styles.forthCompText}>Increased Workflow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forthMainComp}>
          <TouchableOpacity
            style={[styles.forthComp, {backgroundColor: '#D3CCE3'}]}>
            <View style={styles.fourthCompBtn}>
              <MaterialCommunityIcons name="cash" size={24} />
            </View>
            <Text style={styles.forthCompText}>Cost Savings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.forthComp, {backgroundColor: '#BDC3C7'}]}>
            <View style={styles.fourthCompBtn}>
              <Octicons name="tasklist" size={24} />
            </View>
            <Text style={styles.forthCompText}>Employee Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c1d5f5',
    padding: 12,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
  },
  secComp: {
    backgroundColor: '#D3CCE3',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  secCompBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ListStyle: {
    marginTop: 7,
    color: 'black',
    fontWeight: '600',
  },
  secMainComp: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  thirdMainComp: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  thirdComp: {
    backgroundColor: '#BE93C5',
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  thirdCompBtn: {
    padding: 7,
    width: 45,
    height: 45,
    borderRadius: 7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdCompText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    flex: 1,
  },
  thirdCompBtnTwo: {
    width: 35,
    height: 35,
    borderRadius: 7,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forthMainComp: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  forthComp: {
    backgroundColor: '#f79d00',
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  fourthCompBtn: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forthCompText: {
    marginTop: 7,
    fontWeight: '200',
    color: 'black',
  },
});
