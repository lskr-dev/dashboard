/** API I/O */
export interface Usuario {
  name: String;
  city: String;
  phone: String;
  is_contacted: Boolean;
  is_converted: Boolean;
  https_expired_date: Date | null;
}
/** API I/O */

/** CONTROLADORES DE COMPONENTES */
export interface InputController {
  isEmpty: boolean;
  isDisabled: boolean;
}
export interface ButtonController {
  isLoading: boolean;
  isDisabled: boolean;
}

export interface SearchController {
  value: string;
  result: Array<Object>;
}
/** CONTROLADORES DE COMPONENTES */

/** API */
export interface ApiResponse {
  status: boolean;
  messageCode: string;
  list: Object | Array<Object>;
}
/** API */
