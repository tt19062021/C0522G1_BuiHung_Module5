import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like = 0;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  likeThis() {
    this.like++;
  }
  sendToArticle(): void {
    console.log('gui len cha .....');
    this.eventEmitter.emit(this.likeThis());
  }
}
