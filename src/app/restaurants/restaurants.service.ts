import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantsService { 
    constructor(private http: Http) {}    

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json()) //Mapeia o objeto pra um Observable Restaurant
    }
}