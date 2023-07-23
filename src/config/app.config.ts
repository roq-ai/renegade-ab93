interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Owner'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Account Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'Renegade',
  addOns: ['notifications'],
};
