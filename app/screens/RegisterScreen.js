import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(8).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError("An unexpected error occured");
        console.log(result.data);
      }

      return;
    }

    setError(false);
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };

  return (
    <>
      <AppActivityIndicatorActivityIndicator
        visible={registerApi.loading || loginApi.loading}
        type={"overlay"}
      />
      <Screen style={styles.container}>
        <Image
          source={require("../assets/logo-ffjpg.jpg")}
          style={styles.logo}
        />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={"account"}
            name={"name"}
            placeholder={"User Name"}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={"email"}
            keyboardType={"email-address"}
            name={"email"}
            placeholder={"Email"}
            textContentType={"emailAddress"}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={"lock"}
            name={"password"}
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title={"Register"} color="lavender" />
        </AppForm>
      </Screen>
    </>
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

export default RegisterScreen;
