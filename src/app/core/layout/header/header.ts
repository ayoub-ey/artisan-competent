import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangToggle } from '../../../shared/components/lang-toggle/lang-toggle';
import { ThemeToggle } from '../../../shared/components/theme-toggle/theme-toggle';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'ac-header',
  standalone: true,
  imports: [CommonModule, LangToggle, ThemeToggle, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
