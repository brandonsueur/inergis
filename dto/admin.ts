import dayjs from "dayjs";

export enum AdminRole {
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin",
  MODERATOR = "moderator",
  MANAGER = "manager",
}

export enum AdminPermission {
  // User management
  VIEW_USERS = "view_users",
  CREATE_USERS = "create_users",
  EDIT_USERS = "edit_users",
  DELETE_USERS = "delete_users",

  // Admin management
  VIEW_ADMINS = "view_admins",
  CREATE_ADMINS = "create_admins",
  EDIT_ADMINS = "edit_admins",
  DELETE_ADMINS = "delete_admins",

  // Establishment management
  VIEW_ESTABLISHMENTS = "view_establishments",
  CREATE_ESTABLISHMENTS = "create_establishments",
  EDIT_ESTABLISHMENTS = "edit_establishments",
  DELETE_ESTABLISHMENTS = "delete_establishments",

  // Employee management
  VIEW_EMPLOYEES = "view_employees",
  CREATE_EMPLOYEES = "create_employees",
  EDIT_EMPLOYEES = "edit_employees",
  DELETE_EMPLOYEES = "delete_employees",

  // System settings
  MANAGE_SETTINGS = "manage_settings",
  VIEW_LOGS = "view_logs",
  MANAGE_ROLES = "manage_roles",
}

export interface AdminDTO {
  uuid: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: AdminRole;
  permissions: AdminPermission[];
  isSuperAdmin: boolean;
  isActive: boolean;
  phone?: string;
  department?: string;
  picture?: string;
  twoFactorEnabled: boolean;
  lastLoginAt?: dayjs.Dayjs | null;
  lastLoginIp?: string;
  createdAt: dayjs.Dayjs;
  updatedAt: dayjs.Dayjs;
  deletedAt?: dayjs.Dayjs | null;
}

export interface CreateAdminDTO {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: AdminRole;
  permissions?: AdminPermission[];
  isSuperAdmin?: boolean;
  isActive?: boolean;
  phone?: string;
  department?: string;
  picture?: string;
}

export interface UpdateAdminDTO {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: AdminRole;
  permissions?: AdminPermission[];
  isSuperAdmin?: boolean;
  isActive?: boolean;
  phone?: string;
  department?: string;
  picture?: string;
}

export interface AdminLoginDTO {
  email: string;
  password: string;
  twoFactorCode?: string;
}
