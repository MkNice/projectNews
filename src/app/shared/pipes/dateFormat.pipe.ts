import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | Date): string {
    const dateObj = typeof value === 'string' ? new Date(value) : value;

    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(dateObj, 'MMMM d, y') || "";

    const day = dateObj.getDate();
    const suffix = this.getDayNumberSuffix(day);

    return formattedDate.replace(/\d+/, (match) => match + suffix);
  }

  private getDayNumberSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}
