import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient,) { }

  public products: ProductType[] = [];
  //Переменная для хранения значение для loader
  public loading: boolean = false;

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    //Выполняем запрос на бэк с утверждением типа данных в дженерике
    // this.http.get<{ data: ProductType[] }>('http://testologia.ru/pizzas?extraField=1')
    //   .pipe(
        //Промежуточная обработка
        // tap((result) => {
        //   console.log(result);
        // }),
        //Обработка результата под нужный тип
        // map((result) => result.data),
        //Отлов ошибки
        // catchError(error => {
          //Если ошибка есть, то возвращаем пустой массив с помощью оператора of
          // return of([]);
        // }),
        //Повтор запроса, если есть ошибка
        // retry(3)
      // )
      //Подписка на событие
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )

  }

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }

}
