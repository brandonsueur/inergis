import dayjs from "dayjs";

export enum EmploymentType {
  FULL_TIME = "full-time",
  PART_TIME = "part-time",
  CONTRACT = "contract",
  INTERN = "intern",
  FREELANCE = "freelance",
}

export enum EmployeeStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  TERMINATED = "terminated",
  ON_LEAVE = "on-leave",
}

export enum EmployeeRole {
  OWNER = "owner", // Propriétaire/Patron
  MANAGER = "manager", // Manager général
  ASSISTANT_MANAGER = "assistant-manager", // Manager adjoint
  BARTENDER = "bartender", // Barman
  SERVER = "server", // Serveur
  VIP_HOST = "vip-host", // Hôte VIP pour bottle service
  SECURITY = "security", // Sécurité
  DJ = "dj", // DJ
  PROMOTER = "promoter", // Promoteur
  CASHIER = "cashier", // Caissier
  CLEANER = "cleaner", // Nettoyage
  KITCHEN_STAFF = "kitchen-staff", // Personnel de cuisine
  GENERAL_STAFF = "general-staff", // Personnel général
}

export interface EmployeeDTO {
  uuid: string;
  userUuid: string;
  establishmentUuid: string;
  position: string;
  role: EmployeeRole;
  department?: string;
  salary?: number;
  employmentType: EmploymentType;
  status: EmployeeStatus;
  hireDate: dayjs.Dayjs;
  terminationDate?: dayjs.Dayjs | null;
  permissions?: Record<string, any>;
  notes?: string;
  createdAt: dayjs.Dayjs;
  updatedAt: dayjs.Dayjs;
}

export interface CreateEmployeeDTO {
  userUuid: string;
  establishmentUuid: string;
  position: string;
  role: EmployeeRole;
  department?: string;
  salary?: number;
  employmentType: EmploymentType;
  status?: EmployeeStatus;
  hireDate: dayjs.Dayjs;
  terminationDate?: dayjs.Dayjs | null;
  permissions?: Record<string, any>;
  notes?: string;
}

export interface UpdateEmployeeDTO {
  position?: string;
  role?: EmployeeRole;
  department?: string;
  salary?: number;
  employmentType?: EmploymentType;
  status?: EmployeeStatus;
  hireDate?: dayjs.Dayjs | null;
  terminationDate?: dayjs.Dayjs | null;
  permissions?: Record<string, any>;
  notes?: string;
}
