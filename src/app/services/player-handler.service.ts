import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerHandlerService {

  public index$ = new BehaviorSubject<number>(0);

  constructor() { }
}
