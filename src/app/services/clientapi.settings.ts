export class ClientApiSettings {

    //change the url according to client's url
    private static Client_URL = "https://localhost:44370/api/"
    //change the url according for business workflow urls
    private static API_URL = "https://pplapid.azurewebsites.net/api/"
    // private static API_URL = "http://localhost:52013/api/"

    //Use this Method when calling an business_workflow apis
    public static GETAPIURL(controller:string):string{
        return this.API_URL+controller;
    }

    //use this method when callin an client apis
    public static GETCLIENTAPIURL(controller:string):string{
        return this.Client_URL+controller;
    }

    public static HANDLEERROR(error : any):Promise<any>{
        console.error('An error occured',error);
        return Promise.reject(error.message || error);
    }
}
