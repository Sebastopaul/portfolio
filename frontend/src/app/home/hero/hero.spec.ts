// src/home/components/hero/hero.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { Hero } from './hero';
import { HeroData } from './data/hero-data';
import { HeroInfo } from './data/hero-info';
import { of } from 'rxjs';

// Données simulées pour le hero
const mockHero: HeroInfo = {
  name: 'Jean-Paul Du Bourg',
  title: 'Développeur Web Fullstack',
  description:
    'Je conçois et développe des applications modernes, performantes et élégantes, alliant esthétique et robustesse.',
  photoUrl: 'assets/images/profile.jpg',
  email: 'jpdubourg@example.com',
  phone: '+33 0 00 00 00 00'
};

// Mock du service HeroData
class MockHeroData {
  getHero() {
    return of(mockHero); // retourne un Observable simulé
  }
}

describe('HeroComponent', () => {
  let heroData: HeroData;

  beforeEach(() => {
    // Instanciation du service mock
    heroData = new MockHeroData() as unknown as HeroData;
  });

  it('should create the component', async () => {
    const { container } = await render(Hero, {
      providers: [{ provide: HeroData, useClass: MockHeroData }]
    });
    expect(container).toBeTruthy();
  });

  it('should display hero', async () => {
    await render(Hero, {
      providers: [{ provide: HeroData, useClass: MockHeroData }]
    });
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(screen.getByText(mockHero.name)).toBeTruthy();
    expect(screen.getByText(mockHero.title)).toBeTruthy();
    expect(screen.getByText(mockHero.description)).toBeTruthy();
    expect(img.src).toContain(mockHero.photoUrl);
  });
});
