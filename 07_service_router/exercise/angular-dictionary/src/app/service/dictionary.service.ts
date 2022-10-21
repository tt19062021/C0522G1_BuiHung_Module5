import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';
import {newArray} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: IWord[] = [
    {word: 'apple',
    mean: 'quả táo'},
    {word: 'book',
      mean: 'quyển sách'},
    {word: 'pen',
      mean: 'cây bút'},
    {word: 'mouse',
      mean: 'con chuột'},
    {word: 'door',
      mean: 'cánh cửa'},
    {word: 'picture',
      mean: 'bức ảnh'},
    {word: 'electronic fan',
      mean: 'máy quạt'},
  ];
  constructor() {

  }
  findByName(name: string) {
    return this.dictionaryList.find(item => item.word === name);
  }
  getAll(): IWord[] {
    return this.dictionaryList;
  }
}
