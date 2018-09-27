export interface Category {
    CategoryID ?: string,
    Category ?: string,
    GroupName ?: string,
}

export interface CentricScore {
    CentricScoreID ?: string,
    Score ?: string,
    ScoreDesc ?:string,
    GroupName ?: string,
}

export interface MapCode {
    MapCodeID ?: string,
    MapCode ?: string,
    GroupName ?: string,
}

export interface Department {
    DepartmentID ?: string,
    Department ?: string,
    GroupName ?: string,
}

export interface Contact {
    ContactID ?: string,
    ContactName ?: string,
    LastName ?:string,
    GroupName ?: string,
}

export interface WorkdayContact{
    full_name?:string
}

export interface WorkdayFormat{
    data?:WorkdayContact[]
}

export interface ProjectDependencies{
    Contacts?: Contact[],
    Departments?:Department[],
    CentricScores?:CentricScore[],
    MapCodes?:MapCode[],
    Categories?:Category[]
}



export interface ProjectContacts {
    MainID ?: string,
    Contacts ?: string,
    Type ?:string,
    GroupName ?: string,
}

export interface Comment {
    MainID ?: string,
    DateCreated ?: Date,
    FullName ?: string,
    Comment ?:string,
    GroupName ?: string,
}


export interface Main {
    MainID ?: string,
    DepartmentID ?: string,
    CategoryID ?:string,
    MapCode ?: string,
    CentricScoreID ?: string,
    Status ?:string,
    TargetDate ?: Date,
    TaskCompleted ?: number,
    TaskInProgress ?:number,
    TaskUpcoming ?: number,
    DateAdded ?: Date,
    Overview ?:string,
    DateStarted ?: Date,
    DateEnded ?: Date,
    DatePrevious ?:Date,
    GroupName ?: string,
}

export class SelectItem{
    constructor (
        public id?: string,
        public text?: string
    ){}
}