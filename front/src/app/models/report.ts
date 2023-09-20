import { CheckUp } from "./checkup";

export class Report{
    checkup: CheckUp;
    reason_for_comming: string;
    diagnose: string;
    terrapy: string;
    next_checkup: Date;
}