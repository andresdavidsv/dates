/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Date from './src/components/Dates';

const App = () => {
  // Define state of dates
  const [dates, setDates] = useState([
    {id: '1', pacient: 'Hook', propietary: 'Andres', sintoms: 'No come'},
    {id: '2', pacient: 'Redux', propietary: 'Mapaz', sintoms: 'No duerme'},
    {id: '3', pacient: 'Native', propietary: 'Yuliana', sintoms: 'No canta'},
  ]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de Citas</Text>
        <FlatList
          data={dates}
          renderItem={({item}) => <Date date={item} />}
          keyExtractor={date => date.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
