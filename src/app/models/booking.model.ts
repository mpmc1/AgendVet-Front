import { VeterinaryModel } from "./veterinary.model"

export class BookingModel {
    veterinary!: VeterinaryModel
    intialHour!: Date
    finalHour!: Date
    consultationReason!: string
    
}