const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff');
const lamp = document.getElementById ( 'lamp' );

function isLampBroken (){
    return lamp.src.indexOf ( 'broked') > -1
}

function lampOn () {
    if ( !isLampBroken ()) {
       lamp.src = 'lampada on.jpg';
    }   
}

function lampOff (){
    if ( !isLampBroken () ) {
       lamp.src = 'lampada off.jpg';
    }   
}

function lampbroken (){
    lamp.src = 'lampada broked.jpg';
}



turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ('click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampbroken);
