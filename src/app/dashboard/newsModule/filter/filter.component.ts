import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  @Output() public filterChanged: EventEmitter<string> = new EventEmitter<string>();

  public onInputChange(value: Event) {
    const filterValue = (value.target as HTMLInputElement).value;
    this.filterChanged.emit(filterValue);
  }
}
