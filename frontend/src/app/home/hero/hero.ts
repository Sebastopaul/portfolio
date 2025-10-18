import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HeroData } from './data/hero-data';
import { HeroInfo } from './data/hero-info';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero implements OnInit {
  hero?: HeroInfo;

  constructor(private heroData: HeroData) {}

  ngOnInit(): void {
    this.heroData.getHero().subscribe(data => this.hero = data);
  }
}
