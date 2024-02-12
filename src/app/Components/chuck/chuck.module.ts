import { NgModule } from '@angular/core';
import { ChuckComponent } from './chuck.component';
import { ChuckService } from './shared/services/chuck.service';
import { ChuckRoutingModule } from './chuck-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [ChuckComponent],
    imports: [ChuckRoutingModule, MatProgressSpinnerModule],
    providers: [ChuckService],
    exports: [ChuckComponent],
})
export class ChuckModule {}
