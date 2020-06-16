import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { RoomOverviewComponent } from './room-overview/room-overview.component';
import { CoreModule } from 'src/app/core/core.module';
import { RoomComponent } from './room/room.component';
import { RoomSummaryComponent } from './room/room-summary/room-summary.component';
import { RoomCardComponent } from './room-overview/room-card/room-card.component';
import { MyMatCardComponent } from './my-mat-card/my-mat-card.component';
import { ScatterPlotComponent } from './room/scatter-plot/scatter-plot.component';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { HomeComponent } from './home.component';
import { Round2Pipe } from './round2.pipe';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
    declarations: [
        RoomOverviewComponent,
        RoomComponent,
        RoomSummaryComponent,
        RoomCardComponent,
        MyMatCardComponent,
        ScatterPlotComponent,
        Round2Pipe,
    ],
    imports: [CommonModule, AppRoutingModule, CoreModule, PlotlyModule],
    bootstrap: [HomeComponent],
})
export class HomeModule {}
