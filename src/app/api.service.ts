import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://engineering-task.elancoapps.com/api';

  constructor(private http: HttpClient) { }

  // API endpoint for retrieving raw data
  getRawData(): Observable<any> {
    const url = `${this.baseUrl}/raw`;
    return this.http.get(url);
  }

  // API endpoint for retrieving applications data
  getApplications(): Observable<any> {
    const url = `${this.baseUrl}/applications`;
    return this.http.get(url);
  }

  // API endpoint for retrieving application details by name
  getApplicationByName(applicationName: string): Observable<any> {
    const url = `${this.baseUrl}/applications/${applicationName}`;
    return this.http.get(url);
  }

  // API endpoint for retrieving resources data
  getResources(): Observable<any> {
    const url = `${this.baseUrl}/resources`;
    return this.http.get(url);
  }

  // API endpoint for retrieving resource details by name
  getResourceByName(resourceName: string): Observable<any> {
    const url = `${this.baseUrl}/resources/${resourceName}`;
    return this.http.get(url);
  }
}
