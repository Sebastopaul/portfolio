import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TimelineItem} from '../../../shared/components/timeline-item/timeline-item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  constructor(private http: HttpClient) {}

  getTimelineItems(): Observable<TimelineItem[]> {
    return this.http.get<TimelineItem[]>('/api/timeline/');
  }
}
