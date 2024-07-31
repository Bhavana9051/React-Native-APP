import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import AppFormPicker from "../components/AppFormPicker";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/Forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import catalogsApi from "../api/catalogs";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label("Title"),
  price: Yup.number().required().min(1).max(100000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "At least 1 image to be selected."),
});

const categories = [
  {
    label: "Anime Merchandise",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  { label: "Crochery", value: 2, backgroundColor: "green", icon: "email" },
  {
    label: "Home Decoration",
    value: 3,
    backgroundColor: "blue",
    icon: "delete",
  },
];

function CatalogsEditScreen(props) {
  const location = useLocation();
  const [uploadingVisible, setUploadingVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (catalog, { resetForm }) => {
    setUploadingVisible(true);
    setProgress(0);

    try {
      const result = await catalogsApi.addCatalogs(
        { ...catalog, location },
        (progress) => setProgress(progress)
      );

      if (!result.ok) {
        // console.error("Catalog was not added:", result);
        setUploadingVisible(false);
        return alert("Catalog was not added");
      }

      // alert("Successfully Done");
    } catch (error) {
      setUploadingVisible(false);
      // console.error("An error occurred:", error);
      alert("An error occurred while adding the catalog.");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => {
          setUploadingVisible(false);
        }}
        progress={progress}
        visible={uploadingVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} placeholder={"Title"} name={"title"} />
        <AppFormField
          keyboardType={"numeric"}
          name="price"
          placeholder={"Price"}
          maxLength={8}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder={"Category"}
          width={200}
        />
        <AppFormField
          maxLength={255}
          multiline
          name={"description"}
          numberOfLines={4}
          placeholder={"Description"}
        />
        <SubmitButton title={"Time to Post!"} color="lavender" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default CatalogsEditScreen;
