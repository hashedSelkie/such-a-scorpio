import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
 
  openMenu(event: Event){
    document.getElementById("myNav").style.height = "100%";
    document.body.style.overflow = "hidden";
  }

  closeMenu(event: Event){
    document.getElementById("myNav").style.height = "0%";
    function denyScroll(){
      document.body.style.overflow = "visible";
    }
    setTimeout(denyScroll, 500);
    window.scrollTo(0, 0);
  }

}



