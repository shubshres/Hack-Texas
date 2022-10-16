import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  btnStyle = 'filter-button';

  pcClick = 'filter-button';
  gpuClick = 'filter-button';
  monitorClick = 'filter-button';
  cpuClick = 'filter-button';
  ramClick = 'filter-button';
  powerSupplyClick = 'filter-button';
  storageClick = 'filter-button';
  showClick = 'filter-button';
  phonesClick = 'filter-button';
  tabletsClick = 'filter-button';
  keyboardsClick = 'filter-button';
  miceClick = 'filter-button';

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.router.url.includes('shop/pcs')) {
      this.pcClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/gpus')) {
      this.gpuClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/monitors')) {
      this.monitorClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/cpus')) {
      this.cpuClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/ram')) {
      this.ramClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/power-supplies')) {
      this.powerSupplyClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/storage')) {
      this.storageClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/phones')) {
      this.phonesClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/tablets')) {
      this.tabletsClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/keyboards')) {
      this.keyboardsClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/mice')) {
      this.miceClick = 'filter-button-clicked';
    } else if (this.router.url.includes('shop/mice')) {
      this.miceClick = 'filter-button-clicked';
    } else {
    }
  }

  showPCs() {
    this.router.navigateByUrl('shop/pcs');
  }

  showGPUs() {
    this.router.navigateByUrl('shop/gpus');
  }

  showMonitors() {
    this.router.navigateByUrl('shop/monitors');
  }

  showCPUs() {
    this.router.navigateByUrl('shop/cpus');
  }

  showRAM() {
    this.router.navigateByUrl('shop/ram');
  }

  showPowerSupplies() {
    this.router.navigateByUrl('shop/power-supplies');
  }

  showStorage() {
    this.router.navigateByUrl('shop/storage');
  }

  showPhones() {
    this.router.navigateByUrl('shop/phones');
  }

  showTablets() {
    this.router.navigateByUrl('shop/tablets');
  }

  showKeyboards() {
    this.router.navigateByUrl('shop/keyboards');
  }

  showMice() {
    this.router.navigateByUrl('shop/mice');
  }

  openItem(): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '50%',
      maxHeight: '50%',
      panelClass: 'dialog-container-custom',
      autoFocus: false,
    });
  }
}
