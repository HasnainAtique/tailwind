import { Routes } from '@angular/router';
import { PracticeComponent } from '../components/practice/practice.component';
import { Template1Component } from '../components/template1/template1.component';
import { Temp2Component } from '../components/temp2/temp2.component';

export const routes: Routes = [
    {
        path: 'practice',
        component: PracticeComponent
    },
    {
        path: 'temp1',
        component: Template1Component
    },
    {
        path: 'temp2',
        component: Temp2Component
    },
];
