import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'room-overview',
    templateUrl: './room-overview.component.html',
    styleUrls: ['./room-overview.component.css'],
})
export class RoomOverviewComponent implements OnInit {
    constructor(public dataService: DataService) {}

    ngOnInit(): void {}

    getRoomRoute(id: string): string {
        return `room/${id}`;
    }
}
