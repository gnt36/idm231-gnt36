console.log('hello does this work?');

const instr = document.getElementById('helpInstructions');

const btn = document.querySelector('#xbutton');

const myNewDiv = document.getElementById('newPart');
const gods = document.querySelectorAll('div.gods');

const newBtn = document.querySelector('#xbtn');

function hideInstr() {   
   if (instr) {
        instr.style.display = 'none';
    }
}

hideInstr();

function visibility() {
    if (!instr) {
        instr.style.display = 'none';
    } else {
        instr.style.display = 'block';
    }
}

function init() {
    const questionMark = document.querySelector('#help');

    if (instr) {
        questionMark.addEventListener('click', visibility, false);
    } 
}

init();

function closeBtn() {
    if (btn) {
        btn.addEventListener('click', hideInstr, false);
    }
}

closeBtn();

const signs = [
    {
        name: 'Aries - Ares',
        image: "./media/otherpics/aries.jpg",
        sound: "./media/sounds/ares.mp3",
        description: 'Ares, the dynamic god of war, embodies the spirit of this bold and passionate zodiac sign. If you happen to be an Aries, chances are you resonate with the formidable characteristics of this mighty god. Those born under the Aries constellation are driven by a relentless pursuit of power, fueled by ambition, and guided by unwavering courage.'
    },
    {
        name: 'Taurus - Hestia',
        image: "./media/otherpics/taurus.jpg",
        sound: "./media/sounds/Hestia.mp3",
        description: 'Taurus, in celestial harmony with the Greek goddess Hestia, manifests in individuals who yearn for practicality, peace, unyielding stability, and luxurious comfort. Hestia, the embodiment of a humble guardian of homes, stands as the ideal goddess to symbolize Taurus and its desire for a harmonious and cozy existence.'
    },
    {
        name: 'Gemini - Athena',
        image: "./media/otherpics/gemini.jpg",
        sound: "./media/sounds/Athena.mp3",
        description: 'Gemini\'s constellation and zodiac affiliation boast deep ties to Greek mythology. If you\'re a Gemini, your celestial kinship extends to Athena, the wise Goddess of Military Victory. Additionally, a profound connection to the mythical twins Castor and Pollux is felt, mirroring the names of the constellation\'s brightest stars. Geminis embody adaptability, communicative prowess, and resourcefulness as their defining traits.'
    },
    {
        name: 'Cancer - Artemis',
        image: "./media/otherpics/cancer.jpg",
        sound: "./media/sounds/Artemis.mp3",
        description: 'Artemis, the Greek goddess reigning over Cancer, is occasionally referred to as the Moon Goddess. Signifying the compassionate and nurturing essence of this zodiac sign, Artemis possesses mystical abilities in healing and immortality. Those born under the Cancer sign inherently bear the protective virtues of Artemis, carrying her watchful influence wherever their paths may lead.'
    },
    {
        name: 'Leo - Zeus',
        image: "./media/otherpics/leo.jpg",
        sound: "./media/sounds/zeus.mp3",
        description: 'Zeus, the mighty ruler of Mount Olympus and King of Gods in Greek mythology, stands as a formidable figure. For those under the Leo sign, the challenge lies in navigating the delicate equilibrium between aspirations and impulses. Similar to Zeus, individuals born under this sign are propelled by the relentless pursuit of success, an abundance of energy, and an innate thirst for power.'
    },
    {
        name: 'Virgo - Demeter',
        image: "./media/otherpics/virgo.jpg",
        sound: "./media/sounds/demeter.mp3",
        description: 'Demeter, the goddess of the Earth and guardian of abundant harvests, perfectly encapsulates the nurturing and gentle essence of Virgo. Virgos, much like Demeter, navigate life with a compass of sensitivity, empathy, and a profound ability to nurture.'
    },
    {
        name: 'Libra - Aphrodite',
        image: "./media/otherpics/libra.jpg",
        sound: "./media/sounds/aphrodite.mp3",
        description: 'For those under the Libra sign, a celestial connection aligns with the captivating Greek goddess Aphrodite. This alluring Goddess of Love shares a plethora of traits with the Libra zodiac, as both Aphrodite and Librans exude charisma, passion, and adept communication skills.'
    },
    {
        name: 'Scorpio - Hades',
        image: "./media/otherpics/scorpio.jpg",
        sound: "./media/sounds/hades.mp3",
        description: 'Hades, the enigmatic God of the Underworld, mirrors the mysterious forces embodied by Scorpios. This zodiac sign is frequently linked with traits of secrecy, boldness, and passion. If you happen to be a Scorpio, embracing your alignment with such a distinctively powerful figure like Hades should evoke a sense of pride.'
    },
    {
        name: 'Sagittarius - Dionysus',
        image: "./media/otherpics/sagittarius.jpg",
        sound: "./media/sounds/dionysus.mp3",
        description: 'Dionysus, the lively God of Wine, serves as an ideal representation for the spirited Sagittarius. Those under this zodiac sign are known for their passion, adaptability, enthusiasm, and love for entertainment. If you identify as a Sagittarius, you might sense a spiritual bond with the wild and spontaneous Dionysus.'
    },
    {
        name: 'Capricorn - Apollo',
        image: "./media/otherpics/capricorn.jpg",
        sound: "./media/sounds/apollo.mp3",
        description: 'Capricorns share a cosmic connection with Apollo, the Greek god reigning over the sun and wielding supernatural healing powers. Anchored by a strong inclination towards safety and security, this zodiac sign mirrors Apollo\'s qualities of ambition, intelligence, and practicality.'
    },
    {
        name: 'Aquarius - Prometheus',
        image: "./media/otherpics/aquarius.jpg",
        sound: "./media/sounds/prometheus.mp3",
        description: 'Those born under the sign of Aquarius find themselves cosmically connected to Prometheus, the God of Creation and Forethought. This alignment bestows upon your skills tied to communication and teamwork. Additionally, the Aquarius constellation is linked to Ganymede, the mythical son of King Tros.'
    },
    {
        name: 'Pisces - Ishtar',
        image: "./media/otherpics/pisces.jpg",
        sound: "./media/sounds/Ishtar.mp3",
        description: 'Ishtar, a multifaceted figure in Greek mythology, harmonizes with Pisces by embodying fertility, emotion, and passion. Those born under this zodiac sign find themselves deeply swayed by their moods and inner desires.'
    },
];

