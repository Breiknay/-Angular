import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ApiService {Key = "JY87JF9m7AXQTRWrnXs6RygRuTFpxYcKJbJA0z17E3Q";

  count = 30;
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/random/?count=${this.count}&client_id=${this.Key}`
    );
  }
  constructor(private httpClient: HttpClient) {}
}
