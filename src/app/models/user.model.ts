export interface IUserLoginModal {
  email?: string;
  password?: string;
}

export interface ICommanResponseModel<T> {
  success?: boolean,
  status?: number,
  message?: string,
  data?: ILoginResponseModal[];
}

export interface ILoginResponseModal {
  id: number,
  first_name: string,
  last_name: string,
  gender: string,
  dob: string,
  email: string,
  image: string,
  phone_code: string,
  phone: number,
  code: string,
  is_phone_verified: number,
  is_email_verified: number,
  is_social_register: number,
  social_register_type: string,
  device_token: string,
  device_type: string,
  device_model: string,
  app_version: string,
  os_version: string,
  push_enabled: number,
  newsletter_subscribed: number,
  create_date: string
}

export interface IRegisterUserModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: number;
}

export enum LocalStorePath {
  first_name = 'first_name'
}