function getSign(month, day) {
    console.log('test');
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        capricorn();
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sagittarius();
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        scorpio();
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        libra();
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        virgo();
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        leo();
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        cancer();
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        gemini();
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        taurus();
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        aries();
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        pisces();
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        aquarius();
    }
}

function aries() {
    showDiv(0);
}

function taurus() {
    showDiv(1);
}

function gemini() {
    showDiv(2);
}

function cancer() {
    showDiv(3);
}

function leo() {
    showDiv(4);
}

function virgo() {
    showDiv(5);
}

function libra() {
    showDiv(6);
}

function scorpio() {
    showDiv(7);
}

function sagittarius() {
    showDiv(8);
}

function capricorn() {
    showDiv(9);
}

function aquarius() {
    showDiv(10);
}

function pisces() {
    showDiv(11);
}

sound_file = "";
const audio_element = new Audio(sound_file);
const audio_player = document.getElementById('audio_player');

function play_audio(audio_element, src) {
  if (audio_element && !audio_element.paused) {
    audio_element.pause();
    audio_element.currentTime = 0;
  }
  audio_element.src = src;
  audio_element.play();
}

function showDiv(num) {
    document.getElementById("sign").innerHTML = signs[num].name; 
    document.getElementById("newImg").src = signs[num].image; 
    document.getElementById("desc").innerHTML = signs[num].description; 
    path = signs[num].sound;
    play_audio(audio_player, path);
    myNewDiv.hidden = !myNewDiv.hidden;
}

function gods_buttons() {
    gods[0].addEventListener('click', aries, false);
    gods[1].addEventListener('click', taurus, false);
    gods[2].addEventListener('click', gemini, false);
    gods[3].addEventListener('click', cancer, false);
    gods[4].addEventListener('click', leo, false);
    gods[5].addEventListener('click', virgo, false);
    gods[6].addEventListener('click', libra, false);
    gods[7].addEventListener('click', scorpio, false);
    gods[8].addEventListener('click', sagittarius, false);
    gods[9].addEventListener('click', capricorn, false);
    gods[10].addEventListener('click', aquarius, false);
    gods[11].addEventListener('click', pisces, false);
}

gods_buttons();

function disappear() {
    myNewDiv.hidden = 'true';
}

function closeNewDiv() {
    newBtn.addEventListener('click', disappear, false);
}

closeNewDiv();


const submit_button = document.getElementById('submitBtn');

function sub_button() {
    submit_button.addEventListener('click', submitDates, false);
}

sub_button();

function submitDates() {
    day = parseInt(document.getElementById('date').value.split('-')[2]);
    month = parseInt(document.getElementById('date').value.split('-')[1]);
    getSign(month, day);
}
