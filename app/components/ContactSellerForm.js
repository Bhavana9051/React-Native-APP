import React from "react";
import { Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./Forms";
import messagesApi from "../api/messages";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(2).label("Message seller"),
});

function ContactSellerForm({ catalog }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    const result = await messagesApi.send(message, catalog.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send message to seller.");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Yo ho!! You sold it <3",
        body: message,
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <AppForm
      initialValues={{
        message: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField name="message" maxLength={255} placeholder="Message" />
      <SubmitButton color="primary" title="Contact Seller" />
    </AppForm>
  );
}

export default ContactSellerForm;
