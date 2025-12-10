//import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';
import { Inject, Injectable } from '@angular/core';

import { Trip } from '../models/trip';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  //constructor(private http: HttpClient) { }
 // url = 'http://localhost:3000/api/trips';

 constructor(
private http: HttpClient,
@Inject(BROWSER_STORAGE) private storage: Storage
) {}

//two separate urls 
 private tripsBaseUrl = 'http://localhost:3000/api/trips';
  private authBaseUrl = 'http://localhost:3000/api';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsBaseUrl);
  
  }

  addTrip(formData: Trip) : Observable<Trip> {
   return this.http.post<Trip>(this.tripsBaseUrl, formData);

  }

  getTrip(tripCode: string) : Observable<Trip> {
    //console.log('Inside TripDataService::getTrips');
    return this.http.get<Trip>(`${this.tripsBaseUrl}/${tripCode}`);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    //console.log('Inside TriPDataService::addTrips');

    return this.http.put<Trip>(`${this.tripsBaseUrl}/${formData.code}`, formData);
  }

  // Call to our /login endpoint, returns JWT
login(user: User, passwd: string) : Observable<AuthResponse> {
return this.handleAuthAPICall('login', user, passwd);
}

register(user: User, passwd: string) : Observable<AuthResponse> {
return this.handleAuthAPICall('register', user, passwd);
}

handleAuthAPICall(endpoint: string, user: User, passwd: string) :
Observable<AuthResponse> {

let formData = {
name: user.name,
email: user.email,
password: passwd
};

return this.http.post<AuthResponse>(`${this.authBaseUrl}/${endpoint}`, formData);
}
}
