import dayjs from "dayjs";
import { UUID } from "node:crypto";

export enum UserAddressStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  SUSPENDED = "suspended",
  BANNED = "banned",
}

export interface UserAddress {
  uuid: UUID;
  user_uuid: UUID;
  label?: string;
  address: string;
  postal_code: string;
  city: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  timezone?: string;
  phone: string;
  secondary_phone?: string;
  fax?: string;
  facsimile?: string;
  website?: string;
  email?: string;
  email_verification_token?: string;
  status?: UserAddressStatus;

  is_default: boolean;
  is_verified: boolean;

  deleted_at?: dayjs.Dayjs | null;
  created_at: dayjs.Dayjs;
  updated_at?: dayjs.Dayjs | null;
}
