import swal from "sweetalert";

class Response {
  public static show(icon: string, message: string) {
    return swal({
      title: icon,
      icon: icon,
      text: message,
      timer: 1000,
      //@ts-expect-error
      button: false,
    });
  }
}

export { Response };
