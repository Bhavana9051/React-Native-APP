import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 3;

const store = async (key, value) => {
  try {
    const item = {
      value: value,
      timeatamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);

      return null;
    }

    return item.value;
  } catch (error) {
    logger.log(error);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timeatamp);

  return now.diff(storedTime, "minute") > expiryInMinutes;
};

export default {
  get,
  store,
};
