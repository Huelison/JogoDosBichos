import { Injectable } from '@angular/core';
import { Pergunta } from '../classes/pergunta';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {
  pergunta: Pergunta;
  perguntas: Pergunta[];
  constructor(private storage: Storage) { }

  /**
   * setPerguntas
   */
  public setPerguntas() {
    // inicio passaros 
    this.perguntas = [];
    this.pergunta = new Pergunta();
    this.pergunta.description = "Sua principal característica é o bico grande e alaranjado que contrasta com suas penas pretas pelo corpo e brancas no pescoço.";
    this.pergunta.pathImg = "'../../assets/perguntas/passaros/Uirapuru_verdadeiro.jpg";
    this.pergunta.resposta = 'Uirapuru verdadeiro';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Jacu');
    this.pergunta.animals.push('Uirapuru verdadeiro');
    this.pergunta.animals.push('Arará');
    this.pergunta.animals.push('Sabiá');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Sua principal característica é o bico grande e alaranjado que contrasta com suas penas pretas pelo corpo e brancas no pescoço.";
    this.pergunta.pathImg = "'../../assets/perguntas/passaros/Tucanucu.jpg";
    this.pergunta.resposta = 'Tucanuçu';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Urubu');
    this.pergunta.animals.push('Garça');
    this.pergunta.animals.push('Gavião');
    this.pergunta.animals.push('Tucanuçu');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Seus hábitos são noturnos e ela costuma sair durante o dia apenas em casos específicos, como para buscar comida.";
    this.pergunta.pathImg = "'../../assets/perguntas/passaros/Coruja_das_torres.jpg";
    this.pergunta.resposta = 'Coruja-das-torres';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Curuja');
    this.pergunta.animals.push('Avestruz');
    this.pergunta.animals.push('Coruja-das-torres');
    this.pergunta.animals.push('Cegonha');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "De porte pequeno, medindo cerca de 14 cm e com voo ágil, esta ave é pouco vista pois ela costuma ficar próximo dos emaranhados de cipó.";
    this.pergunta.pathImg = "'../../assets/perguntas/passaros/Cabure_da_amazonia.jpg";
    this.pergunta.resposta = 'Caburé-da-amazônia';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Caburé-da-amazônia');
    this.pergunta.animals.push('Canário');
    this.pergunta.animals.push('Bem Te Vi');
    this.pergunta.animals.push('Gavião');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "É uma ave de cor azul clara que também é conhecida como pipira-azul no Maranhão. Ela mede cerca de 17 cm e pesa aproximadamente 45 gramas.";
    this.pergunta.pathImg = "'../../assets/perguntas/passaros/Sanhacu_da_amazonia.jpg";
    this.pergunta.resposta = 'Sanhaçu-da-amazônia';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Urubu');
    this.pergunta.animals.push('Sanhaçu-da-amazônia');
    this.pergunta.animals.push('Pinguim');
    this.pergunta.animals.push('Galinha');

    this.perguntas.push(this.pergunta);

    this.storage.set('AVES', this.perguntas);

    console.log(this.pergunta);

    this.perguntas = [];
    this.pergunta = new Pergunta();
    this.pergunta.description = "Seu principal habitat são os lagos, lagoas e beira de rios, pois eles não costumam fazer migrações para alimentar ou se reproduzir, por exemplo. Além disso, em períodos de cheias é possível encontrar o em áreas inundadas.";
    this.pergunta.pathImg = "'../../assets/perguntas/peixes/Tucunare.jpg";
    this.pergunta.resposta = 'Tucunaré';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Tucunaré');
    this.pergunta.animals.push('Betta');
    this.pergunta.animals.push('Tubarão');
    this.pergunta.animals.push('Carpa');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "É um peixe que pode pesar até 85 kg e medir 180 cm. É conhecido por apresentar manchas pretas espalhadas pelo corpo, não possuir escamas e sim couro, além de apresentar uma carne muito apreciada por ter poucos espinhos.";
    this.pergunta.pathImg = "'../../assets/perguntas/peixes/Pintado.jpg";
    this.pergunta.resposta = 'Pintado';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Bacalhau');
    this.pergunta.animals.push('Barrigudinho');
    this.pergunta.animals.push('Pintado');
    this.pergunta.animals.push('Carpa');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Como característica física apresenta cor prateada que altera quando se torna adulto, passando a ter um brilho azulado. Além disso, possui escamas grandes e barbatanas que quase se fundem.";
    this.pergunta.pathImg = "'../../assets/perguntas/peixes/Aruana.jpg";
    this.pergunta.resposta = 'Aruanã';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Salmão');
    this.pergunta.animals.push('Aruanã');
    this.pergunta.animals.push('Atum');
    this.pergunta.animals.push('Baiacu');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Seu corpo arredondado e achatado, além de escamas pequenas e em grande quantidade, são suas principais características.";
    this.pergunta.pathImg = "'../../assets/perguntas/peixes/Pacu.jpg";
    this.pergunta.resposta = 'Pacu';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Piranha');
    this.pergunta.animals.push('Sardinha');
    this.pergunta.animals.push('Lambari');
    this.pergunta.animals.push('Pacu');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "A principal característica deste peixe são seus dentes afiados e comportamento agressivo, resultando em ataques violentos e frenéticos.";
    this.pergunta.pathImg = "'../../assets/perguntas/peixes/Piranha_vermelha.jpg";
    this.pergunta.resposta = 'Piranha-vermelha';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Golfinho');
    this.pergunta.animals.push('Jundiá');
    this.pergunta.animals.push('Piranha-vermelha');
    this.pergunta.animals.push('Tubarão Martelo');

    this.perguntas.push(this.pergunta);

    this.storage.set('PEIXES', this.perguntas);

    this.perguntas = [];
    this.pergunta = new Pergunta();
    this.pergunta.description = "A cor característica deste boto muda de acordo com a idade e local que o animal vive, uma vez que esses fatores interferem na circulação sanguínea.";
    this.pergunta.pathImg = "'../../assets/perguntas/mamiferos/Boto_cor_de_rosa.jpg";
    this.pergunta.resposta = 'Boto-cor-de-rosa';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Cachorro');
    this.pergunta.animals.push('Vaca');
    this.pergunta.animals.push('Boto-cor-de-rosa');
    this.pergunta.animals.push('Baleia');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "A cor acinzentada de seus pelos ajuda na camuflagem quando está nas árvores e evita ser encontrado por predadores. Seus hábitos são noturnos e utilizam a luz do dia apenas para descansar.";
    this.pergunta.pathImg = "'../../assets/perguntas/mamiferos/Bicho_preguica.jpg";
    this.pergunta.resposta = 'Bicho-preguiça';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Gato');
    this.pergunta.animals.push('Coala');
    this.pergunta.animals.push('Jaguatirica');
    this.pergunta.animals.push('Bicho-preguiça');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Conhecido por seu grito alto que pode ser ouvido de uma grande distância, o macaco-guariba macho apresenta os pelos avermelhados e as fêmeas e jovens têm pelos escuros.";
    this.pergunta.pathImg = "'../../assets/perguntas/mamiferos/Macaco_guariba.jpg";
    this.pergunta.resposta = 'Macaco guariba';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Hipopótamo');
    this.pergunta.animals.push('Macaco guariba');
    this.pergunta.animals.push('Leão');
    this.pergunta.animals.push('Quati');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "É tema de estudo de diversas pesquisas, principalmente relacionadas ao risco de extinção da espécie e degradação ambiental.";
    this.pergunta.pathImg = "'../../assets/perguntas/mamiferos/Macaco_prego.jpg";
    this.pergunta.resposta = 'Macaco-prego';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Urso');
    this.pergunta.animals.push('Zebra');
    this.pergunta.animals.push('Lêmure');
    this.pergunta.animals.push('Macaco-prego');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Ela apresenta alta capacidade de adaptação ao ambiente que vive, por isso pode também ser encontrada em locais habitados por seres humanos.";
    this.pergunta.pathImg = "'../../assets/perguntas/mamiferos/Capivara.jpg";
    this.pergunta.resposta = 'Capivara';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Capivara');
    this.pergunta.animals.push('Pato');
    this.pergunta.animals.push('Vaca');
    this.pergunta.animals.push('Rato');

    this.perguntas.push(this.pergunta);

    this.storage.set('MAMIFEROS', this.perguntas);

    this.perguntas = [];
    this.pergunta = new Pergunta();
    this.pergunta.description = "Também conhecido como sapo-boi, sapo-jururu e sapo-gigante, é um dos maiores sapos que vive na Amazônia.";
    this.pergunta.pathImg = "'../../assets/perguntas/anfibios/Sapo_Cururu.jpg";
    this.pergunta.resposta = 'Sapo-Cururu';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Sapo de vidro');
    this.pergunta.animals.push('Sapo-Cururu');
    this.pergunta.animals.push('Rã dardo venenosa azul');
    this.pergunta.animals.push('Sapo arlequim');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Ele possui uma boca considerada grande, o que permite engolir animais do mesmo tamanho que o seu. Além disso, ele tem protuberâncias em cima dos olhos que lembram um chifre, por isso o nome popular.";
    this.pergunta.pathImg = "'../../assets/perguntas/anfibios/Sapo_de_chifre_da_Amazonia.jpg";
    this.pergunta.resposta = 'Sapo-de-chifre-da-Amazônia';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Sapo comum');
    this.pergunta.animals.push('Rã marrom');
    this.pergunta.animals.push('Rã-touro');
    this.pergunta.animals.push('Sapo-de-chifre-da-Amazônia');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Pesquisadores vem estudando esta espécie pois acredita-se que ela possui secreções e substâncias para utilização medicinal.";
    this.pergunta.pathImg = "'../../assets/perguntas/anfibios/Ra_kambo.jpg";
    this.pergunta.resposta = 'Rã-kambô';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Sapinho da folhagem');
    this.pergunta.animals.push('Rã-verde');
    this.pergunta.animals.push('Sapo de verrugas verdes');
    this.pergunta.animals.push('Rã-kambô');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Sua característica mais marcante é o formato achatado de seu corpo, além da cabeça pontuda, mãos com quatro dedos e pés com cinco dedos. Ele vive na água e sua alimentação é baseada em animais aquáticos.";
    this.pergunta.pathImg = "'../../assets/perguntas/anfibios/cururu_pe_de_pato.jpg";
    this.pergunta.resposta = 'Sapo cururu-pé-de-pato';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Rã');
    this.pergunta.animals.push('Sapo cururuzinho');
    this.pergunta.animals.push('Sapo cururu-pé-de-pato');
    this.pergunta.animals.push('Sapo arlequim');

    this.perguntas.push(this.pergunta);

    this.storage.set('ANFIBIOS', this.perguntas);

    this.perguntas = [];
    this.pergunta = new Pergunta();
    this.pergunta.description = "É a maior espécie de jacaré, chegando a medir até 4,5 metros de comprimento. Seus olhos e nariz são grandes, pois o ajudam a ficar semi-submersos.";
    this.pergunta.pathImg = "'../../assets/perguntas/repteis/jacare_acu.jpg";
    this.pergunta.resposta = 'Jacaré-açu';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Crocodilo');
    this.pergunta.animals.push('Jacaré-açu');
    this.pergunta.animals.push('Iguana');
    this.pergunta.animals.push('Lagartixa');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Sua principal característica física são as manchas amarelas na cabeça e nas bordas da carapaça. Seu tempo médio de vida é de 90 anos.";
    this.pergunta.pathImg = "'../../assets/perguntas/repteis/tracaja.jpg";
    this.pergunta.resposta = 'Tracajá';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Jabuti');
    this.pergunta.animals.push('Tartaruga Marinha');
    this.pergunta.animals.push('Jacaré');
    this.pergunta.animals.push('Tracajá');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "Seu veneno é poderoso e atinge o sistema nervoso da vítima, impedindo a locomoção e causando dificuldade de respirar.";
    this.pergunta.pathImg = "'../../assets/perguntas/repteis/cascavel.jpg";
    this.pergunta.resposta = 'Cobra Cascavel';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Cobra Cascavel');
    this.pergunta.animals.push('Cobra Cotiara');
    this.pergunta.animals.push('Urutu Cruzeiro');
    this.pergunta.animals.push('Caiçara');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "É uma serpente peçonhenta que apresenta hábitos terrestres e, algumas delas, especialmente as mais jovens, hábitos arborícolas, ou seja, que vive em árvores.";
    this.pergunta.pathImg = "'../../assets/perguntas/repteis/jararaca.jpg";
    this.pergunta.resposta = 'Jararaca';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Malha de Sapo');
    this.pergunta.animals.push('Cascavel');
    this.pergunta.animals.push('Surucucu');
    this.pergunta.animals.push('Jararaca');

    this.perguntas.push(this.pergunta);

    this.pergunta = new Pergunta();
    this.pergunta.description = "É popularmente conhecida como anaconda, sendo reconhecida como a maior serpente do mundo.";
    this.pergunta.pathImg = "'../../assets/perguntas/repteis/sucuri.jpg";
    this.pergunta.resposta = 'Cobra Sucuri';
    this.pergunta.animals = [];
    this.pergunta.animals.push('Coral Verdadeira');
    this.pergunta.animals.push('Cobra Sucuri');
    this.pergunta.animals.push('Naja');
    this.pergunta.animals.push('Mamba-Negra');

    this.perguntas.push(this.pergunta);

    return this.storage.set('REPTEIS', this.perguntas);

  }

  getDescCategoria(categoria: string, prefixo: boolean = false) {
    switch (categoria.toUpperCase()) {
      case 'ANFIBIOS':
        return (prefixo ? "dos " : "") + "Anfíbios";
        break;
      case 'AVES':
        return (prefixo ? "das " : "") + "Aves";
        break;
      case 'MAMIFEROS':
        return (prefixo ? "dos " : "") + "Mamíferos";
        break;
      case 'PEIXES':
        return (prefixo ? "dos " : "") + "Peixes";
        break;
      case 'REPTEIS':
        return (prefixo ? "dos " : "") + "Répteis";
        break;
      default:
        break;
    }
  }

  /**
   * getPerguntas
   */
  public getPerguntas(Categoria: string) {
    return this.storage.get(Categoria.toUpperCase());
    /*.then((val) => {
      this.perguntas = val;
      console.log(this.perguntas);
    });*/
  }
}
