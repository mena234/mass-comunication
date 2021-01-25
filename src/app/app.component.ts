import { EmailFormComponent } from './email-form/email-form.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mass-communication';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EmailFormComponent)
  }
}
