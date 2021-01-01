import axios from "axios";

export const sendSMS = (data) => {
  // debugger
  // return axios.post(`/api/sms/send`, data);
  return axios.post(`/var/app/current/routes/api/sms/send`, data);
};
