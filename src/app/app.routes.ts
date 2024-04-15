import { Routes } from '@angular/router';
import { PracticeComponent } from '../components/practice/practice.component';
import { Template1Component } from '../components/template1/template1.component';

export const routes: Routes = [
    {
        path: 'practice',
        component: PracticeComponent
    },
    {
        path: 'temp1',
        component: Template1Component
    },
];
