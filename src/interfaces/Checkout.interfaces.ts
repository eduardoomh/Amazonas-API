export interface CheckoutDataI {
    name?: string;
    email?: string;
    phone?: string;
    phone_code?: string;
    reservations?: ReservationI[];
    reference?: string;
    price?: number;
}

export interface ReservationI {
    id?: string;
    name?: string;
    label?: string;
    type?: reservationType | string;
    date?: string;
    schedule?: string;
    schedule_label?: string;
    people?: number;
    base_price?: number;
    final_price?: number;
}

export type reservationType = 'tour' | 'activity';