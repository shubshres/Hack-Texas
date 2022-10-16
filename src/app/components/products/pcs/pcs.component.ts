import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ProductDetailsComponent } from '../../product-details/product-details.component';

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.scss'],
})
export class PCsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openItem(): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }
}
