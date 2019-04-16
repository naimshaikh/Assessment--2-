import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../../bank.model';
/**
 * Component - This component use for decorate the class
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  /** Input contentData used for display bank data in table */
  @Input() public contentData: Bank;
  constructor() { }
}
