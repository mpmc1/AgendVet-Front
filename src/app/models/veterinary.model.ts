import { IdTypeModel } from "./idType.model"

export class VeterinaryModel {
    id!: string 
    name!: string
    lastname!: string
    idNumber!: string
    idType!: IdTypeModel
    phone! : string
    
}

export class EndpointVeterinryResponse {
    data!: VeterinaryModel[]
}