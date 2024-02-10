import { NgModule } from "@angular/core";
import { ChuckComponent } from "./chuck.component";
import { ChuckService } from "./shared/services/chuck.service";

@NgModule({
  declarations: [ChuckComponent],
  imports: [],
  providers: [ChuckService],
  exports: [ChuckComponent]
})
export class ChuckModule {}
