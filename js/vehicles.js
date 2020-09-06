let vehiclesType = [
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
    id: 2,
    name: "Hennessey Venom F5",
    category: "supercars",
    year: 2020,
    img: "./images/hennessey.jpg",
    desc:
      "The F5 is the first fully in-house supercar produced by Hennessey and is named after the highest tornado speed rating. The 6.6 litre twin-turbo 'Fury' V8 kicks out a massive 1817hp at a screaming 8000rpm.",
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
    id: 4,
    name: "SSC Tuatara",
    category: "supercars",
    year: 2019,
    img: "./images/SSC.jpg",
    desc:
      "Powered by a 5.9 litre twin turbo V8, the Tuatara produces up to 1750hp (on E85 flex fuel) and over 1000 lbft of torque. An extraordinary 1400 bhp/ton power to weight ratio catapults the hypercar to 60mph in just 2.5 seconds.",
  },
  {
    id: 5,
    name: "Koenigsegg Agera RS",
    category: "supercars",
    year: 2018,
    img: "./images/Koenigsegg2018.jpg",
    desc:
      "Power output from the 5 litre twin-turbo V8 ranges from 1160bhp to a monstorous 1360bhp with the optional 1MW pack. The later recently setting new world records for top speed (278 mph official average, with a 285mph peak) and 0-400kmh-0 (33.3 sec), both on the road legal, standard fit Michelin Pilot Sport Cup 2 tyres!",
  },
  {
    id: 6,
    name: "Koenigsegg One:1",
    category: "supercars",
    year: 2015,
    img: "./images/Koenigsegg-One.jpg",
    desc:
      "Hailed by founder Christian Von Koenigsegg as the world's first `Megacar` the One:1 produces a colossal 1341bhp (or 1 Megawatt) from it's twin turbo V8. In a car weighing just 1340Kg, the One:1 breaks the seemingly unreachable barrier of 1000bhp/ton. No wonder then that the Swedish hypercar is breaking records for fun. ",
  },
  {
    id: 7,
    name: "9FF GT9 Vmax",
    category: "supercars",
    year: 2012,
    img: "./images/9FF.jpg",
    desc:
      "Porsches 997 provides the starting point for the Vmax. The engine is then replaced by the unit from a GT3 RSR racecar, mid mounted and enlarged to 4.2 litres, then twin turbocharged to a phenomenal 1381bhp and 856 lbft of torque. A widened lightweight carbon fibre body and integral roll cage are fitted, but 9FF will trim the interior to whatever suits your taste.",
  },
  {
    id: 8,
    name: "Hennessey Venom GT",
    category: "supercars",
    year: 2017,
    img: "./images/Hennessey-Venom.jpg",
    desc:
      "The Hennessey Venom GT is now (unofficially) the worlds fastest production car, with a stunning top speed of 270mph. The official 268mph record remains with Bugatti, but it is surely only a matter of time before the Venom completes a 2-way run to seal the deal.",
  },
  {
    id: 9,
    name: "Bugatti Veyron Supersport",
    category: "supercars",
    year: 2011,
    img: "./images/Bugatti-Veyron.jpg",
    desc:
      "Still the official holder of the title of world's fastest production car at a colossal 268mph (despite the unofficial 270mph one-way run of Hennessey's Venom GT). Standard Veyron W16 boosted to almost 1200bhp to give earth shattering acceleration - including a dragster-like standing quarter in just 9 seconds.",
  },
  {
    id: 10,
    name: "Koenigsegg Agera R",
    category: "supercars",
    year: 2014,
    img: "./images/Koenigsegg-Agera-R.jpg",
    desc:
      "Putting down all the power with just two wheel drive limits the Agera at lower speeds, but once in it's stride it can despatch 0-300kmh in just 14.5 seconds, then get back to zero just 6.5 seconds later. This is race car performance for the road..",
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
    id: 12,
    name: "Honda XRV750 Africa",
    category: "motorcicles",
    year: 1995,
    img: "../images/moto/Honda-XRV750-95-1024x765.jpg",
    desc:
      "Make Model: Honda XRV 750 Africa Twin Year: 1995 Engine: Four stroke, Longitudinal 52 degreesV-twin. SOHC, 3 Valve per cylinder Capacity: 742 cc / 45.2 cu-in Bore x Stroke: 81",
  },
  {
    id: 13,
    name: "Honda XR 650R",
    category: "motorcicles",
    year: 2013,
    img: "../images/moto/Honda-XR650R.jpg",
    desc:
      "Make Model: Honda XR 650R Year: 2002 – 03 Engine: Four stroke, single cylinder SOHC, 4 valve Capacity: 644 cc / 39.6 cu-in Bore x Stroke: 100 x 82.6 mm",
  },
  {
    id: 14,
    name: "Yamaha World Crosser concept",
    category: "motorcicles",
    year: 2013,
    img: "../images/moto/Yamaha-Super-Tenere-World-Crosser-13.jpg",
    desc:
      "Make Model: Yamaha XT 1200Z Super T~A(c)n~A(c)r~A(c) )Worldcrosser Year: 2013 Engine: Four-stroke, parallel twin, DOHC, 4-valve, Capacity: 1199 cc / 73.2 cub in. Bore x Stroke: 98 x 79.5 mm",
  },
  {
    id: 15,
    name: "Yamaha FaZer 8 ",
    category: "motorcicles",
    year: 2012,
    img: "../images/moto/Yamaha-Fazer-8-12-3-1360x765.jpg",
    desc:
      "Make Model: Yamaha FZ-8 Fazer Year: 2012 Engine: Four stroke, forward-inclined transverse four cylinder, DOHC, 4 valve per cylinder Capacity: 779 cc / 48.6 cu-in Bore x Stroke: 68.0~A53.6mm ",
  },
  {
    id: 16,
    name: "Yamaha TT 600",
    category: "motorcicles",
    year: 1991,
    img: "../images/moto/Yamaha-TT600-85.jpg",
    desc:
      "Make Model: Yamaha TT 600 Year: 1991 – 92 Engine: Four stroke, single cylinder, SOHC, 4 Valve Capacity: 595 cc / 36.5 cu-in Bore x Stroke: 95 x 84 mm",
  },
  {
    id: 17,
    name: "Suzuki GSX-R 1000",
    category: "motorcicles",
    year: 2013,
    img: "../images/moto/Suzuki-GSXR1000-13-1-1360x765.jpg",
    desc:
      "Make Model: Suzuki GSX-R 1000 Year: 2013 Engine: Four stroke, transverse four cylinder, DOHC, 4 valves per cylinder, TSCC Capacity: 998.6 cc / 60.9 cub. in Bore x Stroke: 74.5",
  },
  {
    id: 18,
    name: "Suzuki DR 370",
    category: "motorcicles",
    year: 1977,
    img: "../images/moto/Suzuki_DR370.jpg",
    desc:
      "Make Model: Suzuki SP 370 Year: 1977 – 79 Engine: Four stroke, single cylinder, SOHC Capacity: 369 cc / 22.5 cu in Bore x Stroke: 85 x 65.2 mm Compression",
  },
  {
    id: 19,
    name: "Ducati 175 Formula 3",
    category: "motorcicles",
    year: 1959,
    img: "../images/moto/ducati_175_formula3_59_01.jpg",
    desc:
      "Make Model: Ducati 175 Formula 3 Year: 1959 – 62 Engine: Four stroke, single cylinder, SOHC, shaft and bevel gear driven, 2 valves per cylinder Capacity: 174.5 cc / 10.6",
  },
  {
    id: 20,
    name: "Gas Gas EC 300",
    category: "motorcicles",
    year: 2009,
    img: "../images/moto/Gas-Gas-EC-300-Nambotin-11.jpg",
    desc:
      "Make Model: Gas Gas EC 300 Nambotin Replica Year: 2009 Engine: Two stroke, single cylinder Capacity: 294 cc / 17.9 cu-in Bore x Stroke: 72 x 72 mm Cooling System",
  },
];
export  {vehiclesType as vehicle}

