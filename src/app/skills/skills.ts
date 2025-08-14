import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
skills = {
    backend: ['ASP.NET Core', '.NET 9', '.NET 8', '.NET Framework 4.8.1', 'Entity Framework Core', 'C#'],
    frontend: ['Angular (v20.1.5)', 'TypeScript', 'HTML5', 'CSS3', 'Node.js (v24.5.0)', 'npm (v11.5.1)'],
    database: ['MSSQL', 'SQL'],
  };
}
