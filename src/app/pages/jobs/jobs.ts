import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss',
})
export class JobsPage {}
