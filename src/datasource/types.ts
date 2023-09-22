import { ObjectId } from "mongodb";

export interface OrganizationDocument {
  _id: ObjectId;
  name: string; // The name of the organization.
  registrationNumber: string; // The official registration number or ID of the company.
  address: string; // The street address of the company's physical location.
  city: string; // The city where the company is located.
  state: string; // The state or province where the company is located.
  postalCode: string; // The postal or ZIP code for the company's location.
  country: string; // The country where the company is based.
  phoneNumber: string; // The primary contact phone number for the organization.
  email: string; // The primary contact email address for the organization.
  website?: string; // (Optional) The organization's website URL, if available.
  foundingDate?: string; // (Optional) The date when the organization was founded.
  industry?: string; // (Optional) The industry or sector to which the organization belongs.
  description?: string; // (Optional) A brief description or overview of the organization.
}

export interface OrganizationUpdateDocument {
  name?: string;
  registrationNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  foundingDate?: string;
  industry?: string;
  description?: string;
}
