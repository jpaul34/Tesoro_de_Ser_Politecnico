import { Component, OnInit } from '@angular/core';
import { ResizeGameScene } from 'src/game/functions/resize-game-scene';
import { gameConfig } from 'src/game/configurations/game-config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  private game: Phaser.Game;

  ngOnInit(): void {
    this.startGame();
  }

  constructor() {
  }

  private resizeGame() {
    console.log('resizeGame');
    setTimeout(
        () => {
          ResizeGameScene(this)();
          window.addEventListener('resize', ResizeGameScene(this), false);
        }, 1
    );
  }

  private startGame() {
    setTimeout(
        () => {       
          this.game = new Phaser.Game(gameConfig);
          this.resizeGame();
        }, 1
    );
  }

}
