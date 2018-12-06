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

export interface ProjectDependencies{
    Contacts?: Contact[],
    Departments?:Department[],
    CentricScores?:CentricScore[],
    MapCodes?:MapCode[],
    Categories?:Category[]
}

export interface Projects{
    ProjectID?:string,
    DepartmentID?:string,
    Department?:string,
    ProjectCategoryID?:string,
    Category?:string,
    CustomerMapCodeID?:string,
    MapCode?:string,
    CustomerCentricScoreID?:string,
    Score?:string,
    ProjectNumber?:string,
    ProjectOverview?:string,
    ProjectManager?:string,
    ProjectSponsor?:string,
    ProjectStakeHolder?:string,
    Status?:string,
    NumberOfTasks?:number,
    StartDate?:string,
    EndDate?:string,
    ProjectTargetDate?:string,
    EndDateChanged?:boolean,
    GroupName?:string
}

export interface Tasks{
    // public Guid TaskID { get; set; }
    // public Guid ProjectID { get; set; }
    // public string TaskDesc { get; set; }
    // public string TaskStatus { get; set; }
    TaskID ?: string,
    ProjectID ?: string,
    TaskDesc ?: string,
    TaskStatus ?: string
}

export interface TaskStatuses{
    TaskStatusID?:number,
    TaskStatus?:string
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

export interface EmployeeLookup{
    email_external ?: string,
    emplid ?: string,
    full_name ?: string,
    workday_user_name ?: string
}

export interface EmployeeData{
    data:EmployeeLookup[];
}