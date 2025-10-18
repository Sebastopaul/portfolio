import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { TimelineItem } from '../timeline-item/timeline-item';
import { Timeline as TimelineService } from '../../../core/services/timeline/timeline';

@Component({
  selector: 'app-timeline',
  imports: [FormsModule, MatButtonToggle, MatButtonToggleGroup],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class Timeline {
  constructor(private timelineService: TimelineService) {}

  filter: 'all' | 'formation' | 'experience' = 'all';
  items!: TimelineItem[] = ;

  get filteredItems() {
    if (this.filter === 'all') return this.items;
    return this.items.filter(item => item.type === this.filter);
  }
}
