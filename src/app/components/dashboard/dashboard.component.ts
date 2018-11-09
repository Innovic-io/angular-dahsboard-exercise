import { Component } from '@angular/core';
import { CARDITEMS } from '../../mock-data/mock-dashboard-card-items';
import { DOCUMENTITEMS } from '../../mock-data/mock-document-items';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    title = 'Dashboard';
    myDate = Date.now();
    cardItems = CARDITEMS;
    documentItems = DOCUMENTITEMS;

    inlineChart = {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k'],
        datasets: [{
            data: [5400, 9700, 20780, 9090, 60300, 8760, 30800, 5470],
            borderColor: '#5E77FF',
            backgroundColor: 'rgba(94, 119, 255, 0.65)'
        }, {
            data: [3500, 15000, 41100, 5020, 23500, 8090, 49470, 14020],
            borderColor: '#C887EB',
            backgroundColor: '#C887EB'
        },
        ]
    };

    pieChart = {
        datasets: [{
            label: '# of Votes',
            data: [1, 2, 3],
            backgroundColor: [
                'rgba(94, 119, 255, 0.55)',
                'rgba(54, 162, 235, 1)',
                'rgba(94, 119, 255, 0.74)'
            ],
            borderWidth: 1
        }]
    };
}
