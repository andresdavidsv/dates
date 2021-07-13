import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Date = ({date, deletePacient}) => {
  const modalDelete = id => {
    console.log('Eliminar', id);
    deletePacient(id);
  };
  return (
    <View style={styles.containerDate}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.text}>{date.pacient} </Text>
      </View>
      <View>
        <Text style={styles.label}>Propietary: </Text>
        <Text style={styles.text}>{date.propietary} </Text>
      </View>
      <View>
        <Text style={styles.label}>Sintoms: </Text>
        <Text style={styles.text}>{date.sintoms} </Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => modalDelete(date.id)}
          style={styles.btnDelete}>
          <Text style={styles.textDelete}> Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDate: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textDelete: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Date;
