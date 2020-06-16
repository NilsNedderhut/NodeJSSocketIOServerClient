import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'room-summary',
    templateUrl: './room-summary.component.html',
    styleUrls: ['./room-summary.component.css'],
})
export class RoomSummaryComponent implements OnInit {
    @Input() id: string;
    @Input() types: string[];

    displayedColumns = [
        'type',
        'currentValue',
        'average',
        'maximum',
        'minimum',
    ];

    constructor(public dataService: DataService) {}

    ngOnInit(): void {}
}
