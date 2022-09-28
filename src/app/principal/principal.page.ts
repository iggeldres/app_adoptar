import { Component} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {
  isModalOpena = false;

  setOpena(isOpen: boolean) {
    this.isModalOpena = isOpen;
  }



}
