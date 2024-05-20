import { ToastOptions, ToastPosition, TypeOptions, toast as toastify } from "react-toastify";
import hotToast from 'react-hot-toast';
import NotificationAlert from "@/Components/Molecule/Notification/NotificationAlert";

type AlertType = "customs" | TypeOptions;

const TIMER:number = 2000;
const POSITION:ToastPosition = "top-center";
const OPTIONS: ToastOptions = {
  position: POSITION,
  autoClose: TIMER,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored"
};


export default function toastAlert(message:any = "", type:AlertType = "default") {
  if (type !== "customs") {
    toastify(message, {
      ...OPTIONS,
      type: type,
      ...(type === "warning" ? {autoClose: 3000}:{})
    })
  } else {
    hotToast.custom((t) => (
      <NotificationAlert toast={t}>{message}</NotificationAlert>
    ))
  }
}