import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank.model';
import { BankService } from '../bank.service';
/**
 * Component - This component use for decorate the class
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * bank list of Bank
   */
  public bankList: Bank[];

  /** Take veriable for ConvertValue */
  public convertValue: number;

  /** Take veriable for Total Amount */
  public totalAmount: number;

  /**
   * Inject the service
   * @param service - for bank service
   */
  constructor(private bankservice: BankService) { }

  public ngOnInit(): void {
    this.getData();
  }
  /**
   * Get all the bank data 
   */
  public getData(): void {
    this.bankservice.getAllRecord().subscribe((data: Bank[]) => {
      this.bankList = data;
      this.converter(this.bankList);
    })
  }
  /**
   * Converter method use for convet curreuncy and dispaly total amount
   */
  public converter(bank: Bank[]): void {
    bank.forEach(data => {
      this.bankservice.getApiData(data.baseCurrency, data.targetCurrency).subscribe((value: number) => {
        this.convertValue = value[data.targetCurrency + '_' + data.baseCurrency];
        this.totalAmount = data.amount * this.convertValue;
        data.rate = this.convertValue;
        data.total = this.totalAmount;
      })
    })
  }
}




