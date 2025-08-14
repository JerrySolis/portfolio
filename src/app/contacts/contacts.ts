import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class ContactsComponent {
contactInfo = {
    email: 'jerrysolis@email.com',
    linkedin: 'https://linkedin.com/in/jerrysolis',
    github: 'https://github.com/jerrysolis',
  };
  cvUrl: string = 'assets/CV/JERRYSOLIS-CV.pdf';
}
