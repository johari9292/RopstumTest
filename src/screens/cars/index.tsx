//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/store/hookType';
import {getCars} from '../../redux/slices/cars';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

// create a component
const CarsList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useAppDispatch();
  const cars = useAppSelector(state => state?.carsSlice?.cars);
  const getCarsData = async () => {
    try {
      //   let response = await axios.get('url'); will used axios service class to give
      // authorization token and other headers
      let data: Array<any> = [
        {
          category: 'A',
          color: 'red',
          model: '2020',
          make: 'toyoa3',
          registration_no: 'AB456',
        },
        {
          category: 'B',
          color: 'green',
          model: '2021',
          make: 'suzuki',
          registration_no: 'SD45',
        },
        {
          category: 'A',
          color: 'red',
          model: '2020',
          make: 'toyoa3',
          registration_no: 'AB456',
        },
        {
          category: 'C',
          color: 'red',
          model: 'Y1999',
          make: 'm2hran',
          registration_no: 'LP32K',
        },
      ];
      dispatch(getCars(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCarsData();
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
            width: '100%',
          }}>
          <Text style={{fontWeight: 'bold'}}>Modal: {item.model}</Text>
          <Text>Category: {item.category}</Text>
          <Text>Color:{item.color}</Text>
          <Text>Model: {item.model}</Text>
          <Text>REgistration Number{item.registration_no}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default CarsList;
