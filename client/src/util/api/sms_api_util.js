import axios from "axios";

export const sendSMS = (data) => {
  // debugger
  return axios.get(`/api/sms/send`);
};
