import * as APIUtil from "../util/api/sms_api_util";

export const RECEIVE_SMS = "RECEIVE_SMS";

export const receiveSMS = (answer) => ({
  type: RECEIVE_SMS,
  answer,
});

export const sendSMS = (data) => {
  return APIUtil.sendSMS(data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
