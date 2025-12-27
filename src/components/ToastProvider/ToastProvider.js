import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [notifications, setNotifications] = React.useState([]);

  const showNotification = React.useCallback((message, variant = "notice") => {
    setNotifications((currentNotifications) => [
      ...currentNotifications,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }, []);

  const warning = React.useCallback(
    (message) => showNotification(message, "warning"),
    [showNotification]
  );

  const success = React.useCallback(
    (message) => showNotification(message, "success"),
    [showNotification]
  );

  const error = React.useCallback(
    (message) => showNotification(message, "error"),
    [showNotification]
  );

  useEscapeKey(() => setNotifications([]));

  return (
    <ToastContext
      value={{ notifications, show: showNotification, warning, success, error }}
    >
      {children}
    </ToastContext>
  );
}

export function useToast() {
  const { show, warning, success, error } = React.useContext(ToastContext);

  const toast = React.useCallback(show, [show]);
  toast.warning = warning;
  toast.success = success;
  toast.error = error;

  return toast;
}

export default ToastProvider;
