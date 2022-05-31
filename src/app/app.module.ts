import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import es from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { TotalPipe } from './total.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { ExchangePipe } from './exchange.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemListService } from './item-list/item-list.service';
import { HttpClientModule } from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemNewComponent } from './item-new/item-new.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailComponentComponent } from './cart/cart-detail-component/cart-detail-component.component';
import { ShippingComponentComponent } from './cart/shipping-component/shipping-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ItemListComponent,
    ExchangePipe,
    ItemComponent,
    ItemDetailComponent,
    ItemNewComponent,
    ItemEditComponent,
    OrderComponent,
    CartComponent,
    CartDetailComponentComponent,
    ShippingComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [{provide:LOCALE_ID,useValue:'es-ES'}, ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
registerLocaleData(es)
