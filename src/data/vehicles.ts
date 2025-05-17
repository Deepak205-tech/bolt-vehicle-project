import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'honda-activa-6g',
    name: 'Activa 6G',
    brand: 'Honda',
    type: 'scooter',
    price: 72400,
    engineCapacity: 109.51,
    horsePower: 7.79,
    torque: '8.79 Nm @ 5250 rpm',
    mileage: '55-60 km/l',
    topSpeed: 85,
    weight: 107,
    fuelCapacity: 5.3,
    seatHeight: 775,
    groundClearance: 171,
    brakes: {
      front: '130mm Drum',
      rear: '130mm Drum with CBS'
    },
    suspension: {
      front: 'Telescopic',
      rear: '3-Step Adjustable Spring Loaded Hydraulic'
    },
    wheels: {
      front: '12-inch steel',
      rear: '12-inch steel'
    },
    tyres: {
      front: '90/90-12',
      rear: '90/90-12'
    },
    features: [
      'LED headlamp',
      'Silent start',
      'External fuel filling',
      'CBS braking',
      'Engine start/stop switch'
    ],
    colors: ['Pearl Precious White', 'Black', 'Rebel Red Metallic', 'Pearl Spartan Red', 'Dazzle Yellow Metallic'],
    image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg',
    rating: 4.3,
    recommendedFor: ['college', 'office', 'daily-commute'],
    maintenanceCost: {
      yearly: 3000,
      serviceInterval: 3000
    },
    serviceNetwork: 6000,
    resaleValue: 85,
    pros: [
      'Best-in-class reliability',
      'Excellent mileage',
      'Strong resale value',
      'Wide service network'
    ],
    cons: [
      'Basic features only',
      'Limited storage space',
      'Average performance'
    ]
  },
  {
    id: 'tvs-jupiter-125',
    name: 'Jupiter 125',
    brand: 'TVS',
    type: 'scooter',
    price: 76000,
    engineCapacity: 124.8,
    horsePower: 8.15,
    torque: '10.5 Nm @ 4500 rpm',
    mileage: '50-55 km/l',
    topSpeed: 90,
    weight: 108,
    fuelCapacity: 5,
    seatHeight: 765,
    groundClearance: 165,
    brakes: {
      front: '220mm Disc',
      rear: '130mm Drum'
    },
    suspension: {
      front: 'Telescopic',
      rear: '3-step adjustable hydraulic dampers'
    },
    wheels: {
      front: '12-inch alloy',
      rear: '12-inch alloy'
    },
    tyres: {
      front: '90/90-12',
      rear: '90/90-12'
    },
    features: [
      'LED headlamp',
      'USB charger',
      'Boot light',
      'Semi-digital console',
      'External fuel filling'
    ],
    colors: ['Titanium Grey', 'Pristine White', 'Dawn Blue', 'IndiBlue'],
    image: 'https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg',
    rating: 4.2,
    recommendedFor: ['office', 'daily-commute', 'family'],
    maintenanceCost: {
      yearly: 3500,
      serviceInterval: 3000
    },
    serviceNetwork: 4000,
    resaleValue: 80,
    pros: [
      'Comfortable ride',
      'Good features list',
      'Decent mileage',
      'Large storage space'
    ],
    cons: [
      'Average build quality',
      'Limited service network compared to Honda',
      'Higher maintenance cost'
    ]
  },
  {
    id: 'bajaj-pulsar-n160',
    name: 'Pulsar N160',
    brand: 'Bajaj',
    type: 'motorcycle',
    price: 127000,
    engineCapacity: 160,
    horsePower: 15.7,
    torque: '14.65 Nm @ 6750 rpm',
    mileage: '45-50 km/l',
    topSpeed: 115,
    weight: 152,
    fuelCapacity: 14,
    seatHeight: 795,
    groundClearance: 165,
    brakes: {
      front: '300mm disc',
      rear: '230mm disc'
    },
    suspension: {
      front: 'Telescopic with anti-friction bush',
      rear: 'Monoshock'
    },
    wheels: {
      front: '17-inch alloy',
      rear: '17-inch alloy'
    },
    tyres: {
      front: '100/80-17',
      rear: '130/70-17'
    },
    features: [
      'LED projector headlamp',
      'USB charging',
      'Gear position indicator',
      'Dual-channel ABS',
      'Digital console'
    ],
    colors: ['Racing Red', 'Brooklyn Black', 'Caribbean Blue'],
    image: 'https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg',
    rating: 4.4,
    recommendedFor: ['college', 'touring', 'enthusiast'],
    maintenanceCost: {
      yearly: 4500,
      serviceInterval: 5000
    },
    serviceNetwork: 3500,
    resaleValue: 75,
    pros: [
      'Strong performance',
      'Good build quality',
      'Feature-rich',
      'Dual-channel ABS'
    ],
    cons: [
      'Heavy for city use',
      'Higher fuel consumption',
      'Stiff ride quality'
    ]
  },
  {
    id: 'ola-s1-pro',
    name: 'S1 Pro',
    brand: 'Ola Electric',
    type: 'electric',
    price: 130000,
    engineCapacity: 0,
    horsePower: 8.5,
    torque: '58 Nm',
    mileage: '181 km/charge',
    topSpeed: 115,
    weight: 125,
    fuelCapacity: 0,
    seatHeight: 792,
    groundClearance: 165,
    brakes: {
      front: '220mm disc',
      rear: '180mm disc'
    },
    suspension: {
      front: 'Single fork',
      rear: 'Mono-shock'
    },
    wheels: {
      front: '12-inch alloy',
      rear: '12-inch alloy'
    },
    tyres: {
      front: '110/70-12',
      rear: '110/70-12'
    },
    features: [
      'Touchscreen display',
      'Cruise control',
      'Hill hold assist',
      'Reverse mode',
      'Multiple riding modes',
      'Connected features'
    ],
    colors: ['Jet Black', 'Neo Mint', 'Coral Glam', 'Porcelain White', 'Midnight Blue'],
    image: 'https://images.pexels.com/photos/9705850/pexels-photo-9705850.jpeg',
    rating: 4.0,
    recommendedFor: ['tech-savvy', 'office', 'environment-conscious'],
    maintenanceCost: {
      yearly: 2000,
      serviceInterval: 5000
    },
    serviceNetwork: 200,
    resaleValue: 60,
    pros: [
      'Zero emissions',
      'Low running cost',
      'Advanced features',
      'Good performance'
    ],
    cons: [
      'Limited service network',
      'Charging infrastructure concerns',
      'New brand reliability unknown'
    ]
  },
  {
    id: 'hero-splendor-plus',
    name: 'Splendor Plus',
    brand: 'Hero',
    type: 'motorcycle',
    price: 72000,
    engineCapacity: 97.2,
    horsePower: 7.9,
    torque: '8.05 Nm @ 6000 rpm',
    mileage: '60-65 km/l',
    topSpeed: 95,
    weight: 112,
    fuelCapacity: 9.8,
    seatHeight: 785,
    groundClearance: 159,
    brakes: {
      front: '130mm drum',
      rear: '130mm drum'
    },
    suspension: {
      front: 'Telescopic hydraulic shock absorbers',
      rear: 'Swing arm with 5-step adjustable hydraulic shock absorbers'
    },
    wheels: {
      front: '18-inch alloy',
      rear: '18-inch alloy'
    },
    tyres: {
      front: '80/100-18',
      rear: '80/100-18'
    },
    features: [
      'i3s technology',
      'Digital-analog console',
      'Real-time mileage indicator',
      'Side-stand indicator',
      'Low fuel indicator'
    ],
    colors: ['Black with Purple', 'Black with Sports Red', 'Heavy Grey with Green', 'Candy Blazing Red'],
    image: 'https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg',
    rating: 4.5,
    recommendedFor: ['college', 'office', 'daily-commute', 'budget-conscious'],
    maintenanceCost: {
      yearly: 3000,
      serviceInterval: 3000
    },
    serviceNetwork: 6000,
    resaleValue: 85,
    pros: [
      'Best-in-class mileage',
      'Reliable performance',
      'Low maintenance cost',
      'Wide service network'
    ],
    cons: [
      'Basic features',
      'Dated design',
      'Limited performance'
    ]
  }
];

