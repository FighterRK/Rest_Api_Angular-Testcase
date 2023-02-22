import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  postUserDetails(userData:any){
   return this.http.post('https://jsonplaceholder.typicode.com/posts',userData);
  }

  putUserDetails(userData :any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1',userData);
  }

  patchUserDetails(userData:any){
    return this.http.patch(' https://jsonplaceholder.typicode.com/posts/1',userData)
  }

  deleteUserDetails(userData : any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1',userData)
  }
}
