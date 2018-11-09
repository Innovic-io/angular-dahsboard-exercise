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
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent {

  @ViewChild('lineChart') lineChart: ElementRef;

  @Input() set chartData(data) {
    if (data) {
        const ctx = this.lineChart.nativeElement.getContext('2d');
        // tslint:disable-next-line
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                legend: {display: false}
            }
        });
    }
  }
}
