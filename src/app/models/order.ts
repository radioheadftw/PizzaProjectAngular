import { Users } from './users';

export class Order {
    id: number;
    customerId: Users;
    description: string;
    price: number;

    setCustomer(customer: Users) {
        this.customerId = customer;
    }
}
