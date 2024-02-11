import { NgModule } from '@angular/core';
import { ChuckComponent } from './chuck.component';
import { ChuckService } from './shared/services/chuck.service';
import { ChuckRoutingModule } from './chuck-routing.module';

@NgModule({
    declarations: [ChuckComponent],
    imports: [ChuckRoutingModule],
    providers: [ChuckService],
    exports: [ChuckComponent],
})
export class ChuckModule {}
