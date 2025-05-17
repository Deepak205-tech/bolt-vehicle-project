export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  type: '2-wheeler' | 'motorcycle' | 'scooter' | 'sport' | 'cruiser' | 'tourer' | 'electric';
  price: number;
  engineCapacity: number;
  horsePower: number;
  torque: string;
  mileage: string;
  topSpeed: number;
  weight: number;
  fuelCapacity: number;
  seatHeight: number;
  groundClearance: number;
  brakes: {
    front: string;
    rear: string;
  };
  suspension: {
    front: string;
    rear: string;
  };
  wheels: {
    front: string;
    rear: string;
  };
  tyres: {
    front: string;
    rear: string;
  };
  features: string[];
  colors: string[];
  image: string;
  rating: number;
  recommendedFor: string[];
  maintenanceCost: {
    yearly: number;
    serviceInterval: number; // in kilometers
  };
  serviceNetwork: number; // number of service centers in India
  resaleValue: number; // percentage after 3 years
  pros: string[];
  cons: string[];
}

export type ComparisonItem = Vehicle['id'];

export interface UserPreferences {
  budget: number;
  usage: 'college' | 'office' | 'leisure' | 'touring';
  height: number; // in cm
  monthlyDistance: number; // in km
  preferredBrands?: string[];
}