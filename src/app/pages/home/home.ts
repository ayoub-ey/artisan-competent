import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {}
