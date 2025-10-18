import { Component } from '@angular/core';
import { Hero } from '../../../shared/components/hero/hero';
import { Timeline } from '../../../shared/components/timeline/timeline';

@Component({
  selector: 'app-home',
  imports: [Hero, Timeline],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
