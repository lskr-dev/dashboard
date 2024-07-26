import type { Usuario } from "./Types";

const clearUserData = (formData: Usuario) => {
  formData.name = "";
  formData.city = "";
  formData.phone = "";
  formData.is_contacted = false;
  formData.is_converted = false;
  formData.https_expired_date = null;
};

export { clearUserData };
