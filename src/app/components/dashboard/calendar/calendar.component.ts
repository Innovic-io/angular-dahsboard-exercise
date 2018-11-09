import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
    viewDate: Date = new Date();
    events: CalendarEvent[] = [];
    clickedDate: Date;
}
