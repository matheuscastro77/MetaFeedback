import "antd/dist/antd.css";
import { message } from "antd";

export const alerts = (type, msg) => {
  if (type === "success") {
    message.success(msg);
  } else if (type === "error") {
    message.error(msg);
  } else if (type === "warning") {
    message.warning(msg);
  }
}