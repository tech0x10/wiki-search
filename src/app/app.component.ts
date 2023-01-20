import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  results = [];
  constructor(private wikipedia: WikipediaService) { }
  apirequest(searchword: string) {
    this.wikipedia.searchit(searchword).subscribe((Response: any) => {
      this.results = Response.query.search
    })

  }
}
