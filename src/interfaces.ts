// Describes data content which includes in each task
export interface SingInInterface {
    email: string;
    password: string;
}

export enum Status {
    identificator = 'Идентиф',
    name = 'ФИО',
    region = 'Регион',
    dateOfBirdth = 'Дата рождения',
    diagnosis = 'Диагноз',
    lastDateInspection = 'Дата посл.осмотра',
    status = 'Статус'
}
