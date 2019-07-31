import { NgModule } from '@angular/core';
import { DcdUiAngularComponent } from './dcd-ui-angular.component';
// import { DoubleAxisChartComponent } from './double-axis-chart/double-axis-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';


//PrimeNG
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';

// Ng2 charts
import { ChartsModule } from 'ng2-charts';

// ngx charts
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DcdUiAngularComponent, /*DoubleAxisChartComponent,*/ LineChartComponent, RadarChartComponent],
  imports: [
    NgxChartsModule,
    NgbModule,
    ChartsModule,
    CalendarModule,
    SliderModule
  ],
  exports: [DcdUiAngularComponent]
})
export class DcdUiAngularModule { }
