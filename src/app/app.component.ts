import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http-app';
  //Storing form values
  public postValues : any;
  public putValues : any;
  public patchValues : any;


  public username : any;
  public email : any;
  public mobile : any;



  constructor(private api : ApiServiceService){}

  onSubmit(){
    let userData = {
      name : this.username,
      email:this.email,
      mobile:this.mobile
    }

    this.api.postUserDetails(userData).subscribe(res => {
      console.log('Post',res);
      this.postValues = res;
      
    })

  }

  // PUT METHOD

  onSubmitPut(){
    let userData = {
      name : this.username,
      email:this.email,
      mobile:this.mobile
    }
   
    this.api.putUserDetails(userData).subscribe(response =>{
      console.log('PUT',response);
      this.putValues =response;
      
    })
  }

  onSubmitPatch(){

    let userData = {
      name : this.username,
      email:this.email,
      mobile:this.mobile
    }

    this.api.patchUserDetails(userData).subscribe(resp =>{
      console.log('Patch', resp);
      this.patchValues = resp
      
    })

  }

  onSubmitDelete(){

    let userData = {
      name : this.username,
      email:this.email,
      mobile:this.mobile
    }
    this.api.deleteUserDetails(userData).subscribe(response =>{
      console.log('Delete',response);
      
    })

  }
}
