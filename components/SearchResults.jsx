import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

const SearchResults = ({data, input, setInput}) => {
  return (
    <View style={styles.mainComponet}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.firstComp}>
                <View style={styles.SecondComp}>
                  <Text style={styles.textStyle}>
                    {item?.employeeName?.charAt(0)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.NameText}>{item?.employeeName}</Text>
                  <Text style={styles.desigText}>
                    {item?.designation}({item?.employeeId})
                  </Text>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  mainComponet: {
    padding: 10,
  },
  firstComp: {
    marginVertical: 10,
    gap: 10,
    flexDirection: 'row',
  },
  SecondComp: {
    width: 50,
    height: 50,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#4b6cb7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
  NameText: {
    color: 'black',
    marginTop: 5,
    fontWeight: '800',
  },
});
