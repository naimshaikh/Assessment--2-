import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from './bank.model';
import { Observable } from 'rxjs/';
/**
 * Injectable are usefor inject the service 
 */
@Injectable({
  providedIn: 'root'
})
export class BankService {

  /**
   * bankUrl url of bank service
   */
  public bankUrl: string = 'http://localhost:3000/Bank';

  /**
   * Currency converter url1 of bank service
   */
  public currencyConverterUrl1: string = 'https://free.currencyconverterapi.com/api/v6/convert?q='
  /**
   * Currency converter url2 of bank service
   */
  public currencyConverterUrl2: string = '&compact=ultra&apiKey=7e81c9d0a2533b8c36df';


  /**
   *  Inject http Client service.
   */
  constructor(private http: HttpClient) { }

  /**
   * getAllRecord Method are get all bank details from the server
   */
  public getAllRecord(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.bankUrl);
  }

  /**
   * GetApiData for convert currency
   * @param basecurrency for base currency
   * @param targetcurrency  for target currency
   */
  public getApiData(basecurrency: string, targetcurrency: string): Observable<number> {
    console.log(this.currencyConverterUrl1 + targetcurrency + '_' + basecurrency + this.currencyConverterUrl2);
    return this.http.get<number>(this.currencyConverterUrl1 + targetcurrency + '_' + basecurrency + this.currencyConverterUrl2);
  }

  /**
   * createData use for create new data 
   */
  public createData(newData: Bank): Observable<Bank> {
    return this.http.post<Bank>(this.bankUrl, newData)
  }
}


