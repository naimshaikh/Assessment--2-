import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';
import { Bank } from '../bank.model';
/**
 * Component - This component use for decorate the class
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  /** bankForm use for Formgroup  */
  public bankForm: FormGroup;


  /**
   * Country code of all bank
   */
  public countryCode: string[] = ['INR', 'AUD', 'CZK', 'DKK', 'EUR',
                                  'JPY', 'MXN', 'NZD', 'TRY', 'USD'];

  /**
   * Inject the service
   * @param service - for bank service
   * @param fb - for usnig form builder in reactive forms
   */
  constructor(private fb: FormBuilder, private bankService: BankService) {
  }

  
  public ngOnInit(): void {
    this.bankForm = this.fb.group({
      id: [],
      bankName: ['', Validators.required],
      baseCurrency: ['', Validators.required],
      amount: ['', Validators.required],
      targetCurrency: ['', Validators.required]
    });
  }
  /**
   * addData method craete new record
   */
  public addData(): void {
    const bankData: Bank = this.bankForm.value;
    this.bankService.createData(bankData).subscribe();
    this.bankForm.reset();
  }
}
