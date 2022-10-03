import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChuckComponent } from "./chuck.component";

@NgModule({
  declarations: [ChuckComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [ChuckComponent]
})
export class ChuckModule {}
