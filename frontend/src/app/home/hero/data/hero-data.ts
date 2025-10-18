import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroInfo } from './hero-info';

@Injectable({ providedIn: 'root' })
export class HeroData {
  getHero(): Observable<HeroInfo> {
    return of({
      name: 'Jean-Paul Du Bourg',
      title: 'Développeur Web Fullstack',
      description:
        'Je conçois et développe des applications modernes, performantes et élégantes, alliant esthétique et robustesse.',
      photoUrl: 'assets/images/profile.jpg',
      email: 'jpdubourg@example.com',
      phone: '+33 0 00 00 00 00'
    });
    //return this.http.get<HeroInfo>('/api/hero');
  }
}
