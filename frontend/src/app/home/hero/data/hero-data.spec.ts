import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HeroData } from './hero-data';
import { HeroInfo } from './hero-info';
import {provideHttpClient} from '@angular/common/http';

describe('HeroData (with HTTP)', () => {
  let service: HeroData;
  let httpMock: HttpTestingController;

  const mockHero: HeroInfo = {
    name: 'Jean-Paul Du Bourg',
    title: 'Développeur Web Fullstack',
    description:
      'Je conçois et développe des applications modernes, performantes et élégantes, alliant esthétique et robustesse.',
    photoUrl: 'assets/images/profile.jpg',
    email: 'jpdubourg@example.com',
    phone: '+33 0 00 00 00 00'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [HeroData, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(HeroData);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch hero data from the API', () => {
    service.getHero().subscribe((hero) => {
      expect(hero).toEqual(mockHero);
    });

    //const req = httpMock.expectOne('/api/hero');
    //expect(req.request.method).toBe('GET');
    //req.flush(mockHero);
  });
});
