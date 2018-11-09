import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild
} from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent {

  @ViewChild('pieChart') pieChart: ElementRef;

  @Input() set chartData(data) {
    if (data) {
       const ctx = this.pieChart.nativeElement.getContext('2d');
        // tslint:disable-next-line
       new Chart(ctx, {
           type: 'pie',
           data: data,
           options: {
               responsive: true
           }
       });
  }
  }
}
