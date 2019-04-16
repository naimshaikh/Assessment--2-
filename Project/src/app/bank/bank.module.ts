import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankRoutingModule } from './bank-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './list/header/header.component';
import { CartComponent } from './list/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * NgModule - This use for all the feature are declared here
 */
@NgModule({
  declarations: [FormComponent, ListComponent, HeaderComponent, CartComponent],
  imports: [
    CommonModule,
    BankRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BankModule { }
