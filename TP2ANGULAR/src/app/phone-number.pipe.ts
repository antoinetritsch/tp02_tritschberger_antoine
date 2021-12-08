import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(rawNum:string) {
    rawNum = "+33"+ rawNum.slice(1,rawNum.length);
    return rawNum;
  }

}