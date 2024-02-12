import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AboutMeComponent } from './about-me/about-me.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AboutMeComponent],
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
    providers: [],
    exports: [AboutMeComponent],
})
export class SharedModule {}
