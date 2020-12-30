import { connect } from "react-redux";
import Landing from "./landing";
import { sendSMS } from "../../actions/sms_actions"

const mSTP = (state) => ({});

const mDTP = (dispatch) => ({
  sendSMS: (data) => sendSMS(data) 
});

export default connect(mSTP, mDTP)(Landing);
