import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue: number = 0
  
  plusOne(): void {
    this.counterValue = this.counterValue +1
  }

  minusOne(): void {
    this.counterValue = this.counterValue -1
  }
}
