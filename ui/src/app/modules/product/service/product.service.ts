import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiEndpoint, IActionResponse } from '../../shared/model/shared.model';
import { IProduct } from '../product.model';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(params?: any): Observable<IProduct[]> {
    if (params) return this.http.get<any>(ApiEndpoint.PRODUCTS, {params});
    else return this.http.get<any>(ApiEndpoint.PRODUCTS);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<any>(ApiEndpoint.PRODUCTS + "/" + id);
  }

  getIProductByProductId(productId: string): Observable<IProduct> {
    return this.getAllProducts({productId}).pipe(
      map(data=>{
       if(data && data.length > 0){
        return data[0];
       } else {
         return null;
        };
      }),
      shareReplay()
    );
 }

  createProduct(product: IProduct): Observable<IActionResponse> {
    return this.http.post<IActionResponse>(ApiEndpoint.PRODUCTS, product);
  }

  updateProduct(product: IProduct, id: number): Observable<IActionResponse> {
    return this.http.put<IActionResponse>(ApiEndpoint.PRODUCTS + "/" + id, product);
  }

  deleteProduct(id: number): Observable<IActionResponse> {
    return this.http.delete<IActionResponse>(ApiEndpoint.PRODUCTS + "/" + id);
  }

}
