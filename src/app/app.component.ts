import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [ApiService], // Asegúrate de que ApiService esté en los providers
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'marinanails';
  users: any;

  constructor(private apiService: ApiService) {}

  
  
  ngOnInit(): void {
    // this.apiService.getEntity('users').subscribe({
    //   next: (data) => {
    //     this.users = data;
    //     console.log(this.users);
    //   },
    //   error: (error) => {
    //     console.error('Error al obtener los users', error);
    //   }
    // } as Observer<Object>);

    this.apiService.getEntity('users').subscribe(
      (data:any) => {
        this.users = data;
        console.log('Users:', this.users);
        
      },
      (error:any) => {
        console.error('Error al obtener los users', error);
      }
    );
  }
}
