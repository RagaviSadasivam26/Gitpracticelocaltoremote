import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-git',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './git.component.html',
  styleUrl: './git.component.css'
})
export class GitComponent {
  Title = "Github Repository"
  Task = "Github Process - Transferring angular project from Local Repository to Remote Repository"
}
