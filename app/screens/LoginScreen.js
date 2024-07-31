import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(8).label("Password"),
});

function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) setLoginFailed(true);
    setLoginFailed(false);
    auth.login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-ffjpg.jpg")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={"Invalid Email and/or Password"}
          visible={loginFailed}
        />
        <AppFormField
          autoCaptilize="none"
          autoCorrect={false}
          icon={"email"}
          keyboardType={"email-address"}
          name={"email"}
          placeholder={"Email"}
          textContentType={"emailAddress"}
        />
        <AppFormField
          autoCaptilize="none"
          autoCorrect={false}
          icon={"lock"}
          name={"password"}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title={"Login"} color="lavender" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 70,
    height: 80,
    borderRadius: 30,
    alignSelf: "center",
    borderWidth: 5,
    borderColor: colors.blue,
    marginTop: 40,
    marginBottom: 30,
  },
});

export default LoginScreen;
