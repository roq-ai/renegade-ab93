const mapping: Record<string, string> = {
  accounts: 'account',
  'end-customers': 'end_customer',
  organizations: 'organization',
  'team-members': 'team_member',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
