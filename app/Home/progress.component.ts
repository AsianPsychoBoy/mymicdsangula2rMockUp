import {Component} from '@angular/core'
import {DomData} from '../mockdata.service'

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");
    return d;       
}

    @Component ({
        selector: 'my-progress',
        templateUrl: '../templates/mainContent/progress2.html',
        styleUrls: ['../css/mainContent/progress2.css'],
        providers: [DomData]
    })

    export class MyProgress {
        public percentage: number;
        public constructor(private _DomService: DomData) {
            this.percentage = _DomService.getProgress().overall_percentage;
            console.log(describeArc(400, 400, 340, 0, 360/100*this.percentage));
        };
        public describeArc=describeArc;
    }
