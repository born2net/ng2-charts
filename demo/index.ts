import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {MyChart} from "./components/MyChart";

@Component({
    selector: 'app',
    template: `
        <my-chart></my-chart>
        `,
    directives: [
        NgClass,
        MyChart
    ]
})
export class Demo {
    constructor() {
    }
}

bootstrap(Demo);
