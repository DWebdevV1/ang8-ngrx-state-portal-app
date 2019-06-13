import { Component, OnInit } from '@angular/core';
import { faHome, faDatabase, faInfoCircle, faMobileAlt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faHome = faHome;
  faDatabase = faDatabase;
  faInfoCircle = faInfoCircle;
  faMobileAlt = faMobileAlt;
  faGlobeEurope = faGlobeEurope;

  constructor() { }

  ngOnInit() {
  }

}
