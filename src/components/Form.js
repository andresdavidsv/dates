import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = () => {
  const [pacient, savePacient] = useState('');
  const [propietary, savePropietary] = useState('');
  const [phone, savePhone] = useState('');
  const [sintoms, saveSintoms] = useState('');

  const [date, saveDate] = useState('');
  const [time, saveTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = date => {
    const options = {year: 'numeric', month: 'long', day: '2-digit'};
    saveDate(date.toLocaleDateString('en-US', options));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = time => {
    const options = {hour: 'numeric', minute: '2-digit', hour12: false};
    saveTime(time.toLocaleTimeString('en-US', options));
    hideTimePicker();
  };
  const submitDate = () => {
    if (
      pacient.trim() === '' ||
      propietary.trim() === '' ||
      phone.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      sintoms.trim() === ''
    ) {
      showAlert();
      return;
    }
  };

  const showAlert = () => {
    Alert.alert(
      'Error', //Title
      'All fields are required', // Message
      [
        {
          text: 'Ok', //Btn
        },
      ],
    );
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.label}>Pacient: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => savePacient(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Propietary: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => savePropietary(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => savePhone(text)}
            keyboardType={'numeric'}
          />
        </View>
        <View>
          <Text style={styles.label}>Date: </Text>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />
          <Text>{date}</Text>
        </View>
        <View>
          <Text style={styles.label}>Time: </Text>
          <Button title="Show Time Picker" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            is24Hour
          />
          <Text>{time}</Text>
        </View>
        <View>
          <Text style={styles.label}>Sintoms: </Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => saveSintoms(text)}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => submitDate()}
            style={styles.btnSubmit}>
            <Text style={styles.textSubmit}> Submit</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 30,
  },
  textSubmit: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;
