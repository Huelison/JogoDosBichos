import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerguntasService } from '../providers/perguntas.service';
import { Pergunta } from '../classes/pergunta';
import { AlertController, NavController, IonContent } from '@ionic/angular'; 

@Component({
  selector: 'app-pg-pergunta',
  templateUrl: './pg-pergunta.page.html',
  styleUrls: ['./pg-pergunta.page.scss'],
})
export class PgPerguntaPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  categoria: string;
  descCategoria:string;
  pergunta: Pergunta;
  perguntas: Pergunta[];
  btnErrado: number;
  constructor(public navCtrl: NavController, private route: ActivatedRoute,
    private perguntaSer: PerguntasService, public alertController: AlertController) {
    this.pergunta = new Pergunta();
    this.perguntaSer.setPerguntas().then((val) => {

    });
  }

  async showMsgAcerto() {
    const alert = await this.alertController.create({
      header: 'Resposta',
      message: 'A resposta esta correta.',
      //      buttons: ['Prosseguir'],
      buttons: [{
        text: 'Prosseguir',
        handler: (val) => {
          if (this.perguntas.length > 0) {
            this.pergunta.pathImg = '../../assets/timer.gif';
            this.pergunta = this.perguntas.pop();
            this.content.scrollToTop(1500);
          } else {
            this.navCtrl.navigateForward('congratulations/'+this.categoria);
          }    /*      
          if (this.perguntas.length <= 0) {
            this.showMsgVencer();//this.navCtrl.navigateForward('home');
          }*/
        }
      }],
      backdropDismiss: false
    });

    await alert.present();
  }

  async showMsgErro() {
    const alert = await this.alertController.create({
      header: 'Resposta',
      message: 'A resposta esta errada.',
      buttons: [{
        text: 'Tentar Novamente',
        cssClass: 'warning'
      }]
    });

    await alert.present();
  }

  async showMsgVencer() {
    const alert = await this.alertController.create({
      header: 'Resposta',
      message: 'Você venceu!',
      buttons: [{
        text: 'Voltar para o inicio.',
        handler: (val) => {
          this.navCtrl.navigateForward('home');
        }
      }],
      backdropDismiss: false
    });

    await alert.present();
  }

  getPerguntas(first: boolean) {
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.descCategoria = this.perguntaSer.getDescCategoria(this.categoria);

    this.perguntaSer.getPerguntas(this.categoria).then((val) => {
      this.perguntas = val;
      if (this.perguntas != null) {
        this.pergunta = this.perguntas.pop();
        //,console.log(this.pergunta.pathImg);
        //console.log(this.pergunta);
      } else {
        if (first) {
          this.perguntaSer.setPerguntas().then((val) => {
            this.getPerguntas(false);
          });
        } else {
          this.navCtrl.navigateBack('home');

          //console.log('tete');//colocar aqui regra errada
        }
      }
    });
  }

  responder(resposta: string, key: number) {
    console.log(key);
    this.btnErrado = -1;

    if (this.pergunta.resposta == resposta) {
      this.showMsgAcerto().then(() => {
        /* if (this.perguntas.length > 0) {
           this.pergunta = this.perguntas.pop();
         } else {
           // this.showMsgVencer();
         }*/
      });
    } else {
      this.btnErrado = key;
      this.showMsgErro();
    }
  }

  ngOnInit() {
    this.getPerguntas(true);
  } 

}
