import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline } from './timeline';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

describe('Timeline', () => {
  let component: Timeline;
  let fixture: ComponentFixture<Timeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timeline, FormsModule, MatButtonToggleModule, MatCardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Timeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show all items by default', () => {
    const cards = fixture.debugElement.queryAll(By.css('.timeline-item'));
    expect(cards.length).toBe(component.items.length);
  });

  it('should filter to only formations', () => {
    component.filter = 'formation';
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.timeline-item'));
    const onlyFormations = component.items.filter(i => i.type === 'formation');
    expect(cards.length).toBe(onlyFormations.length);
  });

  it('should display empty state when no item matches', () => {
    component.items = [];
    fixture.detectChanges();
    const emptyText = fixture.debugElement.query(By.css('.empty-state'));
    expect(emptyText).toBeTruthy();
  });
});
