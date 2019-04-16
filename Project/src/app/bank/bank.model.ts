/**
 * This calss use for store all the element
 */
export class Bank {
    /**
     * Id  of bank is uniq identify
     */
    public id: number;
    /**
     * BankName of bank
     */
    public bankName: string;
    /**
     * BaseCurrency of bank
     */
    public baseCurrency: string;
    /**
     * Ammount  of bank
     */
    public amount: number;
    /**
     * TargetCurrency of bank
     */
    public targetCurrency: string;

    /**
     *  current rate of bank
     */
    public rate: number

    /**
     * Total value of bank
     */
    public total: number;

}
