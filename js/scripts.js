// Mobile Menu
document.getElementById('hamburguer-icon').addEventListener('click', function() {
    document.getElementById('sliding-header-menu-outer').style.right = "0";
});

document.querySelector('.close-icon').addEventListener('click', function() {
    document.getElementById('sliding-header-menu-outer').style.right = "-320px";
});


// About us Tab

var aboutUs = {
    "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
    "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
    "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

let mission = document.getElementById('mission');
let vision = document.getElementById('vision');
let values = document.getElementById('values');
let boxText = document.getElementById('box-text');

mission.addEventListener('click', function() {
    mission.style.backgroundColor = seletectedColor;
    mission.style.fontWeight = 'bold';
    boxText.innerHTML = aboutUs['Mission'];

    vision.style.backgroundColor = unseletectedColor;
    vision.style.fontWeight = 'normal';

    values.style.backgroundColor = unseletectedColor;
    values.style.fontWeight = 'normal';
});

vision.addEventListener('click', function() {
    vision.style.backgroundColor = seletectedColor;
    vision.style.fontWeight = 'bold';
    boxText.innerHTML = aboutUs['Vision'];

    mission.style.backgroundColor = unseletectedColor;
    mission.style.fontWeight = 'normal';

    values.style.backgroundColor = unseletectedColor;
    values.style.fontWeight = 'normal';
});

values.addEventListener('click', function() {
    values.style.backgroundColor = seletectedColor;
    values.style.fontWeight = 'bold';
    boxText.innerHTML = aboutUs['Values'];

    mission.style.backgroundColor = unseletectedColor;
    mission.style.fontWeight = 'normal';

    vision.style.backgroundColor = unseletectedColor;
    vision.style.fontWeight = 'normal';
});

// Service slider

var ourServices = [{
        'title': 'Web design',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },

    {
        'title': 'Branding',
        'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },

    {
        'title': 'Digital Marketing',
        'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
    }

];

let previousArrow = document.getElementById('service-previous');
let nextArrow = document.getElementById('service-next');

let currentService = 0;

nextArrow.addEventListener('click', function() {
    if (currentService === ourServices.length - 1) {
        currentService = 0;
    } else {
        currentService += 1;
    }

    let title = ourServices[currentService].title;
    let text = ourServices[currentService].text;

    $('#service-title').html(title);
    $('#service-text').html(text);
});

previousArrow.addEventListener('click', function() {
    if (currentService === 0) {
        currentService = ourServices.length - 1;
    } else {
        currentService -= 1;
    }

    let title = ourServices[currentService].title;
    let text = ourServices[currentService].text;

    $('#service-title').html(title);
    $('#service-text').html(text);
});

// Footer
let currDate = new Date();
document.getElementById('current_year').innerHTML = currDate.getFullYear();