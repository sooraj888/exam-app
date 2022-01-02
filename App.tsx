import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";

import HomePage from "./component/HomePage";

export default function App() {
  const [inputName, setInputName] = useState<string>("");
  const [inputAge, setInputAge] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Gender, setGender] = useState("");
  const [Laguage, setLaguage] = useState("");

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

  useEffect(() => {
    console.log(inputName, inputAge, Gender, Laguage);
  }, [Gender, inputAge, inputName, Laguage]);

  return (
    <NativeRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setLaguage={setLaguage}
              setGender={setGender}
              handleOnNameChange={handleOnNameChange}
              inputName={inputName}
              inputAge={inputAge}
              handleOnAgeChange={handleOnAgeChange}
              errorMessage={errorMessage}
            ></HomePage>
          }
        ></Route>
        <Route
          path="/bb"
          element={
            <Text>
              {inputName}
              {inputAge}
              {Gender}
              {Laguage}
            </Text>
          }
        ></Route>
      </Routes>
    </NativeRouter>
  );
}
