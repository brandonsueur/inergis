import { Establishment } from "@/dto/establishment";
import { axios } from "@/utils";
import { UUID } from "crypto";

export const getEstablishments = (
  page = 1,
  pageSize = 10,
  filters: { [key: string]: string } = {}
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    perPage: pageSize.toString(), // Changé de pageSize à perPage
    ...filters,
  });

  console.log("API URL:", `/establishments?${queryParams.toString()}`);
  return axios.get(`/establishments?${queryParams.toString()}`);
};

export const getEstablishmentByUuid = (uuid: UUID) =>
  axios.get(`/establishments/${uuid}`);

export const createEstablishment = (
  establishmentData: Partial<Establishment>
) => axios.post("/establishments", establishmentData);

export const updateEstablishment = (
  uuid: UUID,
  establishmentData: Partial<Establishment>
) => axios.put(`/establishments/${uuid}`, establishmentData);

export const updateEstablishmentStatus = (
  uuid: UUID,
  statusData: { status: string }
) => axios.put(`/establishments/${uuid}/status`, statusData);

export const deleteEstablishment = (uuid: UUID) =>
  axios.delete(`/establishments/${uuid}`);

export const searchNearbyEstablishments = (
  latitude: number,
  longitude: number,
  radius?: number,
  filters: { [key: string]: string } = {}
) => {
  const queryParams = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    ...(radius && { radius: radius.toString() }),
    ...filters,
  });

  return axios.get(`/establishments/search/nearby?${queryParams.toString()}`);
};

export const getMyEstablishments = (
  page = 1,
  pageSize = 10,
  filters: { [key: string]: string } = {}
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...filters,
  });

  return axios.get(`/establishments/me?${queryParams.toString()}`);
};

export const verifyEstablishment = (
  uuid: UUID,
  verificationData: { is_verified: boolean }
) => axios.put(`/establishments/${uuid}/verify`, verificationData);
