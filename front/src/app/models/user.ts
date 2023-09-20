import { CheckUpType } from "./checkuptype";

export class User{
    name?: string;
    surname?: string;
    username: string;
    type: string;
    phone?: string;
    email: string;
    doctor_info?: {
        license?: string;
        specialization?: string;
        department?: string;
        checkups?: CheckUpType[];
    };
    image?: string;
    message?: string;
}