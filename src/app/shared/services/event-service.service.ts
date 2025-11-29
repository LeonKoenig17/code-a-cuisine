import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {
  isGenerating = false;

  private triggerSubject = new Subject<void>();
  trigger$ = this.triggerSubject.asObservable();

  triggerAction() {
    this.isGenerating = true;   // set when triggered
    this.triggerSubject.next();
  }
}
