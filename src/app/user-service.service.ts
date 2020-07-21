import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    constructor (private http: HttpClient){

    }

    public doRegistration(user){
        return this.http.post("http://localhost:8080/save", user, {responseType: "text" as "json"});
    }

    public getUser(){
        return this.http.get("http://localhost:8080/allUser");
    }

    public getUserByUsername(username){
        return this.http.get("http://localhost:8080/byUsername"+username);
    }

    public deleteUser(username){
        return this.http.get("http://localhost:8080/delete"+username);
    }
}