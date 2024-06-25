import { Planet } from "./universe.model";

export const UNIVERSE: Planet[] = [
    {
        name: 'Sun',
        distanceFromSun: '',
        diameter: '1,392,700 km',
        orbitalPeriod: '',
        // surfaceTemperature: '5,500°C',
        // gravity: '28 g',
        // atmosphericComposition: 'Hydrogen, Helium',
        interestingFacts: 'The Sun is the center of our Solar System and the primary source of energy for life on Earth.',
        color: '#FFD700',
        src: 'assets/image/Planet=Sun, size=big.png',
    },
    {
        name: 'Mercury',
        distanceFromSun: '57.9 million km',
        diameter: '4,880 km',
        orbitalPeriod: '88 days',
        // surfaceTemperature: '430°C (day), -180°C (night)',
        // gravity: '0.38 g',
        // atmosphericComposition: 'Minimal atmosphere, mainly hydrogen, helium, and traces of oxygen',
        interestingFacts: 'Mercury is the closest planet to the Sun and experiences extreme temperature variations.',
        // numberOfMoons: 0,
        discoveryAndExploration: 'Discovered by ancient civilizations and first visited by Mariner 10 in 1974.',
        color: '#D4D4D4',
        src: 'assets/image/Planet=Mercury, size=big.png',
    },
    {
        name: 'Venus',
        distanceFromSun: '108.2 million km',
        diameter: '12,104 km',
        orbitalPeriod: '225 days',
        // surfaceTemperature: '471°C',
        // gravity: '0.91 g',
        // atmosphericComposition: 'Carbon dioxide (96%), nitrogen (3.5%), sulfur dioxide, traces of water vapor',
        interestingFacts: 'Venus has a dense, toxic atmosphere and rotates in the opposite direction to most planets.',
        // numberOfMoons: 0,
        // discoveryAndExploration: 'Explored by numerous spacecraft, including Venera and Magellan.',
        color: '#F0E68C',
        src: 'assets/image/Planet=Venus, size=big.png',
    },
    {
        name: 'Earth',
        distanceFromSun: '149.6 million km',
        diameter: '12,742 km',
        orbitalPeriod: '365 days',
        // surfaceTemperature: '-88°C to 58°C',
        // gravity: '1 g',
        // atmosphericComposition: 'Nitrogen (78%), oxygen (21%), argon, carbon dioxide, trace gases',
        interestingFacts: 'Earth is the only known planet to support life. It has liquid water and a protective atmosphere.',
        // numberOfMoons: 1,
        // discoveryAndExploration: 'Home to humanity, extensively studied by satellites and spacecraft.',
        color: '#4682B4',
        src: 'assets/image/Planet=Earth, size=big.png',
    },
    {
        name: 'Mars',
        distanceFromSun: '227.9 million km',
        diameter: '6,779 km',
        orbitalPeriod: '687 days',
        // surfaceTemperature: '-87°C to -5°C',
        // gravity: '0.38 g',
        // atmosphericComposition: 'Carbon dioxide (95%), nitrogen (3%), argon, traces of oxygen, water vapor',
        interestingFacts: 'Mars has polar ice caps, evidence of ancient rivers, and is being explored for signs of past life.',
        // numberOfMoons: 2,
        // discoveryAndExploration: 'Explored by rovers like Curiosity and spacecraft like Mars Reconnaissance Orbiter.',
        color: '#FF6347',
        src: 'assets/image/Planet=Mars, size=big.png',
    },
    {
        name: 'Jupiter',
        distanceFromSun: '778.6 million km',
        diameter: '139,820 km',
        orbitalPeriod: '12 years',
        // surfaceTemperature: '-145°C',
        // gravity: '2.36 g',
        // atmosphericComposition: 'Hydrogen (89%), helium (10%), methane, ammonia, water vapor',
        interestingFacts: 'Jupiter is the largest planet in the Solar System and has a powerful magnetic field.',
        // numberOfMoons: 79,
        // discoveryAndExploration: 'Explored by spacecraft like Galileo and Juno, with ongoing studies of its moons.',
        color: '#FFA500',
        src: 'assets/image/Planet=Jupiter, size=big.png',
    },
    {
        name: 'Saturn',
        distanceFromSun: '1.4 billion km',
        diameter: '116,460 km',
        orbitalPeriod: '29.5 years',
        // surfaceTemperature: '-178°C',
        // gravity: '0.916 g',
        // atmosphericComposition: 'Hydrogen (96%), helium (3%), methane, ammonia',
        interestingFacts: 'Saturn is known for its spectacular ring system, made of ice particles and dust.',
        // numberOfMoons: 82,
        // discoveryAndExploration: 'First observed by ancient astronomers and visited by spacecraft like Cassini.',
        color: '#FFD700',
        src: 'assets/image/Planet=Saturn, size=big.png',
    },
    {
        name: 'Uranus',
        distanceFromSun: '2.9 billion km',
        diameter: '50,724 km',
        orbitalPeriod: '84 years',
        // surfaceTemperature: '-224°C',
        // gravity: '0.889 g',
        // atmosphericComposition: 'Hydrogen (82.5%), helium (15%), methane (2.3%)',
        interestingFacts: 'Uranus is tilted on its side, possibly due to a collision early in its history.',
        // numberOfMoons: 27,
        // discoveryAndExploration: 'Discovered by William Herschel in 1781, explored by Voyager 2 in 1986.',
        color: '#87CEEB',
        src: 'assets/image/Planet=Uranus, size=big.png',
    },
    {
        name: 'Neptune',
        distanceFromSun: '4.5 billion km',
        diameter: '49,244 km',
        orbitalPeriod: '165 years',
        // surfaceTemperature: '-218°C',
        // gravity: '1.12 g',
        // atmosphericComposition: 'Hydrogen (80%), helium (19%), methane (1.5%)',
        interestingFacts: 'Neptune has the fastest winds in the Solar System, reaching speeds of 2,100 km/h.',
        // numberOfMoons: 14,
        // discoveryAndExploration: 'Discovered through mathematical predictions and observed by Voyager 2 in 1989.',
        color: '#4169E1',
        src: 'assets/image/Planet=Neptune, size=big.png',
    }
];
