export interface Clinics {
  type: string;
  id: string;
  attributes: Attributes;
  relationships?: Relationships;
}
export interface Doctors {
  type: string;
  id: string;
  attributes: Attributes;
  relationships?: Relationships;
}

export interface City {
  type: string;
  id: string;
  attributes: Attributes;
}

export interface Specialization {
  type: string;
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  city?: string;
  name?: string;
  address?: string;
  firstName?: string;
  lastName?: string;
  midName?: string;
  specialization?: string;
  experience?: string;
}

export interface NewClinic {
  name: string;
  address: string;
  city_id: string;
}

export interface NewDoctor {
  first_name: string;
  last_name: string;
  middle_name: string;
  specialization_id: string;
  experience: string;
}

export interface Relationships {
  doctors?: Doctors;
  results?: Results;
}

export interface Doctors {
  data: any[];
}

export interface Results {
  data: any[];
}
