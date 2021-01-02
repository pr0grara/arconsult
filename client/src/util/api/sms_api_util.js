import axios from "axios";

export const sendSMS = (data) => {
  // debugger
  return axios.post(`/routes/api/sms/send`, data);
};
