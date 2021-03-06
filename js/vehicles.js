let vehiclesType = [
  {
    id: 20,
    name: "Chevy El Camino",
    category: "trucks",
    year: 1959,
    img: "./images/trucks//1959-el-camino-left-rear.jpg",
    desc:
      "Longer, lower, wider, all-new sheet metal, wrap-around windshield, batwing rear fenders and cat's eye tail-lamps - full-size Chevys for 1959 were completely redesigned.",
  },
  {
    id: 1,
    name: "Bugatti Chiron",
    category: "supercars",
    year: 2019,
    img: "./images/bugatti.jpg",
    desc:
      "The Chiron Super Sport emphatically answered that question in 2019 with a startling 304mph run, making it the worlds fastest series production car.",
  },
  {
    id: 12,
    name: "Honda XRV750 Africa",
    category: "motorcicles",
    year: 1995,
    img: "./images/moto/Honda-XRV750-95-1024x765.jpg",
    desc:
      "Make Model: Honda XRV 750 Africa Twin Year: 1995 Engine: Four stroke, Longitudinal 52 degreesV-twin. SOHC, 3 Valve per cylinder Capacity: 742 cc / 45.2 cu-in Bore x Stroke: 81",
  },
  {
    id: 22,
    name: "Dodge Power Wagon",
    category: "trucks",
    year: 1951,
    img: "./images/trucks/1951-dodge-power-wagon-left-2.jpg",
    desc:
      "Designed for off-highway operations, the Dodge Power Wagon was one of the first mass-produced 4x4 civilian trucks. A rugged chassis allows passage through water, sand, and mud.",
  },

  {
    id: 3,
    name: "Koenigsegg Jesko",
    category: "supercars",
    year: 2020,
    img: "./images/Koenigsegg.jpg",
    desc:
      "Named after the father of Koenigsegg founder Christian, the Jesko is powered by a lightweight 5 litre twin-turbo V8, producing up to 1600bhp on E85 Biofuel. With just 1300kg to move, the predicted 0-300kmh time of 12 sec is brutal",
  },
  {
    id: 14,
    name: "Yamaha World Crosser concept",
    category: "motorcicles",
    year: 2013,
    img: "./images/moto/Yamaha-Super-Tenere-World-Crosser-13.jpg",
    desc:
      "Make Model: Yamaha XT 1200Z Super T~A(c)n~A(c)r~A(c) )Worldcrosser Year: 2013 Engine: Four-stroke, parallel twin, DOHC, 4-valve, Capacity: 1199 cc / 73.2 cub in. Bore x Stroke: 98 x 79.5 mm",
  },
  {
    id: 23,
    name: "Chevy Cameo Carrier",
    category: "trucks",
    year: 1957,
    img: "./images/trucks/1957-chevy-cameo-carrier-right.jpg",
    desc:
      "Boasting V-8 power, automatic transmission, two-tone paint, and deluxe interior, the 1955 Chevrolet Cameo shortened the distance between car and truck.",
  },

  {
    id: 5,
    name: "Koenigsegg Agera RS",
    category: "supercars",
    year: 2018,
    img: "./images/Koenigsegg2018.jpg",
    desc:
      "Power output from the 5 litre twin-turbo V8 ranges from 1160bhp to a monstorous 1360bhp with the optional 1MW pack. The later recently setting new world records for top speed (278 mph official average, with a 285mph peak) and 0-400kmh-0 (33.3 sec).",
  },
  {
    id: 16,
    name: "Yamaha TT 600",
    category: "motorcicles",
    year: 1991,
    img: "./images/moto/Yamaha-TT600-85.jpg",
    desc:
      "Make Model: Yamaha TT 600 Year: 1991 – 92 Engine: Four stroke, single cylinder, SOHC, 4 Valve Capacity: 595 cc / 36.5 cu-in Bore x Stroke: 95 x 84 mm",
  },
  {
    id: 24,
    name: "CJ Jeep History",
    category: "trucks",
    year: 1986,
    img: "./images/trucks/jeep-cj5-renegade-image.jpg",
    desc:
      "By the late sixties, consumer interest in off-road activities had grown in leaps and bounds, with the Kaiser-Willys Jeep leading the way. Four-wheel drive vehicles were more popular than ever.",
  },
  {
    id: 7,
    name: "9FF GT9 Vmax",
    category: "supercars",
    year: 2012,
    img: "./images/9FF.jpg",
    desc:
      "Porsches 997 provides the starting point for the Vmax. The engine is then replaced by the unit from a GT3 RSR racecar, mid mounted and enlarged to 4.2 litres, then twin turbocharged to a phenomenal 1381bhp and 856 lbft of torque.",
  },
  {
    id: 18,
    name: "Suzuki DR 370",
    category: "motorcicles",
    year: 1977,
    img: "./images/moto/Suzuki_DR370.jpg",
    desc:
      "Make Model: Suzuki SP 370 Year: 1977 – 79 Engine: Four stroke, single cylinder, SOHC Capacity: 369 cc / 22.5 cu in Bore x Stroke: 85 x 65.2 mm Compression",
  },
  {
    id: 25,
    name: "Willys Jeep ",
    category: "trucks",
    year: 1945,
    img: "./images/trucks/1945-willys-overland-jeep-cj-2a.jpg",
    desc:
      "Prior to World-War Two, Willys-Overland (pronounced 'Willis Overland') Motors was one of many struggling independent car companies. Their fortune changed after winning the bid to manufacture Jeeps for the U.S. Military, producing over 650,000 from 1941 to 1945.",
  },
  {
    id: 9,
    name: "Bugatti Veyron Supersport",
    category: "supercars",
    year: 2011,
    img: "./images/Bugatti-Veyron.jpg",
    desc:
      "Still the official holder of the title of world's fastest production car at a colossal 268mph (despite the unofficial 270mph one-way run of Hennessey's Venom GT).",
  },
  {
    id: 20,
    name: "Gas Gas EC 300",
    category: "motorcicles",
    year: 2009,
    img: "./images/moto/Gas-Gas-EC-300-Nambotin-11.jpg",
    desc:
      "Make Model: Gas Gas EC 300 Nambotin Replica Year: 2009 Engine: Two stroke, single cylinder Capacity: 294 cc / 17.9 cu-in Bore x Stroke: 72 x 72 mm Cooling System",
  },
  {
    id: 26,
    name: "Ford Econoline Pickup",
    category: "trucks",
    year: 1961,
    img: "./images/trucks/econoline-pickup-side.jpg",
    desc:
      "Shorter, lighter, and easier to maneuver, the Ford Econoline pickup was also less expensive than a conventional pickup.",
  },
  {
    id: 11,
    name: "ATK 450 Enduro",
    category: "motorcicles",
    year: 2011,
    img: "./images/moto/atk-450.jpg",
    desc:
      "Motor-wise, the American machine makes plenty of noise with its whiny fuel injection and wide-ratio, cassette-style 5-speed transmission.",
  },
  {
    id: 2,
    name: "Hennessey Venom F5",
    category: "supercars",
    year: 2020,
    img: "./images/hennessey.jpg",
    desc:
      "The F5 is the first fully in-house supercar produced by Hennessey and is named after the highest tornado speed rating. The 6.6 litre twin-turbo 'Fury' V8 kicks out a massive 1817hp at a screaming 8000rpm.",
  },
  {
    id: 27,
    name: "Ford F100",
    category: "trucks",
    year: 1953,
    img: "./images/trucks/1953-ford-f100-pickup-left.jpg",
    desc:
      "Starting in 1953, F-series trucks added '00' to the designations, thus the F-1 became the F-100. Engine choices were the same as last years: buyers could choose either the OHV 215ci six-cylinder or the 239ci flathead V-8. Eight-cylinder trucks were adorned with a chrome V-8 emblem in the center of the grille, while six-cylinder trucks had a chrome three-pointed star.",
  },
  {
    id: 13,
    name: "Honda XR 650R",
    category: "motorcicles",
    year: 2013,
    img: "./images/moto/Honda-XR650R.jpg",
    desc:
      "Make Model: Honda XR 650R Year: 2002 – 03 Engine: Four stroke, single cylinder SOHC, 4 valve Capacity: 644 cc / 39.6 cu-in Bore x Stroke: 100 x 82.6 mm",
  },
  {
    id: 4,
    name: "SSC Tuatara",
    category: "supercars",
    year: 2019,
    img: "./images/SSC.jpg",
    desc:
      "Powered by a 5.9 litre twin turbo V8, the Tuatara produces up to 1750hp (on E85 flex fuel) and over 1000 lbft of torque. An extraordinary 1400 bhp/ton power to weight ratio catapults the hypercar to 60mph in just 2.5 seconds.",
  },
  {
    id: 28,
    name: "WW2 Jeep ",
    category: "trucks",
    year: 1943,
    img: "./images/trucks/1943-willys-jeep.jpg",
    desc:
      "The Second World War was a major event that defined global history. More than a 300 million soldiers worldwide took part in the hostilities, and estimates show between 60 to 80 million soldiers and civilians lost their lives.",
  },
  {
    id: 15,
    name: "Yamaha FaZer 8 ",
    category: "motorcicles",
    year: 2012,
    img: "./images/moto/Yamaha-Fazer-8-12-3-1360x765.jpg",
    desc:
      "Make Model: Yamaha FZ-8 Fazer Year: 2012 Engine: Four stroke, forward-inclined transverse four cylinder, DOHC, 4 valve per cylinder Capacity: 779 cc / 48.6 cu-in Bore x Stroke: 68.0~A53.6mm ",
  },
  {
    id: 6,
    name: "Koenigsegg One:1",
    category: "supercars",
    year: 2015,
    img: "./images/Koenigsegg-One.jpg",
    desc:
      "Hailed by founder Christian Von Koenigsegg as the world's first `Megacar` the One:1 produces a colossal 1341bhp (or 1 Megawatt) from it's twin turbo V8.",
  },
  {
    id: 29,
    name: "Chevrolet Corvair",
    category: "trucks",
    year: 1962,
    img: "./images/trucks/1962-corvair-truck-1.jpg",
    desc:
      "With the 1962 Chevrolet Corvair Truck -- and with the other truck versions of its rear-engine, air-cooled Corvair compact car -- it's no doubt what Chevrolet was aiming at: the Volkswagen's Beetle-based bus.",
  },
  {
    id: 17,
    name: "Suzuki GSX-R 1000",
    category: "motorcicles",
    year: 2013,
    img: "./images/moto/Suzuki-GSXR1000-13-1-1360x765.jpg",
    desc:
      "Make Model: Suzuki GSX-R 1000 Year: 2013 Engine: Four stroke, transverse four cylinder, DOHC, 4 valves per cylinder, TSCC Capacity: 998.6 cc / 60.9 cub. in Bore x Stroke: 74.5",
  },
  {
    id: 8,
    name: "Hennessey Venom GT",
    category: "supercars",
    year: 2017,
    img: "./images/Hennessey-Venom.jpg",
    desc:
      "The Hennessey Venom GT is now (unofficially) the worlds fastest production car, with a stunning top speed of 270mph. The official 268mph record remains with Bugatti.",
  },
  {
    id: 30,
    name: "Ford Ranchero and Courier",
    category: "trucks",
    year:1957,
    img: "./images/trucks/1957-1958-ford-ranchero-and-courier-1.jpg",
    desc:
      "The 1957 Ford Ranchero and Courier were pioneering sedan-pickup designs that sent the other major automakers scrambling to catch up.",
  },
  {
    id: 19,
    name: "Ducati 175 Formula 3",
    category: "motorcicles",
    year: 1959,
    img: "./images/moto/ducati_175_formula3_59_01.jpg",
    desc:
      "Make Model: Ducati 175 Formula 3 Year: 1959 – 62 Engine: Four stroke, single cylinder, SOHC, shaft and bevel gear driven, 2 valves per cylinder Capacity: 174.5 cc / 10.6",
  },
  {
    id: 10,
    name: "Koenigsegg Agera ",
    category: "supercars",
    year: 2014,
    img: "./images/Koenigsegg-Agera-R.jpg",
    desc:
      "Putting down all the power with just two wheel drive limits the Agera at lower speeds, but once in it's stride it can despatch 0-300kmh in just 14.5 seconds, then get back to zero just 6.5 seconds later. This is race car performance for the road..",
  },
];
export { vehiclesType as vehicle };
