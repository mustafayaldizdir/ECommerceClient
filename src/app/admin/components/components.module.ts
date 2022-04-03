import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    CustomersModule,
    OrdersModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
