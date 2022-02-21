import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router";




@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})

export class ModelComponent implements OnInit {
  cars = [
    {
      nameCar:'Gle Coupe',
      carImg: "https://mbbelarus.by/upload/resize_cache/iblock/7bc/438_274_1/x3xfjug02e5db47o4h9ieb73fy9fui7g1.png.pagespeed.ic.RngUCd8Wk-.webp"
    },
    {
      nameCar:'E - class',
      carImg: "https://mbbelarus.by/upload/resize_cache/iblock/846/438_274_1/xtt7q517mfuvdprai6kr7skvgidcztl5l.png.pagespeed.ic.sM5yKLalBy.webp"
    },
    {
      nameCar:'S - class',
      carImg: "https://mbbelarus.by/upload/resize_cache/iblock/e49/438_274_1/xi3794bgnfgvyeenedro1s7gmfr1tkv80.png.pagespeed.ic.W2PtmxIe41.webp"
    },
    {
      nameCar: 'Gls',
      carImg:'https://mbbelarus.by/upload/resize_cache/iblock/4c7/438_274_1/x8obzbfw94parsec4j199pqmpfo1sq044.png.pagespeed.ic.Kk3cCV_f_b.webp'
    },
    {
      nameCar: 'C - class',
      carImg: "https://mbbelarus.by/upload/resize_cache/iblock/55e/438_274_1/xmfxpaypi32iye41ucixcdkr6q8j47gzv.png.pagespeed.ic.OSa3PLjHKF.webp"
    },
    {
      nameCar: 'CLA- class',
      carImg: 'https://mbbelarus.by/upload/resize_cache/iblock/ff1/438_274_1/x5lt071nmihyntvvt7aq2j7vay1bvolfq.png.pagespeed.ic.MwFS-D-WQM.webp'
    },
    {
      nameCar: 'G- class',
      carImg: 'https://mbbelarus.by/upload/resize_cache/iblock/879/438_274_1/x00qqcwajtc61z3itq1py71zflxyz7i1x.png.pagespeed.ic.vSChQzqLfH.webp'
    },
    {
    nameCar: 'V-class',
      carImg: 'https://mbbelarus.by/upload/resize_cache/iblock/498/438_274_1/xafz3817lpendglyygvyod0m6p2oe8px8.png.pagespeed.ic.n7URZbOjdK.webp'
    }

  ]

  constructor(private router: Router) { }


  myEvent($event: MouseEvent){
    this.router.navigate(['/buylog']);
  }

  ngOnInit(): void {
  }

}
