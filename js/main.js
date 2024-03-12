console.log('hello does this work?');

const instr = document.getElementById('helpInstructions');

const btn = document.querySelector('#xbutton');

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

function newPortion() {
    for (let i = 0; i < 12; i++) {
        const portion = document.createAttribute('div');
        console.log(portion);
    }
}

newPortion();

const signs = [
    {
        name: 'Aries',
        god: 'Ares',
        sound: "/media/sounds/ares.mp3",
        description: 'Ares, the dynamic god of war, embodies the spirit of this bold and passionate zodiac sign. If you happen to be an Aries, chances are you resonate with the formidable characteristics of this mighty god. Those born under the Aries constellation are driven by a relentless pursuit of power, fueled by ambition, and guided by unwavering courage.'
    },
    {
        name: 'Taurus',
        god: 'Hestia',
        description: 'Taurus, in celestial harmony with the Greek goddess Hestia, manifests in individuals who yearn for practicality, peace, unyielding stability, and luxurious comfort. Hestia, the embodiment of a humble guardian of homes, stands as the ideal goddess to symbolize Taurus and its desire for a harmonious and cozy existence.'
    },
    {
        name: 'Gemini',
        god: 'Athena',
        description: 'Gemini\'s constellation and zodiac affiliation boast deep ties to Greek mythology. If you\'re a Gemini, your celestial kinship extends to Athena, the wise Goddess of Military Victory. Additionally, a profound connection to the mythical twins Castor and Pollux is felt, mirroring the names of the constellation\'s brightest stars. Geminis embody adaptability, communicative prowess, and resourcefulness as their defining traits.'
    },
    {
        name: 'Cancer',
        god: 'Artemis',
        description: 'Artemis, the Greek goddess reigning over Cancer, is occasionally referred to as the Moon Goddess. Signifying the compassionate and nurturing essence of this zodiac sign, Artemis possesses mystical abilities in healing and immortality. Those born under the Cancer sign inherently bear the protective virtues of Artemis, carrying her watchful influence wherever their paths may lead.'
    },
    {
        name: 'Leo',
        god: 'Zeus',
        description: 'Zeus, the mighty ruler of Mount Olympus and King of Gods in Greek mythology, stands as a formidable figure. For those under the Leo sign, the challenge lies in navigating the delicate equilibrium between aspirations and impulses. Similar to Zeus, individuals born under this sign are propelled by the relentless pursuit of success, an abundance of energy, and an innate thirst for power.'
    },
    {
        name: 'Virgo',
        god: 'Demeter',
        description: 'Demeter, the goddess of the Earth and guardian of abundant harvests, perfectly encapsulates the nurturing and gentle essence of Virgo. Virgos, much like Demeter, navigate life with a compass of sensitivity, empathy, and a profound ability to nurture.'
    },
    {
        name: 'Libra',
        god: 'Aphrodite',
        description: 'For those under the Libra sign, a celestial connection aligns with the captivating Greek goddess Aphrodite. This alluring Goddess of Love shares a plethora of traits with the Libra zodiac, as both Aphrodite and Librans exude charisma, passion, and adept communication skills.'
    },
    {
        name: 'Scorpio',
        god: 'Hades',
        description: 'Hades, the enigmatic God of the Underworld, mirrors the mysterious forces embodied by Scorpios. This zodiac sign is frequently linked with traits of secrecy, boldness, and passion. If you happen to be a Scorpio, embracing your alignment with such a distinctively powerful figure like Hades should evoke a sense of pride.'
    },
    {
        name: 'Sagittarius',
        god: 'Dionysus',
        description: 'Dionysus, the lively God of Wine, serves as an ideal representation for the spirited Sagittarius. Those under this zodiac sign are known for their passion, adaptability, enthusiasm, and love for entertainment. If you identify as a Sagittarius, you might sense a spiritual bond with the wild and spontaneous Dionysus.'
    },
    {
        name: 'Capricorn',
        god: 'Apollo',
        description: 'Capricorns share a cosmic connection with Apollo, the Greek god reigning over the sun and wielding supernatural healing powers. Anchored by a strong inclination towards safety and security, this zodiac sign mirrors Apollo\'s qualities of ambition, intelligence, and practicality.'
    },
    {
        name: 'Aquarius',
        god: 'Prometheus',
        description: 'Those born under the sign of Aquarius find themselves cosmically connected to Prometheus, the God of Creation and Forethought. This alignment bestows upon your skills tied to communication and teamwork. Additionally, the Aquarius constellation is linked to Ganymede, the mythical son of King Tros.'
    },
    {
        name: 'Pisces',
        god: 'Ishtar',
        description: 'Ishtar, a multifaceted figure in Greek mythology, harmonizes with Pisces by embodying fertility, emotion, and passion. Those born under this zodiac sign find themselves deeply swayed by their moods and inner desires.'
    },
];

console.log(signs);


//How to attach buttons to pictures?

//Then I want to have a opaque div appear with all information when the button is clicked on.



if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    astrological_sign = 'Capricorn'
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    astrological_sign = 'Sagittarius'
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    astrological_sign = 'Scorpio'
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    astrological_sign = 'Libra'
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    astrological_sign = 'Virgo'
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    astrological_sign = 'Leo'
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    astrological_sign = 'Cancer'
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    astrological_sign = 'Gemini'
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    astrological_sign = 'Taurus'
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    astrological_sign = 'Aries'
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    astrological_sign = 'Pisces'
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    astrological_sign = 'Aquarius'
  }