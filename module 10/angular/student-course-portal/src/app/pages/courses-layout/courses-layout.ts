// Hands-On 7 — CoursesLayoutComponent
// Acts as a shell for the nested /courses routes.
// <router-outlet> here renders either CourseListComponent (path:'')
// or CourseDetailComponent (path:':id') depending on the URL.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './courses-layout.html',
  styleUrl: './courses-layout.css'
})
export class CoursesLayout {}
