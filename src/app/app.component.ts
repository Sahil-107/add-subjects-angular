import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from './route.service';
import { Subject } from 'rxjs';
import { subject } from './data-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: RouteService, private router: Router) { }

  title = 'add-subjects';
  image: File;

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  addSubject(data: subject) {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(data)], {
      type: "application/json"
    }));
    formData.append('image', this.image);
    this.route.addSubjectsroute(formData).subscribe((result) => {
      if (result) {
        alert(result["Response"]);
      }
      console.warn(result);
    });
  }
}
