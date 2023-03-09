import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges{
  @Input() teste: boolean = false;

  constructor() {
  }
  ngOnChanges(): void {
    if(this.teste) {
      this.teste = false;
    }
  }


}
