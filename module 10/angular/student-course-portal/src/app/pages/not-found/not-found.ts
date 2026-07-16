// Hands-On 7 — NotFoundComponent
// Matched by the ** wildcard route — must be the LAST route in the routes array
// Angular matches routes in order; wildcard before specific routes would catch everything
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {}
