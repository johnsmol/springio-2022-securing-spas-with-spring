import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean | null>(null);

  constructor(private http: HttpClient) {}

  public checkIsAuthenticated(): void {
    this.http.get<void>('/user/me').subscribe({
      next: () => this.isAuthenticatedSubject.next(true),
      error: () => this.isAuthenticatedSubject.next(false),
    });
  }

  get isAuthenticated(): Observable<boolean | null> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
