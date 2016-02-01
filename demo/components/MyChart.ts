import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

import {CHART_DIRECTIVES} from '../../ng2-charts';


@Component({
    selector: 'my-chart',
    template: `
    <base-chart class="chart"
           [data]="barChartData"
           [labels]="barChartLabels"
           [options]="barChartOptions"
           [series]="barChartSeries"
           [legend]="barChartLegend"
           [series]="barChartSeries"
           [chartType]="barChartType"
           (chartHover)="chartHovered($event)"
           (chartClick)="chartClicked($event)"></base-chart>
    `,
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class MyChart {

    constructor() {
        console.log('bar demo');
    }

    private barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
    };
    private barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    private barChartSeries = ['Series A', 'Series B'];
    public barChartType = 'Bar';
    private barChartLegend:boolean = true;

    private barChartData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    // events
    chartClicked(e:any) {
        console.log(e);
    }
    chartHovered(e:any) {
        console.log(e);
    }

}