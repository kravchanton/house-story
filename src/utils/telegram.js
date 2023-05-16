import { makePostRequest } from "./api";

export const sendNotification = async (text) => {

  const endpoint = `https://api.telegram.org/bot6178839027:AAE739ddBUvdl6UeIln8AHbk2eUKyrwz0AQ/sendMessage?chat_id=1240054418&text=${text}`;
  await makePostRequest(endpoint, {
    text,
  });

};
