import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() wehavesubmitted = new EventEmitter<string>();

  tobesearched = ''

  onsubmit(key: any) {
    key.preventDefault()
    this.wehavesubmitted.emit(this.tobesearched)
  }

}

