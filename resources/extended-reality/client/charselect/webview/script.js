let apiM = import('./api/male.js');
let apiF = import('./api/female.js');

let smenu;
let body;
window.addEventListener('load', function () {
    alt.emit('ready');
    smenu = document.getElementById('smenu');
    body = document.getElementById('body');
});

alt.on('log', (log) => {
    console.log(log);
});

alt.on('body:hidden', () => {
    showBody(false);
});

alt.on('body:show', () => {
    showBody(true);
});

const showBody = function (toggle) {
    if (toggle) {
        document.getElementById('body').classList.remove('unselectable');
    } else {
        document.getElementById('body').classList.add('unselectable');
    }
};

const build = function (id, forname, lastname) {
    return `
    <div id="id${id}" class="component" onclick="selectedchar('${id}')">
    <div class="itemoption">
        <div class="name">
            <p id="name">${forname} ${lastname}</p>
        </div>
    </div>
</div>`;
};

const oneMore = function (remaining, id) {
    return `<div id="id${id}" class="component" onclick="selectedchar('${id}')">
<div class="itemoption">
    <div class="name">
        <p id="name">Charakter Erstellen</p>
        <p id="remaining">${remaining} übrig</p>
    </div>
</div>
</div>`;
};

let componentsGlobal;
let maximal;
alt.on('charselect:start', (components, max) => {
    // console.log(typeof components);
    let id = 0;
    componentsGlobal = components;
    maximal = max;

    components.forEach((char) => {
        char = char._doc;
        console.log(JSON.stringify(char));
        smenu.innerHTML = smenu.innerHTML + build(id, char.forname, char.lastname);
        id++;
    });

    console.log(components.length < max);
    if (components.length < max) {
        let remaining = max - components.length;
        smenu.innerHTML = smenu.innerHTML + oneMore(remaining, 'more');
    }
});

alt.on('charselect:generate:new', (components, max) => {
    let id = 0;
    smenu.innerHTML = '';
    components.forEach((char) => {
        smenu.innerHTML = smenu.innerHTML + build(id, char.forname, char.lastname);
        id++;
    });

    console.log(components.length < max);
    if (components.length < max) {
        let remaining = max - components.length;
        smenu.innerHTML = smenu.innerHTML + oneMore(remaining, 'more');
    }

    showBody(true);
});

let selected;
let prev = undefined;
const selectedchar = function (id) {
    prev = selected;
    selected = id;
    if (prev != undefined) {
        document.getElementById(`id${prev}`).classList.remove('selected');
    }
    //console.log(document.getElementById(`${prev}`));

    //console.log(`typeof id: ${typeof id}`);

    document.getElementById(`id${selected}`).classList.add('selected');
    //this.classList.add('selected');
    alt.emit('charselect:selected', parseInt(id));
};

const finish = function () {
    console.log(selected);

    if (selected == 'more') {
        alt.emit('charedit:start');
        showBody(false);
    } else if (selected != undefined) {
        alt.emit('charselect:finish');
        showBody(false);
    }
};

const reload = function () {
    let id = 0;
    smenu.innerHTML = '';
    componentsGlobal.forEach((char) => {
        smenu.innerHTML = smenu.innerHTML + build(id, char.forname, char.lastname);
        id++;
    });

    console.log(componentsGlobal.length < maximal);
    if (componentsGlobal.length < maximal) {
        let remaining = maximal - componentsGlobal.length;
        smenu.innerHTML = smenu.innerHTML + oneMore(remaining, 'more');
    }
};

alt.on('charselect:reload:completed', (chars) => {
    //
});
