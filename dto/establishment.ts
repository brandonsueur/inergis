import { Status } from "./global";

export enum EstablishmentType {
  BAR = "bar",
  CLUB = "club",
  ROOFTOP = "rooftop",
  RESTAURANT = "restaurant",
  LOUNGE = "lounge",
  PUB = "pub",
  BREWERY = "brewery",
  WINE_BAR = "wine_bar",
  COCKTAIL_BAR = "cocktail_bar",
  NIGHTCLUB = "nightclub",
  BEACH_CLUB = "beach_club",
  OTHER = "other",
}

export interface Establishment {
  uuid: string;
  user_uuid?: string;
  name: string;
  type: EstablishmentType;
  address: string;
  postal_code: string;
  city: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  phone: string;
  secondary_phone?: string;
  fax?: string;
  facsimile?: string;
  website?: string;
  email?: string;
  email_verification_token?: string;
  email_verified_at?: Date | null;
  status: Status;
  is_verified: boolean;
  is_active: boolean;
  deleted_at?: Date | null;
  created_at: Date;
  updated_at?: Date | null;
  description?: string;
  logo?: string;
  pictures?: string[];
  timezone?: string;
  comment?: string;
}

export enum EstablishmentLegalFileStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export interface EstablishmentLegalTypeFile {
  uuid: string;
  type: string; // e.g., 'business_license', 'tax_document', 'kyc_document', 'kbis', etc.
  description: string; // A brief description of the file type
  country: string; // The country this file type applies to (e.g., 'FR', 'US', etc.)
  is_active: boolean; // Indicates if the file type is currently active
  is_visible: boolean; // Indicates if the file type should be visible to users
  is_required: boolean; // Indicates if this file type is required for establishment verification
  created_at: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}

export interface EstablishmentLegalFile {
  uuid: string;
  establishment_uuid: string; // UUID of the establishment
  type: string; // e.g., 'business_license', 'tax_document', 'kyc_document', 'kbis', etc.
  file_name: string;
  file_type: string; // e.g., 'application/pdf', 'image/jpeg'
  file_size: number; // in bytes
  file_url: string; // URL to access the file
  status: EstablishmentLegalFileStatus;
  is_verified: boolean;
  uploaded_at: Date | null;
  updated_at?: Date | null;
  created_at: Date;
}
