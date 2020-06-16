import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomOverviewComponent } from './room-overview/room-overview.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
    {
        path: 'room/:id',
        component: RoomComponent,
    },
    {
        path: '',
        component: RoomOverviewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
