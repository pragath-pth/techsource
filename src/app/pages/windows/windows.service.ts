import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.baseurl;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  private options = { headers: this.headers };

  getAppList(obj: any) : Observable <any> {
    return this.http.post(this.apiURL + 'apps/list', obj, this.options);
  }
}
