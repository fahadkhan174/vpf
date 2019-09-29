import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  openChat: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleChatroom() {
    console.log('Expand event triggered');
    this.openChat = !this.openChat;
	}

}
