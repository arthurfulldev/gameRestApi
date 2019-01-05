import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/games.service'

@Component({
    selector: 'app-game-form',
    templateUrl: './game-form.component.html',
    styleUrls: ['./game-form.component.scss']
})

export class GameFormComponent implements OnInit {

    @HostBinding('class') classes = 'row';

    public game: FormGroup;

    private gameData: Game = {
        id          : null,
        title       : null,
        description : null,
        image       : null,
        created_at  : new Date(),
        updated_at  : new Date()
    };

    public btnIcon = 'fas fa-hdd';
    public btnLabel = 'Guardar Juego';
    public crear = true;

    constructor( 
        private fb: FormBuilder, 
        private gs: GamesService, 
        private router: Router,
        private activatedRoute: ActivatedRoute ) { 
        
        this.game = this.fb.group({
            id: [ null ],
            title: [ null, [ Validators.required ] ],
            description: [ null, [ Validators.required] ],
            image: [ null, [ Validators.required ] ],
            created_at: [ null ],
            updated_at: [null]
        });
    }

    ngOnInit() {
        let params = this.activatedRoute.snapshot.params;
        if( params.id ){
            this.crear = false;
            this.btnIcon = 'fas fa-pencil-alt';
            this.btnLabel = 'Actualizar Juego';
            this.gs.getGame(params.id).subscribe(
                (success) => {
                    if( success[0].length == null ){
                        this.router.navigate['/games']
                    }
                    this.gameData = success[0];
                    console.log(success[0]);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    public createGame(): void
    {

        let id = this.gameData.id;
        delete this.gameData.id;
        delete this.gameData.created_at;
        delete this.gameData.updated_at;

        if( this.crear ){
            this.gs.createGame( this.gameData ).subscribe(
                (res) => {
                    console.log(res);
                    this.router.navigate(['/games'])
                },
                error => console.log(error)
            );
        } else{ 
            this.gs.updateGame( id, this.gameData).subscribe(
                (res) => {
                    console.log(res);
                    this.router.navigate(['/'])
                },
                error => console.log(error)
            );
        }
    }
}
