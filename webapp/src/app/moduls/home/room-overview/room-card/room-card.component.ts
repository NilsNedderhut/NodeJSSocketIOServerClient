import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'room-card',
    templateUrl: './room-card.component.html',
    styleUrls: ['./room-card.component.css'],
})
export class RoomCardComponent implements OnInit {
    @Input() room;
    @Input() link;

    constructor(public dataService: DataService) {}

    ngOnInit(): void {}
}
