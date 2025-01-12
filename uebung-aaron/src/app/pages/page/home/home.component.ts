import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() item = ''; // decorate the property with @Input()
  test = 'asdf';
  constructor(private activateRoute: ActivatedRoute, private router: Router) {}
}
