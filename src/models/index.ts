export interface IContact {
  id: number;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | '';
  email: string;
  phone: string;
  address?: string;
  getCallback?: boolean;
}
