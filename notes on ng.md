Data transmission:
1. to Child component - @Input in child comp, + pass in data as parameter in tag.
2. to Parent - use @Output + EventEmitter. 
    In child comp add event handler, with newEventEmitterObj.emit($event).
    In parent comp add newEventEmitterObj = handler func, which takes in event obj

Add event handler to child and event receiving handler to parent. 

Interpolation{{}}, Prop binding[] and Expression
- *ngFor
- *ngIf *ngSwitch
- [hidden]
- [ngStyle], [ngClass] ="expression" or function, returning some values


Services
Inject 3rd party libraries as services