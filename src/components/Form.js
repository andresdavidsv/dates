import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Form = () => {
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
