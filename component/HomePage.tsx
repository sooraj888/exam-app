import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

const HomePage = ({
  setLaguage,
  setGender,
  handleOnNameChange,
  inputName,
  inputAge,
  handleOnAgeChange,
  errorMessage,
}: any) => {
  const radioButtonsData = [
    {
      id: "1",
      label: "male",
      value: "male",
    },
    {
      id: "2",
      label: "female",
      value: "female",
    },
    {
      id: "3",
      label: "others",
      value: "others",
    },
  ];

  const languageRadioBtnData = [
    { id: "1", label: "Kannada", value: "Kannada" },
    { id: "2", label: "English   ", value: "English" },
    { id: "3", label: "Hindi      ", value: "Hindi" },
  ];
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [languageRadioBtn, setlanguageRadioBtn] =
    useState(languageRadioBtnData);
  const onPressLanguageRadioButton = (laguages: any) => {
    setlanguageRadioBtn(laguages);
    console.log(laguages);
    laguages.map((item: any) => {
      if (item.selected) {
        setLaguage(item.value);
      }
    });
  };
  function onPressRadioButton(radioButtonsArray: any) {
    setRadioButtons(radioButtonsArray);
    // console.log(radioButtonsArray);

    radioButtonsArray.map((item: any) => {
      // console.log(item);
      if (item.selected) {
        setGender(item.value);
      }
    });
  }
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
        maxLength={3}
      ></TextInput>
      <Text style={styles.error}>{errorMessage}</Text>

      <View style={styles.gender}>
        <Text style={styles.lableForGender}>Gender:</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />
      </View>
      <View style={styles.laguage}>
        <Text style={styles.lableForLanguage}>language:</Text>
        <RadioGroup
          radioButtons={languageRadioBtn}
          onPress={onPressLanguageRadioButton}
        />
      </View>
    </View>
  );
};

export default HomePage;

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
    marginBottom: 60,
  },
  error: {
    color: "red",
    display: "flex",
    flexDirection: "row",
    height: 30,
  },
  gender: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  lableForGender: {
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  laguage: {
    display: "flex",
  },
  lableForLanguage: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 265,
    alignItems: "flex-start",
  },
});
