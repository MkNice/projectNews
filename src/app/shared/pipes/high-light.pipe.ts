import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highLight'
})
export class HighLightPipe implements PipeTransform {

  transform(text: string, filter: string): string {
    if (!filter) return text;
    const regex = new RegExp(filter, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
}