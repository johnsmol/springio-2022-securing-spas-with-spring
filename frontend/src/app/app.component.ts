import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { InboxService } from './services/inbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private authenticationService: AuthenticationService,
    private inboxService: InboxService
  ) {}

  ngOnInit(): void {
    this.authenticationService.checkIsAuthenticated();
    this.inboxService.fetchEmails().subscribe({
      next: (res) => console.log(res),
      error: () => console.log('error retrieving emails'),
    });
  }
}
