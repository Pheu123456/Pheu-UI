import apiService from "../page/utils/request.service"

export const getListBookApi = async (page) => {
  return await apiService()({
    url: '/api/v1/books',
    method: "get",
    params: {
      page,
      perPage: 5,
    }
  }).then((res) => res.data)
}

export const createBookApi = async (data) => {
  const res = await apiService()({
    url: '/api/v1/auth/books',
    method: "post",
    data
  })
  console.log('createBookApi', res)
  return res
} 

export const deleteBookApi = async (id) => {
  const res = await apiService()({
    url: `/api/v1/auth/books/${id}`,
    method: "delete",
  })
  console.log('createBookApi', res)
  return res
} 

export const updateBookApi = async (id, data) => {
  const res = await apiService()({
    url: `/api/v1/auth/books/${id}`,
    method: "put",
    data
  })
  return res
} 