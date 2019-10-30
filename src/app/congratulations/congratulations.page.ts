import { ActivatedRoute } from '@angular/router';
import { ConfettiGenerator } from 'confetti-js';
import { Component, OnInit } from '@angular/core';
import { PerguntasService } from '../providers/perguntas.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
})
export class CongratulationsPage implements OnInit {
  public categoria: string;
  public descCategoria:string;
  constructor(private perguntaSer: PerguntasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.descCategoria = this.perguntaSer.getDescCategoria(this.categoria, true);
    var confetConfig = { "target": "my-canvas", "max": "200", "size": "1", "animate": true, "props": ["circle", "square", "triangle", "line"], "colors": [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], "clock": "55" }
    console.info(ConfettiGenerator);
    var confet = ConfettiGenerator({ target: 'my-canvas' });
    confet.render();
  }

}
