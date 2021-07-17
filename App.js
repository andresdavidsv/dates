/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import Date from './src/components/Dates';
import Form from './src/components/Form';

const App = () => {
  const [showForm, saveShowForm] = useState(false);
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
  const displayForm = () => {
    saveShowForm(!showForm);
  };
  const closeKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => closeKeyboard()}>
        <View style={styles.container}>
          <Text style={styles.title}>Administrador de Citas</Text>
          <View>
            <TouchableHighlight
              onPress={() => displayForm()}
              style={styles.btnShowForm}>
              <Text style={styles.textShowForm}>
                {showForm ? 'Cancel Date' : 'Create new Date'}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            {showForm ? (
              <>
                <Text style={styles.title}>Crear Cita</Text>
                <Form
                  dates={dates}
                  setDates={setDates}
                  saveShowForm={saveShowForm}
                />
              </>
            ) : (
              <>
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
              </>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  title: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
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
  btnShowForm: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 30,
  },
  textShowForm: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
