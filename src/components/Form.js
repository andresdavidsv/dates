import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Form = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Pacient: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Propiety: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => console.log(text)}
            keyboardType={'numeric'}
          />
        </View>
        <View>
          <Text style={styles.label}>Sintoms: </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => console.log(text)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderStyle: 'solid',
  },
});

export default Form;
