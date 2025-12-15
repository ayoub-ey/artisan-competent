import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { LangToggle } from '../../../shared/components/lang-toggle/lang-toggle';
import { ThemeToggle } from '../../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'ac-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslocoModule, LangToggle, ThemeToggle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  mobileNavOpen = false;
  mobileNavRegisterOpen = false;
  mobileNavLoginOpen = false;
  desktopRegisterOpen = false;
  desktopLoginOpen = false;

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav() {
    this.mobileNavOpen = false;
  }

  toggleMobileNavRegister() {
    this.mobileNavLoginOpen = false;
    this.mobileNavRegisterOpen = !this.mobileNavRegisterOpen;
  }

  toggleMobileNavLogin() {
    this.mobileNavRegisterOpen = false;
    this.mobileNavLoginOpen = !this.mobileNavLoginOpen;
  }

  toggleDesktopRegister() {
    if (window.matchMedia('(min-width: 1024px)').matches) return;
    this.desktopLoginOpen = false;
    this.desktopRegisterOpen = !this.desktopRegisterOpen;
  }

  toggleDesktopLogin() {
    if (window.matchMedia('(min-width: 1024px)').matches) return;
    this.desktopRegisterOpen = false;
    this.desktopLoginOpen = !this.desktopLoginOpen;
  }
}
