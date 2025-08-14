import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
    projects = [
    {
      title: 'Enterprise Web Application',
      description:
        'Developed and maintained a large-scale web application for a multinational corporation using ASP.NET Core and Angular. The project involved building RESTful APIs, optimizing database queries with Entity Framework Core, and creating a responsive user interface with a modular design.',
      technologies: ['Angular', 'ASP.NET Core', 'MSSQL', 'Entity Framework Core', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Legacy System Upgrade',
      description:
        'Successfully upgraded a critical business application from .NET Framework 4.8.1 to .NET 8. The migration resulted in a 30% performance increase and allowed the team to leverage modern language features and frameworks.',
      technologies: ['.NET 8', '.NET Framework', 'C#', 'SQL Server'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Data Management Solution',
      description:
        'Designed and implemented a full-stack data management tool to streamline business processes. This solution used MSSQL as the backend and a modern Angular frontend, significantly improving data entry and reporting efficiency.',
      technologies: ['Angular', 'MSSQL', 'Node.js', 'Express.js'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  selectedProject: any = null;

  openProjectDetails(project: any): void {
    this.selectedProject = project;
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
  }

}
