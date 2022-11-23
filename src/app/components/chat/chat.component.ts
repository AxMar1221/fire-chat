import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {
  message: string = '';
  element: any;

  constructor( public _cs: ChatService ){
    this._cs.loadMessage()
    .subscribe( ()=>{
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      },20);
    })
  }
  ngOnInit(){
    this.element = document.getElementById('app-mensajes');
  }

  send_message(){
    console.log( this.message );
    if( this.message.length === 0){
      return;
    }
    this._cs.addMessage( this.message )
    .then( ()=>this.message = '' )
    .catch( ( err )=>console.warn('Error al enviar mensaje', err ))
  }

}
