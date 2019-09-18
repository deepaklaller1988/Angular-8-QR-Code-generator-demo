import { Component } from '@angular/core';
import {GeneralService} from './general.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  qrcodename : string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href : string;
  

constructor(private service : GeneralService){}



generateQRCode(){
  if(this.qrcodename == ''){
    this.display = false;
    alert("Please enter the name");
    return;
  }
  else{
    this.value = this.qrcodename;
    this.display = true;
  }
}

downloadImage(){
this.href = document.getElementsByTagName('img')[0].src;
}




}
