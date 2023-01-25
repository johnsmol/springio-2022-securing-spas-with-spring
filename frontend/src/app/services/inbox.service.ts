import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  // emails$!: Observable<Email[]>;

  constructor(private http: HttpClient) {}

  public fetchEmails(): Observable<Email[]> {
    return this.http.get<Email[]>('/email');
  }
}
