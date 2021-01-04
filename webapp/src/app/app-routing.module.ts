import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./moduls/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
