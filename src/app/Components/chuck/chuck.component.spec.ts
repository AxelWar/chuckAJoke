import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChuckComponent } from './chuck.component';

import { ChuckService } from './shared/services/chuck.service';
import { Phrase } from './shared/interfaces/phrase';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ChuckComponent', () => {
    let component: ChuckComponent;
    let fixture: ComponentFixture<ChuckComponent>;
    let service: ChuckService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChuckComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [ChuckService],
            imports: [HttpClientModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChuckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = TestBed.inject(ChuckService);
    });

    it('ngOnInit should...', () => {
        const mockResponse: Phrase = {
            icon_url:
                'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'Rwgk9rDUQ_ii4f2fLeFZEg',
            url: 'https://api.chucknorris.io/jokes/Rwgk9rDUQ_ii4f2fLeFZEg',
            value: 'Hugh Jackman is an actor. Wolverine. Chuck Norris is real. Now get roundhoused to your next movie...like a man, Hugh Wackman!',
        };

        // Arrange
        jest.spyOn(service, 'getPhrase').mockReturnValue(of(mockResponse));
        // Act
        component.ngOnInit();
        // Assert
        expect(component.phraseValue).toBe(mockResponse.value);
    });
});
