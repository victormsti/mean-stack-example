import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  saveUser(user){
    return this.http.post("http://localhost:8080/api/saveUser/",user)
    .pipe(
      map(
        (response: Response)=>response
        )
      );
  }

  getUser(){
    return this.http.get("http://localhost:8080/api/getUser/")
    .pipe(
      map(
        (response: Response)=>response
        )
      );
  }

  deleteUser(id){
    return this.http.post("http://localhost:8080/api/deleteUser/",{'id':id})
    .pipe(
      map(
        (response: Response)=>response
        )
      );
  }

}
