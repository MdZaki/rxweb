import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from "src/app/components/page/page.component";
const GRID_ROUTES: Routes = [
{
	path:':typeName',
	component:PageComponent
}

];
export const GRID_ROUTING: ModuleWithProviders = RouterModule.forChild(GRID_ROUTES);