// Helper function to get recommendations based on user preferences
export const getRecommendations = (preferences: {
  budget: number;
  usage: string;
  height: number;
  monthlyDistance: number;
}) => {
  return vehicles.filter(vehicle => {
    const withinBudget = vehicle.price <= preferences.budget;
    const heightCompatible = Math.abs(vehicle.seatHeight - (preferences.height - 25)) <= 50;
    const usageMatch = vehicle.recommendedFor.includes(preferences.usage);
    
    // Calculate monthly fuel/charging cost
    const monthlyRunningCost = vehicle.type === 'electric'
      ? (preferences.monthlyDistance / parseInt(vehicle.mileage)) * 30 // Assuming ₹30 per charge unit
      : (preferences.monthlyDistance / parseInt(vehicle.mileage.split('-')[0])) * 100; // Assuming ₹100 per liter
    
    const costEffective = monthlyRunningCost + (vehicle.maintenanceCost.yearly / 12) < preferences.budget * 0.02;
    
    return withinBudget && heightCompatible && usageMatch && costEffective;
  }).sort((a, b) => {
    // Sort by a weighted score of rating, maintenance cost, and service network
    const scoreA = (a.rating * 0.4) + (a.serviceNetwork * 0.3) + (a.resaleValue * 0.3);
    const scoreB = (b.rating * 0.4) + (b.serviceNetwork * 0.3) + (b.resaleValue * 0.3);
    return scoreB - scoreA;
  });
};