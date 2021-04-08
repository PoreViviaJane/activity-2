import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  text="";
  messages=[];

  constructor() { }

  send(){
    let messages = {
    text: this.text
    
  }
  this.messages.push(messages);
  this.clearField();
}
clearField(){
  this.text="";
}


  ngOnInit() {
  }

}
