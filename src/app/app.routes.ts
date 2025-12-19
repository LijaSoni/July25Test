import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TestComponent } from './test/test.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [   
    {path:'',component:ExampleComponent},
     {path:'tst',component:TestComponent},
      {path:'stud',component:StudentComponent}
];
