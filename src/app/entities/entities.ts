export interface Category {
    CategoryID ?: string,
    Category ?: string,
}

export interface ProjectContacts {
    MainID ?: string,
    Contacts ?: string,
    Type ?:string
}

export interface MapCode {
    MapCodeID ?: string,
    MapCode ?: string,
}

export interface Department {
    DepartmentID ?: string,
    Department ?: string,
}

export interface Contact {
    ContactID ?: string,
    ContactName ?: string,
    LastName ?:string
}

export interface Comment {
    MainID ?: string,
    DateCreated ?: Date,
    FullName ?: string,
    Comment ?:string
}

export interface CentricScore {
    CentricScoreID ?: string,
    Score ?: string,
    ScoreDesc ?:string
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
}