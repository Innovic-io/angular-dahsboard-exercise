import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements AfterViewInit {

  @Output() useLineChart = new EventEmitter<ElementRef>();

  @ViewChild('lineChart') lineChart: ElementRef;

  ngAfterViewInit() {

    this.useLineChart.emit(this.lineChart);
  }
}
