import apiService from "../page/utils/request.service"

export const loginApi = async ({username, password}) => {
  return await apiService()({
    url: '/api/v1/accounts/login',
    method: "post",
    data: {
      login_name: username,
      password,
    }
  }).then((res) => res.data)
}
export const signUpApi = async ({fullname, username, password}) => {
  return await apiService()({
    url: '/api/v1/accounts',
    method: "post",
    data: {
      login_name: username,
      fullname,
      password,
    }
  }).then((res) => res.data)
}
export const checkoutAPI = async ({full_name, email,address,city,phone,zip,name_on_card,credit_card_number,exp_month,ccv,exp_year}) => {
  return await apiService()({
    url: '/api/v1/payments',
    method: "post",
    data: {
      full_name: full_name,
      email,
      address,
      city,
      phone,
      zip,
      name_on_card,
      credit_card_number,
      exp_month,
      ccv,
      exp_year,

    }
  }).then((res) => res.data)
}