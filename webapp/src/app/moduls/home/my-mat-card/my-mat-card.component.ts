import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-mat-card',
    templateUrl: './my-mat-card.component.html',
    styleUrls: ['./my-mat-card.component.css'],
})
export class MyMatCardComponent implements OnInit {
    @Input() title;
    @Input() link;
    public isHovered: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    changeHoveredState(value: boolean): void {
        this.isHovered = value;
    }
}
