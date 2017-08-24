require('../styles/styles.scss');


//import Example from './components/example/example-component';


let state = 0;
let states = ['national', 'regional', 'local']
let map




function init() {

    map = document.getElementById('kv-2017-map');
    document.body.classList.add('kv-2017-map-zoom-' + states[state]);

    document.addEventListener('click', () => {
        document.body.classList.remove('kv-2017-map-zoom-' + states[state]);
        state = (state === states.length-1) ? 0 : state+1;
        document.body.classList.add('kv-2017-map-zoom-' + states[state]);
    });


}



document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});

