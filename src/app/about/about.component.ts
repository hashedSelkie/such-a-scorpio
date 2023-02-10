import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  over() {
    document.getElementById("inverted").style.display = "block";
    document.getElementById("normal").style.display = "none";
  }
  out() {
    document.getElementById("inverted").style.display = "none";
    document.getElementById("normal").style.display = "block";
  }
}
