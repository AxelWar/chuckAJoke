import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChuckService } from './shared/services/chuck.service';
import { Phrase } from './shared/interfaces/phrase';

@Component({
    selector: 'app-chuck',
    templateUrl: './chuck.component.html',
    styleUrls: ['./chuck.component.scss'],
})
export class ChuckComponent implements OnInit, OnDestroy {
    phraseValue!: string;
    loading = true;
    subscriptions = new Subscription();
    constructor(private chuckService: ChuckService) {}

    ngOnInit(): void {
        this.getPhrase();
    }

    getPhrase(): void {
        this.subscriptions.add(
            this.chuckService.getPhrase().subscribe((data: Phrase) => {
                this.phraseValue = data.value;
                this.loading = false;
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
