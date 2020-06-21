import axios from "axios";

export default axios.create({
  baseURL: "https://chat-room-f3ebb.firebaseio.com/"
});
