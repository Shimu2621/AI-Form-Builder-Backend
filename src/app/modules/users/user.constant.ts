// User Role Constants
export const userRoles = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

// Default User Role
export const defaultRole = 'user';

// User Plan Constants
export const userPlanTypes = {
  NORMAL: 'normal',
  PREMIUM: 'premium',
} as const;
export const defaultPlan = userPlanTypes.NORMAL;
