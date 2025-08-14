import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Component, NgModule, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { SkillsComponent } from './skills/skills';
import { HeroComponent } from './hero/hero';
import { ContactsComponent } from './contacts/contacts';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule,HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactsComponent]
})
export class AppComponent {
  isDarkMode = false;
  
  ngOnInit(): void {
    // Check for saved preference first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // If no saved preference, check system preference
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.updateTheme();

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this.isDarkMode = e.matches;
        this.updateTheme();
      }
    });
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    // Save the user's preference
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
  
  private updateTheme(): void {
    // Update both HTML and body elements
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }
}

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent,
    BrowserModule,
    CommonModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }