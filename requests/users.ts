import { UserDTO } from "@/dto/user";
import { axios } from "@/utils";
import { UUID } from "crypto";

export const getUsers = (
  page = 1,
  pageSize = 10,
  filters: { [key: string]: string } = {}
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...filters,
  });

  return axios.get(`/users?${queryParams.toString()}`);
};

export const getUserByUuid = (uuid: UUID) => axios.get(`/users/${uuid}`);

export const createUser = (userData: any) => axios.post("/users", userData);

export const updateUser = (uuid: UUID, userData: UserDTO) =>
  axios.put(`/users/${uuid}`, userData);

export const changePassword = (uuid: UUID, passwordData: any) =>
  axios.put(`/users/${uuid}/changePassword`, passwordData);

export const deleteUser = (uuid: UUID) => axios.delete(`/users/${uuid}`);

export const addAddress = (userUuid: UUID, addressData: any) =>
  axios.post(`/users/${userUuid}/addresses`, addressData);

export const updateAddress = (
  userUuid: UUID,
  addressUuid: UUID,
  addressData: any
) => axios.put(`/users/${userUuid}/addresses/${addressUuid}`, addressData);

export const deleteAddress = (userUuid: UUID, addressUuid: UUID) =>
  axios.delete(`/users/${userUuid}/addresses/${addressUuid}`);
