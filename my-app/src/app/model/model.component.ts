import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

interface Car {
  nameCar: string;
  carImg: string;
  longText: string
}



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']

})




export class ModelComponent implements OnInit {
  cars:Car[]=[
    {
      nameCar:'Gle Coupe',
      carImg: "https://mbbelarus.by/upload/resize_cache/iblock/7bc/438_274_1/x3xfjug02e5db47o4h9ieb73fy9fui7g1.png.pagespeed.ic.RngUCd8Wk-.webp",
      longText : 'С горы прямо в лицо бьет колючая метель, в спину лупят прожекторы — я стою в ящике, который ратрак тащит по склону австрийского горнолыжного курорта Хохгургль. Где-то внизу остается светлая станция подъемника, по сторонам темнота, удается рассмотреть только новый BMW X4 на постаменте. Это точно презентация нового кроссовера Mercedes-Benz GLE Coupe? Но рядом мерзнут не только коллеги, но и мерседесовские инженеры. Сейчас они за все ответят!'
    },
    {
      nameCar:'E - class',
      carImg:"https://mbbelarus.by/upload/resize_cache/iblock/846/438_274_1/xtt7q517mfuvdprai6kr7skvgidcztl5l.png.pagespeed.ic.sM5yKLalBy.webp",
      longText:'Mercedes-Benz Е-класс (ориг. E-Klasse, ранее нем. Einspritzung — «топливный впрыск») — серия легковых автомобилей бизнес-класса немецкой торговой марки Mercedes-Benz, официально представленная с 1993 года и в настоящее время состоящая из пяти поколений.'
    },
    {
      nameCar:'S - class',
      carImg:"https://mbbelarus.by/upload/resize_cache/iblock/e49/438_274_1/xi3794bgnfgvyeenedro1s7gmfr1tkv80.png.pagespeed.ic.W2PtmxIe41.webp",
      longText:'Mercedes-Benz S-класс (ориг. S-Klasse, от нем. Sonderklasse — «особый класс»[1][2]) — флагманская серия представительских автомобилей немецкой компании Mercedes-Benz, дочернего подразделения концерна Daimler AG. Представляет собой наиболее значимую линейку моделей в иерархии классов торговой марки. Первые представительские седаны появились ещё в начале 1950-х годов, но официально S-класс появился лишь в 1972 году[1]. В настоящее время серия состоит из 7 поколений: W116, представленного в 1972 году и выпускавшегося до 1980 года; W126'
    },
    {
      nameCar:'Gls',
      carImg:'https://mbbelarus.by/upload/resize_cache/iblock/4c7/438_274_1/x8obzbfw94parsec4j199pqmpfo1sq044.png.pagespeed.ic.Kk3cCV_f_b.webp',
      longText:'Mercedes-Benz X167 — это полноразмерный роскошный внедорожник немецкой автомобильной компании Mercedes-Benz, третье поколение GL-Класса/второе поколение GLS-Класса. Пришёл на смену Mercedes-Benz X166. Дебютировал в Нью-Йорке в 2019 году. Производство осуществляется на заводе Mercedes-Benz в городе Таскалуса, Алабама США, а также на заводе Mercedes-Benz в Есипово, МО Россия.'
    },
    {
      nameCar:'C - class',
      carImg:"https://mbbelarus.by/upload/resize_cache/iblock/55e/438_274_1/xmfxpaypi32iye41ucixcdkr6q8j47gzv.png.pagespeed.ic.OSa3PLjHKF.webp",
      longText:'Mercedes-Benz C-класс (ориг. нем. C-Klasse) — серия компактных представительских автомобилей немецкой автомобилестроительной компании Mercedes-Benz, дебютировавшая в 1993 году. Является развитием модели Mercedes-Benz 190[1]. До появления A-класса в 1997 году серия представляла собой наименьшие автомобили как по габаритам, так и по классификации в иерархии марки Mercedes-Benz. C-класс включает в себя четыре поколения: W202, представленный в 1992 году, W203, сошедший с конвейера 18 июля 2000 года, W204, выпускавшегося с 2007 года и W205, дебютировавшего в 2014 году и производящегося до настоящего времени.'
    },
    {
      nameCar:'CLA- class',
      carImg:'https://mbbelarus.by/upload/resize_cache/iblock/ff1/438_274_1/x5lt071nmihyntvvt7aq2j7vay1bvolfq.png.pagespeed.ic.MwFS-D-WQM.webp',
    longText:'Mercedes-Benz CLA-класс (ориг. нем. CLA-Klasse) — серия компактных престижных легковых автомобилей[1] немецкой торговой марки Mercedes-Benz, созданная на платформе компактных моделей A- и B-классов. Премьера состоялась в январе 2013 года на Североамериканском международном автосалоне в Детройте.'},
    {
      nameCar:'G- class',
      carImg:'https://mbbelarus.by/upload/resize_cache/iblock/879/438_274_1/x00qqcwajtc61z3itq1py71zflxyz7i1x.png.pagespeed.ic.vSChQzqLfH.webp',
    longText:'Mercedes-Benz G-класс, иногда именуемый G-Wagen (G — сокр. от нем. Geländewagen — [ɡəˈlɛːndəvaːɡn], «внедорожник»), — серия полноразмерных внедорожников (автомобилей повышенной проходимости), производимых в Австрии фирмой Magna Steyr[1][2] (ранее Steyr-Daimler-Puch[3]) и продаваемых под торговой маркой Mercedes-Benz. Выпускается с 1979 года по настоящее время.'},
    {
      nameCar:'V-class',
      carImg:'https://mbbelarus.by/upload/resize_cache/iblock/498/438_274_1/xafz3817lpendglyygvyod0m6p2oe8px8.png.pagespeed.ic.n7URZbOjdK.webp',
    longText:'Mercedes-Benz Viano (официальное название, начиная со второго поколения — V-класс[1]) — серия минивэнов, основанная на платформе популярного коммерческого панельного фургона Mercedes-Benz Vito[2], но отличающаяся внешним видом и внутренним оснащением. Первое поколение (W638) поступило в продажу в 1996 году[2] и выпускалось до 2003 года. В 2004 году было представлено второе поколение Viano (W639), которое было выделено в отдельный V-класс и производилось до 2014 года.'}

  ]


  constructor(private router: Router) { }


  myEvent($event: MouseEvent){
    this.router.navigate(['/buylog']);
  }

  ngOnInit(): void {
  }

}
