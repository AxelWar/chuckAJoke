import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Phrase } from "./phrase";

@Injectable({
  providedIn: "root"
})
export class ChuckService {
  private phrase: Phrase = { value: "", icon_url: "", id: "", url: "" };
  private ChuckUrl = "https://api.chucknorris.io/jokes/random"; // URL to web api

  constructor(private http: HttpClient) {}

  public getPhrase(): Observable<Phrase> {
    return this.http.get<Phrase>(this.ChuckUrl);
  }
}
