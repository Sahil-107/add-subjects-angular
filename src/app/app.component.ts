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

  constructor(private route:RouteService, private router: Router){}

  title = 'add-subjects';
  image: File;

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  addSubject(data:subject):void{
    // console.log(data)
    const formData = new FormData();
    formData.append('data',JSON.stringify(data))
    formData.append('image', this.image);

    this.route.addSubjectsroute(formData).subscribe((result)=>{
      if(result){
        alert(result);
      }
      console.warn(result);
    });
  }
}
