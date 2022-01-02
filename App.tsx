import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import RadioGroup from "react-native-radio-buttons-group";

export default function App() {
  const [inputName, setInputName] = useState<string>("");
  const [inputAge, setInputAge] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const radioButtonsData = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Option 1",
      value: "option1",
    },
    {
      id: "2",
      label: "Option 2",
      value: "option2",
    },
  ];
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  function onPressRadioButton(radioButtonsArray: any) {
    setRadioButtons(radioButtonsArray);
  }

  const handleOnNameChange = (e: any) => {
    console.log("name", e);
    setInputName(e);
  };

  useEffect(() => {
    if (parseInt(inputAge) > 100) {
      console.log("enter the correct age");
      setErrorMessage("enter the correct age");
    } else {
      setErrorMessage("");
    }
  }, [inputAge]);

  const handleOnAgeChange = (e: any) => {
    let isNotNumber = false;
    for (let i = 0; i < e.length; i++) {
      console.log(e[i]);
      if (!(e.charCodeAt(i) >= 48 && e.charCodeAt(i) <= 57)) {
        isNotNumber = true;
      }
    }

    if (!isNotNumber) {
      setInputAge(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headding}>QUIZ</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={handleOnNameChange}
        value={inputName}
      ></TextInput>

      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Age"
        value={inputAge.toString()}
        onChangeText={handleOnAgeChange}
      ></TextInput>
      <Text style={styles.error}>{errorMessage}</Text>
      <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center

    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 300,
    margin: 10,
    height: 40,
  },
  headding: {
    fontSize: 50,
    fontWeight: "500",
    color: "purple",
    marginBottom: 80,
  },
  error: {
    color: "red",
  },
});
