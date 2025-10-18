import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-timeline-item',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.scss'
})
export class TimelineItem {
  id!: number;
  title!: string;
  type!: 'formation' | 'experience';
  date!: Date;
  description!: string;
}
