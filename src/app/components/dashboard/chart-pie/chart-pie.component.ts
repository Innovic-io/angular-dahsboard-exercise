import { AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter
} from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements AfterViewInit {

  @Output() usePieChart = new EventEmitter<ElementRef>();
  @ViewChild('pieChart') pieChart: ElementRef;

  ngAfterViewInit() {
    this.usePieChart.emit(this.pieChart);
  }
}
