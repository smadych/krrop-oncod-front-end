// Describes data content which includes in each task
export interface SingInInterface {
    email: string
    password: string
}

export enum Status {
    identificator = 'идентиф',
    name = 'ФИО',
    region = 'регион',
    dateOfBirdth = 'Дата рождения',
    diagnosis = 'Диагноз',
    lastDateInspection = 'Дата посл.осмотра'
}
// // Created just for exporting enum object. Current const variable doesn't use.
// const space = '';
// export default space;
