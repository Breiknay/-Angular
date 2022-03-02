import {OnInit} from '@angular/core';
import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { ApiService } from "../api.service";




@Component({
  selector: 'app-model-in-stock',
  templateUrl: './model-in-stock.component.html',
  styleUrls: ['./model-in-stock.component.css']
})




export class ModelInStockComponent implements OnInit {
   Items: any;



  constructor(private apiService: ApiService) {

  }




  ngOnInit() {
    this.apiService.getImage().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);

    });
  }
}

