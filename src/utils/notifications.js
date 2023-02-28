import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const  notify_success = (text) => toast.success(`${text}`, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

export const notify_warning = (text) => toast.warn(`${text}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });

