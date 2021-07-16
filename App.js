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
import Form from './src/components/Form';

const App = () => {
  // Define state of dates
  const [dates, setDates] = useState([
    {id: '1', pacient: 'Hook', propietary: 'Andres', sintoms: 'No come'},
    {id: '2', pacient: 'Redux', propietary: 'Mapaz', sintoms: 'No duerme'},
    {id: '3', pacient: 'Native', propietary: 'Yuliana', sintoms: 'No canta'},
  ]);
  //Delete
  const deletePacient = id => {
    setDates(dateActual => {
      return dateActual.filter(date => date.id !== id);
    });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de Citas</Text>
        <View style={styles.content}>
          <Form />
          <Text style={styles.title}>
            {dates.length > 0 ? 'Administra tus Citas' : 'No hay citas'}{' '}
          </Text>
          <FlatList
            style={styles.list}
            data={dates}
            renderItem={({item}) => (
              <Date date={item} deletePacient={deletePacient} />
            )}
            keyExtractor={date => date.id}
          />
        </View>
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
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  list: {
    flex: 1,
  },
});

export default App;
