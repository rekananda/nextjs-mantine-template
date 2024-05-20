import { PropBaseT } from "@/types";
import hotToast, { Toast } from 'react-hot-toast';

type PropsNotificationAlertT = {
  toast: Toast
} & PropBaseT

const NotificationAlert = (props: PropsNotificationAlertT) => {
  const { toast, children } = props;

  return (
    <div
        className={`${
          toast.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full pointer-events-auto flex`}
      >
        <div className="flex-1 w-0 p-4 bg-white border border-r-0 rounded-l-lg  border-primary">
          {children}
        </div>
        <div className="flex">
          <button
            onClick={() => hotToast.dismiss(toast.id)}
            className="flex p-4 w-full bg-white border border-l-0 rounded-r-lg border-primary items-center justify-center text-sm font-medium text-tertiary hover:text-red"
          >
            Close
          </button>
        </div>
      </div>
  )
}

export default NotificationAlert;