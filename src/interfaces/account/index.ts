import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  account_type: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  transaction?: TransactionInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    transaction?: number;
  };
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  account_type?: string;
  user_id?: string;
  organization_id?: string;
}
