import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './Services/student.service';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'data-app';
  students:any = [];
  weather:any = [];
  temperature:any = [];

constructor (private StudentService:StudentService, private WeatherService:WeatherService) {

}

ngOnInit():void {
  this.StudentService.GetStudentData().subscribe(
    (data)=>{
      this.students = data.students;
    });
  
  this.WeatherService.GetWeatherData().subscribe(
    (data)=>{
      this.weather = data.weather;
      this.temperature = data.main;
    });
  
  }
}