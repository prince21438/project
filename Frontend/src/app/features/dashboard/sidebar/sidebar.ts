import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  isCollapsed = false;
  role: 'user' | 'deo' | 'superintendent' = 'user';

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const sessionRaw = localStorage.getItem('cp_session');
      if (sessionRaw) {
        try {
          const session = JSON.parse(sessionRaw);
          this.role = session?.role || 'user';
        } catch {
          this.role = 'user';
        }
      }
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
