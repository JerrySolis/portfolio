import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent {
  personalInfo = {
    name: 'Junior Full-Stack .NET & Angular Developer',
    title: "Hi, I'm Jerry Solis. A passionate Full-Stack .NET & Angular Developer based in Metro Manila, Philippines",
    profilePicture: 'assets/images/profile.jpg',
  };
}
