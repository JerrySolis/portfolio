import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent {
  personalInfo = {
    name: 'Jerry Solis',
    title: 'Full-Stack .NET & Angular Developer',
    profilePicture: 'assets/images/profile.jpg',
  };
}
