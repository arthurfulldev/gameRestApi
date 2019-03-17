import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  providers: [ GamesService ]
})
export class GameListComponent implements OnInit {

  @HostBinding() class = 'row';

  public games;

  constructor( private gamesService: GamesService ) { }

  ngOnInit() {
    this.listGames();
  }

  public delete(id: string) {
      this.gamesService.deleteGame(id).subscribe(
        success => {
            console.log(success);
        },
        error => {
            console.log(error);
        }
      );
      this.listGames();
  }

  private listGames() {
    return this.gamesService.getGames().subscribe(
      ( success ) => {
          this.games = success;
      },
      ( error ) => {
          console.log( error );
      }
    );
  }
}
