import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  animations: [
    trigger('divState', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [animate(
        300,
        style({
          opacity: 1
        })
      )]),
      transition('* => void', [animate(
        300,
        style({
          opacity: 0
        })
      )])
    ])
  ]
})
export class ChatroomComponent implements OnInit {

  openChat: boolean = false;
  state: string = 'void';

  constructor() { }

  ngOnInit() {
  }

  toggleChatroom() {
    this.openChat = !this.openChat;
    this.state = this.state === 'closed' ? 'opened' : 'closed';
  }

}
