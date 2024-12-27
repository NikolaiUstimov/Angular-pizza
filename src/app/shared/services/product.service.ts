import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductType[] = [
    //Закомментировал объекты, так как продукты запрашиваются с бэка
    // {
    //   id: 1,
    //   image: 'pizza1.png',
    //   title: 'Мясная Делюкс',
    //   description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 2,
    //   image: '',
    //   title: 'Морская Премиум',
    //   description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    //   datetime: '2022-01-31 15:00:00'
    // },
    // {
    //   id: 3,
    //   image: 'pizza3.png',
    //   title: 'Бекон и Сосиски',
    //   description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 4,
    //   image: 'pizza4.png',
    //   title: 'Куриная Делюкс',
    //   description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    //   datetime: '2022-12-31 19:00:00'
    // },
    // {
    //   id: 5,
    //   image: 'pizza5.png',
    //   title: 'Барбекю Премиум',
    //   description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 6,
    //   image: 'pizza6.png',
    //   title: 'Пепперони Дабл',
    //   description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    //   datetime: '2022-10-31 15:00:00'
    // },
    // {
    //   id: 7,
    //   image: 'pizza7.png',
    //   title: 'Куриное трио',
    //   description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    //   datetime: '2022-12-31 15:00:00'
    // },
    // {
    //   id: 8,
    //   image: 'pizza8.png',
    //   title: 'Сырная',
    //   description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    //   datetime: '2022-12-31 15:00:00'
    // },
  ];

  constructor(private http: HttpClient) { }

  //В этой функции выполняем запрос, а подписываемся в компоненте продуктов
  getProducts(): Observable<ProductType[]> {
    // return this.products;
    return this.http.get<ProductType[]>(environment.apiUrl + 'pizzas')
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiUrl + `pizzas?id=${id}`)
    // return this.products.find(item => (item.id === id));
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(environment.apiUrl + `order-pizza`, data)
  }
}
