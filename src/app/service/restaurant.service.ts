import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppResponse } from '../model/appResponse';
import { urlEndpoint } from '../utils/constant';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getAllRestaurant(): Observable<AppResponse> {
    return this.http.get<AppResponse>(`${urlEndpoint.baseUrl}/restaurant/all`);
  }
  addRestaurant(restaurant: Restaurant): Observable<AppResponse> {
    return this.http.post<AppResponse>(
      `${urlEndpoint.baseUrl}/admin/restaurant/register`,
      restaurant
    );
  }
  deleteRestaurant(restaurantId: number) {
    return this.http.delete<AppResponse>(
      `${urlEndpoint.baseUrl}/admin/restaurant/${restaurantId}`
    );
  }
}
