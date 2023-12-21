import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shell';
  constructor(public commonsLibService: CommonsLibServicece) { }

}
