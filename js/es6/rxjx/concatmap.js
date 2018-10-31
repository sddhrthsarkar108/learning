var rx = require('rxjs/Rx');

var obs1$ = rx.Observable.of(4, 5, 6);
var obs2$ = rx.Observable.of(1, 2, 3);

obs1$.concatMap(value => rx.Observable.of(value*2)).subscribe(value => console.log(value));