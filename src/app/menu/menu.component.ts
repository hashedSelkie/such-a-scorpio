import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
 
  openMenu(event: Event){
    document.getElementById("myNav").style.height = "100%";
    
  }

  closeMenu(event: Event){
    document.getElementById("myNav").style.height = "0%";
  }

  toTop(){
    window.scrollTo(0, 0);
  }
  
}





