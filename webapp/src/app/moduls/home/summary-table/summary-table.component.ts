import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {

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
