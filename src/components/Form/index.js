import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const RegistrationScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleRegistration = () => {
    // Perform registration logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Manjar</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegistration} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "teal",
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "teal",
    marginBottom: 10,
  },
  formContainer: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegistrationScreen;
