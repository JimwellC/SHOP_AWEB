import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_project_MMCR';
  constructor(private router: Router) {}
  onSearch(searchTerm: string) {
    // Assuming you have a search results page or logic to handle search
    if (searchTerm) {
      this.router.navigate(['/search', { query: searchTerm }]);
    } else {
      this.router.navigate(['/error']);
    }
  }
}
