import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../core/api/api.service';
import { JokeDto } from '../models/joke-dto.model';

const API_URL = 'https://api.icndb.com/jokes/random';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  joke: Observable<string>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void {
    this.joke = this.apiService.getData(API_URL)
      .pipe(
        map((jokeDto: JokeDto) => {
          return jokeDto.value.joke;
        })
      );
  }

}