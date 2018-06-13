import toastr from 'toastr';

toastr.options.progressBar = true;
toastr.options.positionClass = "mt-2 toast-top-center";

class NotificationService {

    static success = (message, title = null, timeOut = 1500, progressBar = true) => {
        toastr.success(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
        });
    };

    static error = (message, title = null, timeOut = 1500, progressBar = true) => {
        toastr.error(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
        });
    };

    static info = (message, title = null, timeOut = 1500, progressBar = true) => {
        toastr.info(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
        });
    };

    static warning = (message, title = null, timeOut = 1500, progressBar = true) => {
        toastr.warning(message, title, {
            timeOut: timeOut,
            progressBar: progressBar
        });
    };
}

export default NotificationService;