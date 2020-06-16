import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'scatter-plot',
    templateUrl: './scatter-plot.component.html',
    styleUrls: ['./scatter-plot.component.css'],
})
export class ScatterPlotComponent implements OnInit, OnChanges {
    @Input() data: number[];
    @Input() title: string;

    public isHovered = false;

    public graph = {
        data: [
            {
                y: [],
                type: 'scatter',
                mode: 'lines',
            },
        ],
        layout: {
            yaxis: {
                rangemode: 'tozero',
            },
        },
    };

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.initGraph();
    }

    ngOnInit(): void {
        this.initGraph();
    }

    initGraph(): void {
        this.graph.data[0].y = this.data;
    }

    changeHoveredState() {
        this.isHovered = !this.isHovered;
    }
}
