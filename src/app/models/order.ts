
import {LineItem} from './lineitem';

export class Order {
    customerId: number;
    total: number;
    driverId: number;
    complete: boolean;
    lineItems: LineItem[];

    addLineItem(item: LineItem) {
        this.lineItems.push(item);
    }
}
