import axios from "axios";


export const sendSMS = (data) => {
  debugger
  return axios.post(`/api/sms/send`, data);
};
