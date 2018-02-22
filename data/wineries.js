const jsonData = [
  {
    "name": "Bodega Andrés Díaz",
    "address": "Palencia, 32. Navalcarnero",
    "lat": 40.291784,
    "lng": -4.0100648,
    "venueId": "5218fce9bce6fa70fb607f8f",
    "web": "http://www.bodegasennavalcarnero.es/"
  },
  {
    "name": "Bodega El Regajal",
    "address": "Antigua Carretera de Andalucía, Km 50.5, 28300, Aranjuez, Madrid, España",
    "lat": 40.0077499,
    "lng": -3.5997352,
    "venueId": "4ca7081444a8224baf0c0940",
    "web": "http://www.elregajal.es/"
  },
  {
    "name": "Bodega Gosálbez Orti (Qubél)",
    "address": "Real, 14. Pozuelo del Rey",
    "lat": 40.3661895,
    "lng": -3.3232884,
    "venueId": "4f0c22bee4b020a8d95115ab",
    "web": "http://www.qubel.com/"
  },
  {
    "name": "Bodega Jesús Díaz",
    "address": "Convento, 38, Colmenar de la Oreja, 28380, Madrid",
    "lat": 40.107685,
    "lng": -3.39559,
    "venueId": "4e12ec2e6284edb6bae425bf",
    "web": "http://bodegasjesusdiazehijos.com/"
  },
  {
    "name": "Bodega Real Cortijo de San Isidro",
    "address": "Calle León Ruiz Ruiz s/n - Real Cortijo de San Isidro. Aranjuez",
    "lat": 40.0536351,
    "lng": -3.5665847,
    "venueId": "5198b7fb498e9da48d5de4cb",
    "web": "https://realcortijo.com/"
  },
  {
    "name": "Viña Elena",
    "address": "Paraje Estrecho de Marín, N-344, Km 52,5, 30520 Jumilla, Murcia, España",
    "lat": 38.362353,
    "lng": -1.26274,
    "venueId": "4d849f8b5e70224b00001009"
  },
  {
    "name": "Bodegas San Isidro - B.S.I.",
    "address": "Carretera de Murcia s/n 30520  Jumilla, Murcia. España",
    "lat": 38.47038,
    "lng": -1.312183,
    "venueId": "4f097e16e4b09d21f7a55d6a"
  },
  {
    "name": "Bodegas Silvano Garcia",
      "address": "Av. de Murcia, 29, 30520, Jumilla, Murcia",
      "lat": 38.47501176400975,
      "lng": -1.3194841302092353,
    "venueId": "4e42569a887719193967361d"
  },
  {
    "name": "Bodega El Fabulista",
    "address": "Plaza de San Juan Laguardia, Álava, País Vasco",
    "lat": 42.5527703,
    "lng": -2.586778,
    "venueId": "4e3d5f4d1495bf24a5d931ac"
  },
  {
    "name": "Adega Condes de Albarei, S.A.",
    "address": "Lugar A Bouza 1, 36639 - Cambados Pontevedra, España",
    "lat": 42.4896385,
    "lng": -8.8048175,
    "venueId": "4c7f745e2042b1f72cdbc2ad"
  },
  {
    "name": "Lagar de Pintos, S.L.",
    "address": "Calle Cabanelas 6, 36636  Ribadumia, Pontevedra Galicia",
    "lat": 42.5150549,
    "lng": -8.7719265,
    "venueId": "4c6f0540b3ce224b27936fc6"
  },
  {
    "name": "Lagar Cañada Navarro",
    "address": "Vereda Vereda del Cerro Macho s/n, Vereda situada en km 8,5 de la cv 38 Montilla-Cabra, 14550 Montilla, Córdoba (Andalucía)",
    "lat": 37.541197,
    "lng": -4.5593217,
    "venueId": "529e49fa498e90aad224b4af"
  },
  {
    "name": "Bodegas Alvear",
    "address": "Avda. María Auxiliadora 1, Visitas: Avda. Boucau, 60 ACC, 14550  Montilla, Córdoba  (Andalucía)",
    "lat": 37.584215,
    "lng": -4.641954,
    "venueId": "4c501f2edcb5d13a76637308"
  },
  {
    "name": "Bodegas Marco Real, S.A.",
    "address": "Carretera Pamplona-Zaragoza 38, 31390  Olite-Erriberri, Navarra, España",
    "lat": 42.488302,
    "lng": -1.6645735,
    "venueId": "4c6a737ff6b0ef3ba0167b84"
  },
  {
    "name": "Vinoteca Algarra",
    "address": "Calle Rúa de San Francisco 21, 31390  Olite-Erriberri, Navarra, España",
    "lat": 42.4821787,
    "lng": -1.6533819,
    "venueId": "52078a2111d2e15065bf8644"
  },
  {
    "name": "Bodegas Fábregas S.A.",
    "address": "Calle Cerler s/n, 22300  Barbastro, Huesca Aragón",
    "lat": 42.0391559,
    "lng": 0.116544,
    "venueId": "5040d11864a4748c4a19f145"
  },
  {
    "name": "Viñas del Vero S.A.",
    "address": "Carretera Barbastro-Naval km 3,7, 22300  Barbastro, Huesca (Aragón)",
    "lat": 42.0611595,
    "lng": 0.0887919,
    "venueId": "4c5d35876147be9aa26d9109"
  },
  {
    "name": "Bodega Los Ángeles",
    "address": "C/ Luis de Eguílaz 11, 11540 Sanlúcar de Barrameda, Cádiz (Andalucía)",
    "lat": 37.5070537,
    "lng": -4.6601359,
    "venueId": "4e6bf36bb61c739ba857fb3c"
  },
  {
    "name": "Bodegas Grant",
    "address": "Calle Los Bolos, 1 y 3, 11500  Puerto de Santa María, El, Cádiz (Andalucía)",
    "lat": 36.5966005,
    "lng": -6.2311553,
    "venueId": "4ece4168f5b9832ad7c01c2f"
  },
  {
    "name": "Bodegas Caballero",
    "address": "San Francisco, 32",
    "lat": 36.60046722147533,
    "lng": -6.233609962736615,
    "venueId": "4c9078a50b9e3704b6f5675e"
  },
  {
    "name": "Bodegas San José",
    "address": "Pza. Elías Ahuja",
    "lat": 36.59601620390162,
    "lng": -6.23235005127617,
    "venueId": "4dcea3ab22718eed7a3cd3a5"
  },
  {
    "name": "Bodega de Mora Osborne",
    "address": "C. Moros, s/n, 11500 El Puerto de Santa María Andalusia, Spain",
    "lat": 36.59502617892982,
    "lng": -6.229307315328928,
    "venueId": "4c3c3473b36ac92876c00386"
  },
  {
    "name":  "Bodega Las 7 Esquinas",
    "address": "C. Jesús Nazareno, 6 (C. Bolos), 11500 El Puerto de Santa María Andalusia, Spain",
    "lat": 36.5964205519136,
    "lng": -6.22871563546345,
    "venueId": "4bb3844835f0c9b6af7bbc83"
  },
  {
    "name": "Can Feixes",
    "address": "Finca Can Feixes s/n, 08718  Cabrera d'Anoia, Barcelona (Cataluña)",
    "lat": 41.488231,
    "lng": 1.6887513,
    "venueId": "52612406498ea25e4feaf986"
  },
  {
    "name": "Caves Pere Ventura",
    "address": "Ctra.Vilafranca, km 0.5 s/n, 08770  Sant Sadurní d'Anoia, Barcelona (Cataluña)",
    "lat": 41.4207007,
    "lng": 1.7754963,
    "venueId": "4cae08bfbf70236a790305f9"
  },
  {
    "name": "Bodegas Miguel Torres",
    "address": "Finca el Maset s/n, 08796  Pacs del Penedés, Pacs del Penedès, Barcelona (Cataluña)",
    "lat": 41.349432,
    "lng": 1.6649863,
    "venueId": "4befc1bc3a002d7f025e85a4"
  },
  {
    "name": "Cal Feru",
    "address": "Calle Diputació 51, 08770  Sant Sadurní d'Anoia, Barcelona (Cataluña)",
    "lat": 41.422134,
    "lng": 1.7884963,
    "venueId": "4befcf3c1f17ef3b56b09bc8"
  },
  {
    "name": "Bodegas Emilio Clemente",
    "address": "Camino San Blas s/n, 46340  Requena, Utiel, Valencia-València",
    "lat": 39.4774119,
    "lng": -1.0945824,
    "venueId": "51eaf840498e9d5f6f92cf85"
  },
  {
    "name": "Bodegas Murviedro",
    "address": "Ampl. Polígono El Romeral s/n, 46340  Requena, Valencia-València",
    "lat": 39.505709,
    "lng": -1.1316627,
    "venueId": "4fd5c574e4b0d43255abebca"
  },
  {
    "name": "Aranleón",
    "address": "Carretera De Caudete 3, 46310  Los Marcos, Venta del Moro, Valencia-València",
    "lat": 39.4940681,
    "lng": -1.2873003,
    "venueId": "51fe6c9bccdaca4e241f6ff8"
  },
  {
    "name": "Castell del Remei",
    "address": "Finca Castell del Remei s/n, 25333  Castell del Remei, Penelles, Lleida (Cataluña)",
    "lat": 41.7196877,
    "lng": 0.9692667,
    "venueId": "4db3fc4a93a017099dcf93de"
  },
  {
    "name": "Bodegas Costers del Sió",
    "address": "Carretera Agramunt, Km. 4,2, 25600  Balaguer, Lleida (Cataluña)",
    "lat": 41.811195,
    "lng": 0.9203623,
    "venueId": "4c52b0099426c9286625ca75"
  },
  {
    "name": "Dominio de Tares",
    "address": "Polígono Industrial Bierzo Alto Calle Los Barredos 4, 24318 San Román de Bembibre, Bembibre, León (Castilla y León)",
    "lat": 42.6189836,
    "lng": -6.4688122,
    "venueId": "4e538da21520cd65608ed9e5"
  },
  {
    "name": "Losada Vinos de Finca",
    "address": "Carretera a Villafranca LE-713, km 12, 24540  Cacabelos, León (Castilla y León)",
    "lat": 42.6055535,
    "lng": -6.7611572,
    "venueId": "4d88702f7d4c5481d30a3f71"
  },
  {
    "name": "Bodegas Estefanía- Tilenus",
    "address": "Carretera de Dehesas a Posada, 24390 Ponferrada, León (Castilla y León)",
    "lat": 42.5340559,
    "lng": -6.6871601,
    "venueId": "4ee1ea9229c20563bb735700"
  },
  {
    "name": "Bodegas Arzuaga Navarro",
    "address": "Carretera N-122, Km. 325, 47300 Quintanilla de Onésimo, Valladolid (Castilla y León)",
    "lat": 41.62821,
    "lng": -4.3261347,
    "venueId": "4c87900af554236a54b1cd55"
  },
  {
    "name": "Bodega Histórica Don Carlos S.XV",
    "address": "Calle Isilla, 1, 09400  Aranda de Duero, Burgos (Castilla y León)",
    "lat": 41.6712098,
    "lng": -3.6894723,
    "venueId": "4d7ba72b645ea35d3a3b36f8"
  },
  {
    "name": "Bodegas Félix Callejo",
    "address": "Avenida del Cid KM. 16, 09441 Sotillo de la Ribera, Burgos (Castilla y León)",
    "lat": 41.7763577,
    "lng": -3.8309739,
    "venueId": "4d84871c5e70224b05260e09"
  },
  {
    "name": "Bodegas Ruberte",
    "address": "Avenida De la Paz, 28. Tenor Fleta, s/n., 50520  Magallón, Zaragoza (Aragón)",
    "lat": 41.8317829,
    "lng": -1.46103,
    "venueId": "527946c911d22407afb029a7"
  },
  {
    "name": "Bodegas Borsao",
    "address": "Carretera N-122, Km. 63, 50540  Borja, Zaragoza (Aragón)",
    "lat": 41.8323991,
    "lng": -1.5290341,
    "venueId": "4f9aacd9e4b017ea498e09e4"
  },
  {
    "name": "Bodegas La Purísima",
    "address": "Carretera de Pinoso, 3 ( Apartado de correos 27), 30510  Yecla, Murcia (Murcia)",
    "lat": 38.6093759,
    "lng": -1.1053434,
    "venueId": "4d62665a922960fce99f848b"
  },
  {
    "name": "Bodegas Barahonda",
    "address": "Carretera de Pinoso km, 3, 30510  Yecla, Murcia  (Murcia)",
    "lat": 38.5878731,
    "lng": -1.0826672,
    "venueId": "4e7c6d63b803b97a5cdae514"
  },
  {
    "name": "Bodegas Descalzos Viejos",
    "address": "Partido Rural Los Molinos, s/n., 29400  Ronda, Málaga (Andalucía)",
    "lat": 36.7509888,
    "lng": -5.1817703,
    "venueId": "4f5dedcbe4b0d8f7b8431bad"
  },
  {
    "name": "Bodega García Hidalgo",
    "address": "Paraje Partido Rural Los Morales, s/n. Llano de la Cruz, 29400  Ronda, Málaga (Andalucía)",
    "lat": 36.7748018,
    "lng": -5.1645083,
    "venueId": "56c612e0cd10f90590405a56"
  },
  {
    "name": "Bodegas Excelencia",
    "address": "Cordel del Puerto del Quejigal. Vía pecuaria, s/n., 29400  Ronda, Málaga (Andalucía)",
    "lat": 36.8170384,
    "lng": -5.1802836,
    "venueId": "51b393ed498e537d908dbd8f"
  },
  {
    "name": "Bodegas Gomez Cruzado",
    "address": "Avenida Vizcaya, 6, 26200 Haro, Rioja, La (Rioja, La)",
    "lat": 42.5839151,
    "lng": -2.8494018,
    "venueId": "530747db498eeecc47d6c39f"
  },
  {
    "name": "Bodegas Lecea",
    "address": "Calle las Cuevas, 246, 26340 San Asensio, La Rioja",
    "lat": 42.5000804,
    "lng": -2.7559456,
    "venueId": "4f6ddc6ae4b0e6e002015662"
  },
  {
    "name": "Bodegas La Rioja Alta",
    "address": "Avenida Vizcaya, 8, 26200 Haro, Rioja, La (Rioja, La)",
    "lat": 42.5835627,
    "lng": -2.848677,
    "venueId": "4c8c9be555fba0937c2b61ab"
  },
  {
    "name": "Bodegas Finca Valpiedra",
    "address": "Término Montecillo , s/n, 26360 Fuenmayor, Rioja, La (Rioja, La)",
    "lat": 42.4955157,
    "lng": -2.6104836,
    "venueId": "4d55174ce7f1a1cd3824f6a4"
  },
  {
    "name": "Bodegas Muga",
    "address": "Barrio de la Estación, s/n, 26200 Haro, Rioja, La (Rioja, La)",
    "lat": 42.5823388,
    "lng": -2.8489426,
    "venueId": "4b8cccc8f964a5207add32e3"
  },
  {
    "name": "Bodegas David Moreno",
    "address": "Ctra. a Villar de Torre, s/n, 26310 Badarán, Rioja, La (Rioja, La)",
    "lat": 42.366938,
    "lng": -2.8151283,
    "venueId": "4d56c453fb65236ae6cd09b4"
  },
  {
    "name": "Bodegas Martinez Lacuesta",
    "address": "Paraje de Ubieta, s/n, 26200 Haro, Rioja, La (Rioja, La)",
    "lat": 42.558168,
    "lng": -2.8411967,
    "venueId": "4e2aaf1fae605c533a2f0c74"
  },
  {
    "name": "Bodegas Pago de las Encomiendas",
    "address": "Camino de San Isidro, s/n., 06220 Villafranca de los Barros, Badajoz (Extremadura)",
    "lat": 38.5541458,
    "lng": -6.3468162,
    "venueId": "5127563de4b003fd049c54c8"
  },
  {
    "name": "Bodega San Marcos",
    "address": "Carretera Aceuchal, s/n., 06200 Almendralejo, Badajoz (Extremadura)",
    "lat": 38.676435,
    "lng": -6.4285787,
    "venueId": "4feae11290e7335a14e14e7c"
  },
  {
    "name": "Bodegas Martínez Payva",
    "address": "Carretera N-630, Km. 646, 06200 Almendralejo, Badajoz (Extremadura)",
    "lat": 38.7209118,
    "lng": -6.3995576,
    "venueId": "4e06519045ddb2875c43c3f0"
  },
  {
    "name": "Palacio de Bornos",
    "address": "Carretera Nacional VI, Km.170,6, 47490 Rueda, Valladolid (Castilla y León)",
    "lat": 41.4048477,
    "lng": -4.9615895,
    "venueId": "4bf7bb075efe2d7f58706934"
  },
  {
    "name": "Bodegas Faelo",
    "address": "C/ Partida de Matola, 18 - Polígono 3, 03296 Elche-Elx, Alicante-Alacant",
    "lat": 38.2252049,
    "lng": -0.7547987,
    "venueId": "4f928538e4b0324618b950cb"
    /* 4f9285a3e4b0f639248d70d4 */
  },
  {
    "name": "Bocopa",
    "address": "Paraje les Pedres, autovía A31 km 200-201 Salida Elda-Hospital, 03610 Petrer, Alicante-Alacan",
    "lat": 38.503987,
    "lng": -0.7939097,
    "venueId": "4d662a3e2b0b5941bd434929"
  },
  {
    "name": "Vinos de Algueña",
    "address": "Carretera del Rodriguillo, km. 29,5, 03668 Algueña, Alicante-Alacant",
    "lat": 38.340235,
    "lng": -1.0130947,
    "venueId": "4e88401a4690b091a5a410c0"
  },
  {
    "name": "Heretat de Cesilia",
    "address": "Calle Paraje Alcaydias, 4, 03360  Novelda, Alicante-Alacant",
    "lat": 38.4017459,
    "lng": -0.783615,
    "venueId": "53e8afdc498ea32eb6a6cb8f"
  },
  {
    "name": "Finca Collado",
    "address": "Carretera de Salinas a Villena, 03638 Salinas, Alicante-Alacant",
    "lat": 38.543476,
    "lng": -0.8915957,
    "venueId": "54185ddb498e9dd6a625330b"
  },
  {
    "name": "Bodegas La Gabarda",
    "address": "Carretera Zaragoza-Valencia km 459, 50460 Longares, Zaragoza (Aragón)",
    "lat": 41.4095084,
    "lng": -1.1647102,
    "venueId": "5309d2b3498e6eaade57cdc7"
  },
  {
    "name": "Bodegas Prinur",
    "address": "Carretera Valencia-Zaragoza km 499,150, 50400 Cariñena, Zaragoza (Aragón)",
    "lat": 41.3318165,
    "lng": -1.2188512,
    "venueId": "4e06117862e100e58166ef21"
  },
  {
    "name": "Grandes Vinos",
    "address": "Carretera de Valencia, kilómetro 45,700, 50400 Cariñena, Zaragoza (Aragón)",
    "lat": 41.3621708,
    "lng": -1.2096119,
    "venueId": "4d3aab620333a09352e15634"
  },
  {
    "name": "Bodegas Sinforiano",
    "address": "Ctra. Villalba Km. 1 dcha, 47194  Mucientes, Valladolid  (Castilla y León)",
    "lat": 41.748038,
    "lng": -4.7759197,
    "venueId": "4e872736775ba32368e41c85"
  },
];

/* export default jsonData; */