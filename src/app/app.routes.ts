import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Gta3 } from '../gta3/gta3';
import { Gtavicecity } from '../gtavicecity/gtavicecity';
import { Gtasanandreas } from '../gtasanandreas/gtasanandreas';
import { Gtalcs } from '../gtalcs/gtalcs';
import { Gtavcs } from '../gtavcs/gtavcs';
import { Gtaiv } from '../gtaiv/gtaiv';
import { Gtav } from '../gtav/gtav';
import { Learnmore } from '../learnmore/learnmore';
import { Gtavi } from '../gtavi/gtavi';
import { Gtaadvance } from '../gtaadvance/gtaadvance';
import { Gtachinatownwars } from '../gtachinatownwars/gtachinatownwars';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'gta3', component: Gta3 },
    { path: 'gtavicecity', component: Gtavicecity},
    { path: 'gtasanandreas', component: Gtasanandreas},
    { path: 'gtaadvance', component: Gtaadvance },
    { path: 'gtalibertycitystories', component:  Gtalcs},
    { path: 'gtavicecitystories', component:  Gtavcs},
    { path: 'gtaiv', component: Gtaiv},
    { path: 'gtachinatownwars', component: Gtachinatownwars },
    { path: 'gtav', component:  Gtav},
    { path: 'gtavi', component: Gtavi },
    { path: 'learnmore', component: Learnmore }
];
