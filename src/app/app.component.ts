import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardUser, UserName } from '@aamdev/ngx-components/components/card-user';
import { UserResponse } from './models/userResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-test-project';
  public userList: CardUser[] = [];
  public textToFind: string = '';
  public text: string = 'Proyecto de Librería de Componentes de Angular. Texto de prueba para probar la directiva';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public searchText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.textToFind = inputElement.value as string;
  }

  private getUsers(): void {
    this.http.get<UserResponse>('../assets/persons.json').subscribe(
      (response: UserResponse) => {
        this.userList = response.results;
      }
    )
  }

  public onUserCheck(userName: UserName): void {
    console.log({ userName });
  }
}
