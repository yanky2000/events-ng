import { Injectable } from '@angular/core';


declare let toastr: any

@Injectable()
export class ToastrService {

  constructor() { }

  success(name, title?) {
    toastr.success(name, title)
  }

}
