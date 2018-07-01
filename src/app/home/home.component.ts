import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // ตัวแปรหรือ property below
  //here is global variable

  itemCount:Number=4;

  itemDisplay:String="ADD IT";

  listText:String="";

  listall=[];

  constructor() { }

  ngOnInit() {
    this.itemCount=this.listall.length;
  }

  additem(){
if(this.listText !="" ){

  this.listall.push(this.listText);
  this.listText='';
  this.itemCount=this.listall.length;



}else{
alert('please fill data!');
}

  
  }

}
