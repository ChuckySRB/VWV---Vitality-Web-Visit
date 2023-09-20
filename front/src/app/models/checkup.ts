import { CheckUpType } from "./checkuptype";


export class CheckUp{
    _id: string;
    patient: string;
    doctor: string;
    type: CheckUpType;
    datetime: Date;
    status:   string;
    message?: string;
    isClicked: boolean;
}