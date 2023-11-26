import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { AppResponse } from '../model/appResponse';
import { HttpClient } from '@angular/common/http';
import { urlEndpoint } from '../utils/constant';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(private http: HttpClient) {}
  getAllCategory(): Observable<AppResponse> {
    return this.http.get<AppResponse>(`${urlEndpoint.baseUrl}/category/all`);
  }
  addCategory(category: Category):Observable<AppResponse> {
    return this.http.post<AppResponse>(`${urlEndpoint.baseUrl}/restaurant/category`,category)
  }
  deleteCategory(id: number): Observable<AppResponse> {
    return this.http.delete<AppResponse>(
      `${urlEndpoint.baseUrl}/restaurant/category/${id}`
    );
  }
}
