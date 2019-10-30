import { ConfettiGenerator } from 'confetti-js';
import { PerguntasService } from './../providers/perguntas.service';
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage {
  public subscription;
  constructor(private perguntaSer: PerguntasService, public navCtrl: NavController, private platform: Platform) {


    this.perguntaSer.setPerguntas().then((val) => {

    });
  }
  abrir() {
    this.navCtrl.navigateForward('pg-pergunta/PASSAROS');
  }
  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  openPagePerguntas(categoria: string) {
    this.navCtrl.navigateForward('pg-pergunta/' + categoria);
  }

  ngOnInit() {/*
    var confetConfig = { "target": "my-canvas", "max": "200", "size": "1", "animate": true, "props": ["circle", "square", "triangle", "line"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "55" }
    console.info(ConfettiGenerator);
    var confet = ConfettiGenerator({ target: 'my-canvas' });
    confet.render();*/
  }
}
