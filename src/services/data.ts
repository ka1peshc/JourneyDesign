export class DataController {
    public async getData(){
        try{
            const response = await fetch('https://localhost:7003/api/JsonApi/GetJsonData');
            const json = await response.json();

            console.log("Success");
            console.log(json);
            return json;
        }
        catch(err){
            console.log("Error");
            console.log(err);
        }
    }
}