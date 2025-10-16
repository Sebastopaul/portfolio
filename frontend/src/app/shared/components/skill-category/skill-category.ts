import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipListbox } from '@angular/material/chips';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-category',
  imports: [MatCardModule, MatChip, MatChipListbox],
  templateUrl: './skill-category.html',
  styleUrl: './skill-category.scss'
})

export class SkillCategory {
  @Input() category!: { name: string; skills: string[] };
}
