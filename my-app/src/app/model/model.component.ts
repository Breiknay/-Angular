import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']

})


export class ModelComponent implements OnInit {
  nameCarGle = 'Gle Coupe'
  carImgGle = "https://mbbelarus.by/upload/resize_cache/iblock/7bc/438_274_1/x3xfjug02e5db47o4h9ieb73fy9fui7g1.png.pagespeed.ic.RngUCd8Wk-.webp"

  nameCarE = 'E - class'
  carImgE = "https://mbbelarus.by/upload/resize_cache/iblock/846/438_274_1/xtt7q517mfuvdprai6kr7skvgidcztl5l.png.pagespeed.ic.sM5yKLalBy.webp"
  nameCarS = 'S - class'
  carImgS = "https://mbbelarus.by/upload/resize_cache/iblock/e49/438_274_1/xi3794bgnfgvyeenedro1s7gmfr1tkv80.png.pagespeed.ic.W2PtmxIe41.webp"

  nameCarGls = 'Gls'
  carImgGls = 'https://mbbelarus.by/upload/resize_cache/iblock/4c7/438_274_1/x8obzbfw94parsec4j199pqmpfo1sq044.png.pagespeed.ic.Kk3cCV_f_b.webp'

  nameCarC = 'C - class'
  carImgC = "https://mbbelarus.by/upload/resize_cache/iblock/55e/438_274_1/xmfxpaypi32iye41ucixcdkr6q8j47gzv.png.pagespeed.ic.OSa3PLjHKF.webp"
  nameCarCla = 'CLA- class'
  carImgCla = 'https://mbbelarus.by/upload/resize_cache/iblock/ff1/438_274_1/x5lt071nmihyntvvt7aq2j7vay1bvolfq.png.pagespeed.ic.MwFS-D-WQM.webp'

  nameCarG = 'G- class'
  carImgG = 'https://mbbelarus.by/upload/resize_cache/iblock/879/438_274_1/x00qqcwajtc61z3itq1py71zflxyz7i1x.png.pagespeed.ic.vSChQzqLfH.webp'

  nameCarV = 'V-class'
  carImgV = 'https://mbbelarus.by/upload/resize_cache/iblock/498/438_274_1/xafz3817lpendglyygvyod0m6p2oe8px8.png.pagespeed.ic.n7URZbOjdK.webp'

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private router: Router) {
  }


  myEvent($event: MouseEvent) {
    this.router.navigate(['/buylog']);
  }

  ngOnInit(): void {
  }

}
