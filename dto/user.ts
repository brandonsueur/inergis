import dayjs from "dayjs";
import { UUID } from "node:crypto";
import { UserAddress } from "./user_address.js";

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  SUSPENDED = "suspended",
  BANNED = "banned",
}

export interface UserDTO {
  uuid: UUID;
  username: string;
  firstName: string;
  lastName: string;
  nickname: string | null;
  phone: string;
  secondaryPhone?: string;
  fax?: string;
  email: string;
  emailVerificationToken?: string;
  ipAddress?: string;
  addresses?: UserAddress[];
  picture?: string;
  status: UserStatus;
  online: boolean;
  gender?: string;
  website?: string;
  fullName: string;
  profileHidden?: boolean;
  forgotPasswordToken?: string;
  forgotPasswordExpiresAt?: dayjs.Dayjs | null;
  birthdate?: Date;
  deletedAt?: dayjs.Dayjs | null;
  createdAt: dayjs.Dayjs;
  updatedAt?: dayjs.Dayjs | null;
}
