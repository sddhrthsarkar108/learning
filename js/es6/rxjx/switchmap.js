var rx = require('rxjs/Rx');

var obs1$ = rx.Observable.interval(1000);

//obs1.subscribe(value => console.log(value));
obs1$
.map(value => value * 2)
.subscribe(value => console.log(value));