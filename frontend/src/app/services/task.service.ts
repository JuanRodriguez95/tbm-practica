import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private env: string;
  //service,guards e importaciones de otras librerias
  constructor(private _http:HttpClient) {
    this.env=environment.APP_URL;
   }

   registerTask(task:any){
    return this._http.post<any>(this.env+'task/saveTask',task);
   }


}
