const idspeed = document.getElementById("speed");
const idgear = document.getElementById("gear");
const idrpm = document.getElementById("rpm");

alt.on('showSpeedo', (toggle) => {
    let speedo = document.getElementById('speedo');
    if (toggle == true) { // showSpeedo
        alt.emit('speedoLoaded');
        speedo.style.visibility = "visible";
    }
    if (toggle == false) {
        alt.emit('speedoUnloaded');
        speedo.style.visibility = "hidden";
    }
});

//mit jedem Tick wird das Speedometer neu gezeichnet.

alt.on('drawSpeedo', (speed, gang, rpm) => {

    //Fahrer hat keinen Gang drin

    if (speed == 0 && gang == 0) {
        showgear = "0";
    }

    //Fahrer fährt rückwerts

    if (speed != 0 && gang == 0) {
        showgear = "R";
    }

    //Fahrer fährt normal

    else {
        showgear = gang
    }



    showSpeed = Math.floor(speed);
    showrpm = Math.abs(((rpm * 100) - 100));


    //test.innerHTML = rpm;
    idspeed.innerHTML = (showSpeed);
    idgear.innerHTML = showgear;
    idrpm.style.height = `${parseInt(showrpm)}%`;
});

/*document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');

if ( document.getElementById("MyElement").classList.contains('MyClass') )

document.getElementById("MyElement").classList.toggle('MyClass');*/