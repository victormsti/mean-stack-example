import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private newService:CommonService){}
  repData;
  valButton = "Save";

  ngOnInit(){
    this.newService.getUser().subscribe(
      data=>{
      this.repData = data
      });
  }

  onSave = function(user,isValid:boolean) {
    user.mode = this.valButton;
    this.newService.saveUser(user).subscribe(
      data=>{
        alert(data.data);
        this.ngOnInit();
      }
      , error => this.errorMessage = error)
  }

  edit =function(kk){
    this.id = kk._id;
    this.name = kk.name;
    this.address = kk.address;
    this.valButton = "Update";
  }

  delete = function(id){
    this.newService.deleteUser(id).subscribe(
      data=>{
        alert(data.data);
        this.ngOnInit();
    }, error=>this.errorMessage = error)
  };
}
