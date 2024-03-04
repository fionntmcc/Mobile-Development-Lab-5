import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) {  }

  GetWeatherData():Observable<any> {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=cb5ef6d33d70dc40c4b99a466b650470');
    
  }
}
