import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClipboardModule } from 'ng2-clipboard/ng2-clipboard';
import { CopyToClipboardComponent } from './copy-to-clipboard/copy-to-clipboard.component';
import { PopoverModule } from 'ng2-pop-over';
import { PopoverButtonComponent } from './copy-to-clipboard/popover-button/popover-button.component';
import { ButtonCheckbox } from './button-checkbox.directive';

@NgModule({
  declarations: [
    AppComponent,
    CopyToClipboardComponent,
    PopoverButtonComponent,
    ButtonCheckbox
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
