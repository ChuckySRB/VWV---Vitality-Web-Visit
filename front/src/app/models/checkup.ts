import { CheckUpType } from "./checkuptype";


export class CheckUp{
    patient: string;
    doctor: string;
    type: CheckUpType;
    datetime: Date;
    status:   string;
    message?: string
}