import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Phrase } from "../interfaces/phrase";

@Injectable({
  providedIn: "root"
})
export class ChuckService {
  private ChuckUrl = "https://api.chucknorris.io/jokes/random";

  constructor(private http: HttpClient) {}

  public getPhrase(): Observable<Phrase> {
    return this.http.get<Phrase>(this.ChuckUrl);
  }
}
