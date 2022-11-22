import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortenerResponse } from '../model/ShortenerResponse';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

constructor( private http: HttpClient) { }

shortenUrl(url: string):Observable<ShortenerResponse>{
  return this.http.get<ShortenerResponse>(`https://api.shrtco.de/v2/shorten?url=${url}`);
}
}
