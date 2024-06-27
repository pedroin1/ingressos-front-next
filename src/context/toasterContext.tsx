import { Toaster } from "react-hot-toast";
//https://react-hot-toast.com/docs/toast
const ToasterCustomContext = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        //duration: 3000,
        success: {
          style: {
            background: "green",
            color: "white",
          },
        },
        error: {
          style: {
            background: "red",
            color: "white",
          },
        },
      }}
    />
  );
};

export default ToasterCustomContext;
