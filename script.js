const musicData = [
    {
        title: "Si Antes Te Hubiera Conocido",
        artist: ["Karol G"],
        genre: ["Merengue"],
        type: "ZIN 112",
        category: ["Emotional"],
		tempo: "",
        link: "https://youtu.be/MgsdDfdGdHc?si=7CdYuVYFKPXjm5zb"
    },
    {
        title: "M.I.A.M.I.",
        artist: ["Nacho"],
        genre: ["Cubaton", "Afrobeat"],
        type: "ZIN 109",
        category: ["Dark", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/DTLvwh49j5w?si=x3Wz1UK2KQyik6wH"
    },
    {
        title: "La Pantera Mambo",
        artist: ["La-33", "(Covered by Zumba)"],
        genre: ["Salsa", "Mambo"],
        type: "MegaMix 14",
        category: ["Emotional"],
		tempo: "1",
        link: "https://youtu.be/KLsGFDeiY5I?si=UpW4Qp9ZdjX6hSo7"
    },
    {
        title: "Bonito",
        artist: ["Zumba"],
        genre: ["Samba", "Batucada"],
        type: "MegaMix 14",
        category: ["Relaxing"],
		tempo: "1",
        link: ""
    },
    {
        title: "Me Descontrola",
        artist: ["Ronald Borjas", "feat.", "Motif"],
        genre: ["Salsa"],
        type: "FitnessVariation 26",
        category: ["Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/M7oZquZM8to?si=2jdbQVxlOVjLPQGQ"
    },
    {
        title: "Amor De Lejos",
        artist: ["Tati K"],
        genre: ["Cumbia"],
        type: "FitnessVariation 26",
        category: ["Dark", "Traditional"],
		tempo: "1",
        link: "https://youtu.be/Rgq2-DYsQfM?si=EMH1UPicZE0Tw-50"
    },
    {
        title: "Cumbhangra",
        artist: ["Zumba"],
        genre: ["Bhangra", "Cumbia"],
        type: "FitnessVariation 31",
        category: ["Traditional", "Rhythmic"],
		tempo: "1",
        link: ""
    },
    {
        title: "Gimme Five",
        artist: ["Zumba"],
        genre: ["Bachata", "Batucada"],
        type: "ZIN 44",
        category: ["Powerful"],
		tempo: "1",
        link: ""
    },
    {
        title: "Tijuana Nights",
        artist: ["Zumba"],
        genre: ["Quebradita"],
        type: "ZIN 47",
        category: ["Traditional", "Powerful"],
		tempo: "1",
        link: ""
    },
    {
        title: "Ice Cream And Cake",
        artist: ["Oro Solido"],
        genre: ["Merengue"],
        type: "MegaMix 48",
        category: ["Rhythmic"],
		tempo: "",
        link: "https://youtu.be/kkY0PeMaZKA?si=JqhUCGc6MCEwfLZY"
    },
    {
        title: "Ministry of Road (M.O.R)",
        artist: ["Machel Montano"],
        genre: ["Reggae", "Soca"],
        type: "MegaMix 48",
        category: ["Powerful"],
		tempo: "1",
        link: "https://youtu.be/zUxfgSdYNN4"
    },
    {
        title: "Better When I'm Dancing",
        artist: ["Meghan Trainor", "(Covered by Zumba)"],
        genre: ["Pop", "Calypso"],
        type: "MegaMix51",
        category: ["Bright", "Relaxing"],
		tempo: "1",
        link: "https://youtu.be/pkCyfBibIbI?si=TCtP617f0NFinUk-"
    },
    {
        title: "Bailando",
        artist: ["Enrique Igresias", "feat.", "Descemer Bueno", "Gente De Zona"],
        genre: ["Reggaeton", "Flamenco"],
        type: "ZIN 52",
        category: ["Emotional", "Relaxing"],
		tempo: "1",
        link: "https://youtu.be/NUsoVlDFqZg?si=R1KZNTg4obtd4uei"
	},
    {
        title: "Milonga Con Azucar",
        artist: ["Zumba"],
        genre: ["Milonga", "Tango"],
        type: "MegaMix 52",
        category: ["Dramatic"],
		tempo: "1",
        link: ""
    },
    {
        title: "Sal A Bailar",
        artist: ["La Poderosa", "Víctor Manuelle", "(Covered by Zumba)"],
        genre: ["Salsa", "Batucada"],
        type: "MegaMix 52",
        category: ["Bright", "Powerful"],
		tempo: "1",
        link: "https://youtu.be/zAlJdUmMzsA?si=7zIIdMYB1fqdvgO3"
    },
    {
        title: "Dejenme Vivir",
        artist: ["Amarfis", "La Banda De Atakke"],
        genre: ["Merengue"],
        type: "MegaMix 52",
        category: "Powerful",
		tempo: "1",
        link: "https://youtu.be/0NSJaxY_vzM?si=nGYg2G-1juxyrww-"
    },
    {
        title: "Mas Que Tu Amigo",
        artist: ["Zumba"],
        genre: ["Salsa",],
        type: "ZIN 55",
        category: ["Dramatic", "Rhythmic"],
		tempo: "1",
        link: ""
    },
    {
        title: "Que Es Lo Que Dice",
        artist: ["Robert Taylor"],
        genre: ["Salsa Choke"],
        type: "MegaMix 55",
        category: ["Experimental"],
		tempo: "1",
        link: "https://youtu.be/4nXOvde7030"
    },
    {
        title: "Tu Mi Medicina",
        artist: ["Andy Quintero"],
        genre: ["Merengue"],
        type: "MegaMix 58",
        category: ["Bright"],
		tempo: "1",
        link: "https://youtu.be/4Xr24SmSvBI?si=tjysHq5_iqdROZ__"
	},
    {
        title: "Rompa laPompa",
        artist: ["Zumba Studio"],
        genre: ["Cumbia", "Oriental","Fusion"],
        type: "ZIN 58",
        category: ["Powerful", "Experimental"],
		tempo: "1",
        link: ""
	},
    {
        title: "Despacito",
        artist: ["Luis Fonsi", "feat.", "Victor Manuelle"],
        genre: ["Salsa"],
        type: "MegaMix 58",
        category: ["Emotional", "Relaxing"],
		tempo: "1",
        link: ""
	},
    {
        title: "Sola",
        artist: ["Zumba"],
        genre: ["Reggaeton", "Bhangra"],
        type: "ZIN 59",
        category: ["Powerful", "Experimental"],
		tempo: "1",
        link: ""
	},
	{
        title: "Zumba Fuego",
        artist: ["Zumba"],
        genre: ["Cumbia", "Flamenco"],
        type: "ZIN 59",
        category: ["Traditional"],
		tempo: "1",
        link: ""
	},
    {
        title: "Cumbia Anthem",
        artist: ["El Dusty", "feat.", "Happy Colors", "(Covered by Zumba)"],
        genre: ["Cumbia", "Urban"],
        type: "ZIN 60",
        category: ["Traditional"],
		tempo: "1",
        link: "https://youtu.be/MT02fwtyVVU"
	},
    {
        title: "Indian Passion",
        artist: ["Zumba"],
        genre: ["Bhanbra", "Fusion"],
        type: "ZIN 61",
        category: ["Traditional", "Rhythmic"],
		tempo: "1",
        link: ""
	},
    {
        title: "Cara de Nino",
        artist: ["Jerry Rivera", "(Covered by Zumba)"],
        genre: ["Salsa"],
        type: "ZIN 63",
        category: ["Emotional", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/HagwTbmyyVA?si=uHYyZ6i0pBpbHGwJ"
	},
    {
        title: "No Voy A Llorar",
        artist: ["Carolina La O", "(feat.)", "Robert Taylor"],
        genre: ["Merengue"],
        type: "ZIN 64",
        category: ["Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/-41v6jLOcas?si=8R_pafH9PXLtyuzn"
	},
    {
        title: "Macarena",
        artist: ["Los Del Rio", "(Covered by Zumba)"],
        genre: ["Salsa"],
        type: "ZIN 64",
        category: ["", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/cV0FxPZ3YR0?si=aHcmsR-GDEMVLyrO"
	},
    {
        title: "Como En Las Vegas",
        artist: ["Olga Tanon"],
        genre: ["Reggaeton"],
        type: "MegaMix 65",
        category: ["Emotional", "Dark"],
		tempo: "1",
        link: "https://youtu.be/HJ6mZZbN2AE?si=snPj72lOa9JGhufv"
	},
    {
        title: "Yo Voy Contigo Colombia",
        artist: ["Moises Angulo"],
        genre: ["Cumbia"],
        type: "MegaMix 65",
        category: ["Bright", "Traditional"],
		tempo: "1",
        link: "https://youtu.be/yBDBSx1dHX0?si=cLOY4NvxgZIKluE7"
	},
    {
        title: "A Mi Me Gusta",
        artist: ["Robert Taylor"],
        genre: ["Merengue", "Batucada"],
        type: "MegaMix 66",
        category: ["Bright", "Rhythmic"],
		tempo: "1",
        link: ""
	},
    {
        title: "Rub A Bum",
        artist: ["Play-N-Skillz", "feat.", "Jenn Morel", "Joelli"],
        genre: ["Reggaeton", "Dembow"],
        type: "MegaMix 67",
        category: ["Power", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/HBntvaWP9qc?si=8QN8Z0LU7LJUyirP"
	},
    {
        title: "Bailalo",
        artist: ["Armando", "&", "Heidy"],
        genre: ["Dembow"],
        type: "ZIN 68",
        category: ["Power", "Experimental"],
		tempo: "1",
        link: "https://youtu.be/wwrgDrXK4i8?si=oTEi4E9C6aGcmeW7"
	},
    {
        title: "Roxanne",
        artist: ["Zumba"],
        genre: ["Bachata"],
        type: "ZIN 70",
        category: ["Cool"],
		tempo: "1",
        link: ""
	},
    {
        title: "That’s What I Like",
        artist: ["Bruno Mars", "(Covered by Zumba)"],
        genre: ["Trap", "Reggaeton"],
        type: "ZIN 70",
        category: ["Cool", "Power"],
		tempo: "1",
        link: "https://youtu.be/PMivT7MJ41M?si=QW6itaZPAENZ3vRC"
	},
    {
        title: "Solo Tu",
        artist: ["Jaider White", "feat.", "Robert Taylor"],
        genre: ["Merengue"],
        type: "ZIN 70",
        category: ["Rhythmic"],
		tempo: "1",
        link: ""
	},
    {
        title: "Tumbao",
        artist: ["Prince Royce", "feat.", "Gente de Zona", "Arturo Sandoval", "(Covered by Zumba)"],
        genre: ["Bachata"],
        type: "ZIN 71",
        category: ["Emotional"],
		tempo: "1",
        link: "https://youtu.be/B6wTkZwq7nI"
	},
    {
        title: "Esta Noche",
        artist: ["Jeison el Brother"],
        genre: ["Salsa"],
        type: "MegaMix 72",
        category: ["Bright", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/ENZuMMdKtC8?si=JLfoRnsBW6uTq9nd"
	},
    {
        title: "Baila Mi Cumbia",
        artist: ["Jeison el Brother"],
        genre: ["Cumbia", "Reggaeton"],
        type: "MegaMix73",
        category: ["Powerful"],
		tempo: "1",
        link: "https://youtu.be/NtNNiudOEgM?si=ISTOVxsELjEA1an8"
	},
    {
        title: "El Clavo",
        artist: ["Prince Royce"],
        genre: ["Reggaeton"],
        type: "ZIN 74",
        category: ["Emotional", "Cool"],
		tempo: "1",
        link: "https://youtu.be/FCfP7v9x8HI?si=8HtNwsyAF-ghp1-X"
	},
    {
        title: "ODWAN [One Day With A Mexican]",
        artist: ["Broz Rodriguez", "feat.", "Lujavo", "Toy Selectah"],
        genre: ["EDM", "Cumbia"],
        type: "ZIN 74",
        category: ["Powerful", "Dark"],
		tempo: "1",
        link: "https://youtu.be/1AtvhzMDnFg"
	},
    {
        title: "No Me Deles Asi",
        artist: ["Max Pizzolante"],
        genre: ["Merengue"],
        type: "ZIN 75",
        category: ["Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/FTzS5Oa03WE"
	},
    {
        title: "Doh Play Dat",
        artist: ["Machel Montano"],
        genre: ["Soca"],
        type: "ZIN 75",
        category: ["Powerful", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/UI2XXgbnyrU?si=uUI-iToCd9CNkrE1"
	},
    {
        title: "Familiar",
        artist: ["Liam Payne", "feat.", "J.Balvin"],
        genre: ["Latin"],
        type: "ZIN 75",
        category: ["Dark", "Emotional"],
		tempo: "1",
        link: "https://youtu.be/oWw1BcFhk-k?si=lGO9BNbHEU6OZDTS"
	},
    {
        title: "Telephone Soghayar",
        artist: ["Hakim"],
        genre: ["Bellydance"],
        type: "ZIN 75",
        category: ["Distinctive"],
		tempo: "1",
        link: "https://youtu.be/Qa56XzB7yIk?si=s2bo-Kikw7cTcjIC"
	},
    {
        title: "Lista Pa’ Vivir",
        artist: ["Carolina Sabino"],
        genre: ["Cumbia"],
        type: "ZIN 77",
        category: ["Bright"],
		tempo: "1",
        link: ""
	},
    {
        title: "Metal Bhangg",
        artist: ["Zumba"],
        genre: ["Bhangra", "EDM"],
        type: "MegaMix 78",
        category: ["Powerful", "Traditional"],
		tempo: "1",
        link: ""
	},
    {
        title: "Bailar Pegaito",
        artist: ["DEMOglias"],
        genre: ["Merengue"],
        type: "MegaMix 79",
        category: ["Powerful", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/lYzPoNQvCoE"
	},
    {
        title: "Munequita Linda",
        artist: ["Juan Magan", "Deorro", "MAKJ"],
        genre: ["Merengue", "EDM"],
        type: "ZIN 79",
        category: ["Power", "Dark"],
		tempo: "1",
        link: "https://youtu.be/v6lELbZiZG8?si=FASZyEH_jaR_UnON"
	},
    {
        title: "Batu-Cuica",
        artist: ["Zumba"],
        genre: ["Batucada"],
        type: "ZIN 80",
        category: ["Traditional", "Rhythmic"],
		tempo: "1",
        link: ""
	}
,
    {
        title: "Mas Que Bien",
        artist: ["Juan Por Dios"],
        genre: ["Quebradita", "Hip-hop"],
        type: "ZIN 80",
        category: ["Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/4vjLdni4OVQ"
	}
,
    {
        title: "Pegadito",
        artist: ["Play-N-Skillz"],
        genre: ["Reggaeton", "Cha-cha-cha"],
        type: "ZIN 80",
        category: ["Dark"],
		tempo: "1",
        link: "https://youtu.be/O8_LW71sfE0"
	}
,
    {
        title: "Sueltara",
        artist: ["Jorge Luis Chasin"],
        genre: ["Cumbia", "Batucada"],
        type: "ZIN 80",
        category: ["Powerful", "Traditional", "Distinctive"],
		tempo: "1",
        link: "https://youtu.be/BhnLw2mOaBU"
	}
,
    {
        title: "Tik Tak Tik Tok",
        artist: ["Chune", "Cami V"],
        genre: ["Bachata", "Dembow"],
        type: "MegaMix 80",
        category: ["Bright", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/a2OKyeX_R1g"
	},
    {
        title: "Tu Flow",
        artist: ["Alex Tatoo", "feat.", "Cooper J."],
        genre: ["Dembow", "Moombathon"],
        type: "MegaMix 80",
        category: ["Powerful", "Distinctive"],
		tempo: "1",
        link: "https://youtu.be/LZjS9euH04c?si=IzZIAMorhfaJfOt_"
	},
    {
        title: "Parecen Viernes",
        artist: ["Mark Anthony"],
        genre: ["Salsa"],
        type: "ZIN 81",
        category: ["Emotional"],
		tempo: "1",
        link: "https://youtu.be/AsCnKFzhFSA?si=TA5GzfEHe3NjYOTR"
	},
    {
        title: "Se Te Ve",
        artist: ["Ray El Ingeniero"],
        genre: ["Cumbia", "Bhangra"],
        type: "ZIN 81",
        category: ["Traditional", "Relaxing"],
		tempo: "1",
        link: ""
	},
    {
        title: "3G",
        artist: ["Wisin", "feat.", "Jon Z", "Chezina"],
        genre: ["Reggaeton", "Urban"],
        type: "ZIN 82",
        category: ["Dark", "Power"],
		tempo: "1",
        link: "https://youtu.be/y5Hf0O1nWMQ?si=IKRUF7IJ-6BP8-Zp"
	},
    {
        title: "Black Zombie",
        artist: ["The Zombie Kids"],
        genre: ["Merengue", "Trap"],
        type: "ZIN 82",
        category: ["Rhythmic", "Dark", "Experimental"],
		tempo: "1",
        link: "https://youtu.be/tXA7zOQhwPA?si=4BpTEIFYSAakRDjh"
	},
    {
        title: "Piedra, Papel o Tijera",
        artist: ["Bela Hamilton"],
        genre: ["Reggaeton", "Urban"],
        type: "ZIn 82",
        category: ["Cool", ""],
		tempo: "1",
        link: "https://youtu.be/D3nmBUEBJYs"
	},
    {
        title: "Bailando",
        artist: ["Zumba"],
        genre: ["Merengue"],
        type: "ZIN 83",
        category: ["Cool", "Rhythmic", "Bright"],
		tempo: "1",
        link: ""
	},
    {
        title: "Wepa",
        artist: ["Max Pizzolante", "feat.", "Victor Drija"],
        genre: ["Bachata", "Dembow"],
        type: "ZIN 83",
        category: ["Cool", "Dark"],
		tempo: "1",
        link: "https://youtu.be/CBqCOwv4c6E?si=xqUMy4b9GVuCrPy9"
	},
    {
        title: "Escucha Mujer",
        artist: ["Zona Prieta", "feat.", "Aldo Ranks"],
        genre: ["Pacific", "Urban"],
        type: "MegaMix 85",
        category: ["Powerful", "Distinctive"],
		tempo: "1",
        link: "https://youtu.be/TD1UaFbGQNo?si=nXNej9p1JU5zI_aV"
	},
    {
        title: "NOW [No One Waiting]",
        artist: ["Nadia Batson", "Destra Garcia"],
        genre: ["Soca"],
        type: "ZIN 86",
        category: ["Rhythmic", "Bright"],
		tempo: "1",
        link: "https://youtu.be/0J_g5zeUeCo?si=pwAXyk74RQ7iLvOk"
	},
    {
        title: "Chevere",
        artist: ["Marive", "feat.", "Little Big"],
        genre: ["Merengue"],
        type: "MegaMix 87",
        category: ["Bright", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/yxqkGhVvAqY?si=zzVNUBZSSfnhTYzJ"
	},
    {
        title: "Acerela",
        artist: ["Reggi", "feat.", "Gizzle"],
        genre: ["Dubstep"],
        type: "ZIN 87",
        category: ["Cool", "Dark"],
		tempo: "1",
        link: ""
	},
    {
        title: "So Sexy",
        artist: ["Max Pizzolante"],
        genre: ["Boogaloo", "Merengue"],
        type: "MegaMix 90",
        category: ["Relaxing", "Distinctive"],
		tempo: "1",
        link: "https://youtu.be/Zn0B2HcMprs?si=lgNKluS-ytk_JvkV"
	},
    {
        title: "CInturita",
        artist: ["Bela Hamilton"],
        genre: ["Merengue", "EDM"],
        type: "ZIN 92",
        category: ["Powerful", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/cMneYC0LnEo?si=kX_ZqaXvup0xHzyQ"
	},
    {
        title: "Quisiera",
        artist: ["Willie N"],
        genre: ["Reggaeton"],
        type: "MegaMix 92",
        category: ["Relaxing"],
		tempo: "1",
        link: "https://youtu.be/FbT5hS-sueE"
	},
    {
        title: "Bum Bum",
        artist: ["Kairo La Sinfonia"],
        genre: ["Dancehall"],
        type: "MegaMix 92",
        category: ["Dark", "Cool"],
		tempo: "1",
        link: "https://youtu.be/M3deetRnsaM?si=G_url82Has4uqL91"
	},
    {
        title: "Boom Bye Bye",
        artist: ["Jota"],
        genre: ["Reggaeton", "Cumbia", "Dancehall"],
        type: "MegaMix 94",
        category: ["Dark", "Cool"],
		tempo: "1",
        link: ""
	},
    {
        title: "Salsa De Ahora",
        artist: ["Motiff", "Los Xl del XXl"],
        genre: ["Salsa"],
        type: "MegaMix 94",
        category: ["Bright"],
		tempo: "1",
        link: "https://youtu.be/p2ewlAxN8-Y?si=Sb8a7B2GoHNI_boA"
	},
    {
        title: "Club",
        artist: ["DEMOglias", "SNDY", "Young F", "Chune"],
        genre: ["EDM"],
        type: "Megamix 95",
        category: ["Rhythmic", "Dark"],
		tempo: "1",
        link: "https://youtu.be/Y_YJ5tIG8XM"
	},
    {
        title: "La Lista",
        artist: ["Juan Shool"],
        genre: ["Bachata"],
        type: "MegaMix 95",
        category: ["Relaxing"],
		tempo: "1",
        link: ""
	},
    {
        title: "Necesito",
        artist: ["Starkboys", "Dobliu"],
        genre: ["Merengue"],
        type: "MegaMix 95",
        category: ["Relaxing"],
		tempo: "1",
        link: "https://youtu.be/r-K6u3Zzf3U?si=gz0L4U-XL9wkT2Rq"
	},
    {
        title: "Amaneci",
        artist: ["Puchu y Tucutu"],
        genre: ["Dembow"],
        type: "MegaMix 96",
        category: ["Dark", "Rhythmic"],
		tempo: "1",
        link: "https://youtu.be/Ajrkot_J5Qk?si=_gWMPxcnYIe6Okmo"
	},
    {
        title: "Que Detone",
        artist: ["David DLuna"],
        genre: ["Salsa"],
        type: "MegaMix 96",
        category: ["Dark", "Cool", "Rhythmic"],
		tempo: "1",
        link: ""
	},
    {
        title: "Papito",
        artist: ["Zumba"],
        genre: ["Cumbia", "Dembow"],
        type: "ZIN 96",
        category: ["Cool", "Experimental", "Powerful"],
		tempo: "1",
        link: ""
	},
    {
        title: "Ataca",
        artist: ["Becca", "Jota"],
        genre: ["Bellydance", "Latin"],
        type: "MegaMix 97",
        category: ["Dark", "Rhythmic"],
		tempo: "1",
        link: ""
	},
    {
        title: "Que Se Repita",
        artist: ["NAP"],
        genre: ["Cumbia", "Hip-hop"],
        type: "MEgaMix 97",
        category: ["Experimental"],
		tempo: "1",
        link: "https://youtu.be/7cDmucuDGHQ?si=zotRwLt8EQUXnG4j"
	},
    {
        title: "Tu Cara Bonita",
        artist: ["Zumba"],
        genre: ["Bachata"],
        type: "MegaMix 97",
        category: ["Emotional"],
		tempo: "1",
        link: ""
	},
    {
        title: "La Batidora",
        artist: ["Sofia Reyes", "El Gran Silencio"],
        genre: ["Cumbia"],
        type: "MegaMix 98",
        category: ["Emotional", "Rhythmic", "Experimental"],
		tempo: "1",
        link: "https://youtu.be/eeN7tHYQorE?si=-JdIsr7Nu4fl3em2"
	},
    {
        title: "Tempo",
        artist: ["Jenn Morel"],
        genre: ["Dembow"],
        type: "ZIN 98",
        category: ["Dark", "Cool"],
		tempo: "1",
        link: "https://youtu.be/ToSDqW69mXk?si=SQ7iyAIT75OHDxyv"
	},
    {
        title: "Baloncito Viejo",
        artist: ["Carlos Vives", "Camilo"],
        genre: ["Vallenato"],
        type: "ZIN 98",
        category: ["Relaxing", "Bright", "Emotional"],
		tempo: "1",
        link: "https://youtu.be/fOAYjG_G4xY?si=-IDiwwJk1KwDiR4C"
	},
	{
        title: "Mi Forma De Ser",
        artist: ["Olga Tanon"],
        genre: ["Salsa"],
        type: "ZIN 99",
        category: ["Bright", "Relaxing", "Emotional"],
		tempo: "1",
        link: "https://youtu.be/mdFpJO9H_U8"
    },
    {
        title: "Overtime",
        artist: ["Dahrio"],
        genre: ["Funk"],
        type: "MegaMix 99",
        category: ["Bright", "Rhythmic"],
		tempo: "1",
        link: ""
	},
    {
        title: "Reset",
        artist: ["Joey Montana"],
        genre: ["Soca", "Pop"],
        type: "ZIN 99",
        category: ["Relaxing"],
		tempo: "1",
        link: ""
	},
    {
        title: "Asi Eh, Just Like That!",
        artist: ["Oro Solido"],
        genre: ["Merengue"],
        type: "ZIN 99",
        category: ["Bright", "Rhythmic", "Distinctive"],
		tempo: "1",
        link: ""
	},
    {
        title: "Yo Te Conozco",
        artist: ["Max Pizzolante"],
        genre: ["Merengue"],
        type: "ZIN 99",
        category: ["Cool", "Rhythmic"],
		tempo: "1",
        link: "https://music.youtube.com/watch?v=b55wVvQo6hU&si=GIRmjAc4dUe07XrQ&feature=xapp_share"
	},
    {
        title: "Tu Tiene' El Flow",
        artist: ["Zumba"],
        genre: ["EDM", "Pop"],
        type: "ZIN 99",
        category: ["Bright", "Relaxing"],
		tempo: "1",
        link: ""
	},
    {
        title: "Tus Pies",
        artist: ["Pinto Picasso"],
        genre: ["Flamenco"],
        type: "MegaMix 99",
        category: ["Cool", "Emotional"],
		tempo: "1",
        link: ""
	},
    {
        title: "Fuego Lento",
        artist: ["Zumba"],
        genre: ["Salsa"],
        type: "MegaMix 99",
        category: ["Bright", "Distinctive"],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	},
    {
        title: "",
        artist: [""],
        genre: [""],
        type: "",
        category: [""],
		tempo: "1",
        link: ""
	}






];

function filterSongs(targetGenre) {
    let filteredSongs;
    if (targetGenre === 'すべて') {
        filteredSongs = musicData; // 全楽曲を表示
    } else {
        filteredSongs = musicData.filter(song => song.genre.includes(targetGenre)); // フィルタリングされた楽曲を表示
    }

    // 楽曲を表示
    displaySongs(filteredSongs);
}

function displaySongs(songs) {
    const tableBody = document.getElementById('musicTable').querySelector('tbody');
    tableBody.innerHTML = ''; // 既存の行をクリア

    // 最初の6曲のみを取得
    const limitedSongs = songs.slice(0, 6);
    const remainingSongs = songs.slice(6); // 7曲目以降を取得

    limitedSongs.forEach((song, index) => {
        // 各楽曲を遅延させて表示 (250ms間隔)
        setTimeout(() => {
            const row = document.createElement('tr');
            row.classList.add('fade-in'); // フェードインクラスを追加
            
            const artistText = song.artist.join(', ');

            row.innerHTML = `
                <td>
                    <span class="song-title">${song.link ? `<a href="${song.link}" target="_blank">${song.title}</a>` : song.title}</span>
                    <br>
                    ${artistText}
                    <br>
                    【${song.type}】
                </td>
            `;
            tableBody.appendChild(row);

            // フェードインを適用
            setTimeout(() => {
                row.classList.add('visible'); // visibleクラスを追加
            }, 10); // 短い遅延を入れてアニメーションが機能するように
        }, index * 250); // 250ms間隔で表示
    });

    // 6曲目の表示後に残りの曲を一括表示
    if (remainingSongs.length > 0) {
        setTimeout(() => {
            remainingSongs.forEach(song => {
                const row = document.createElement('tr');
                row.classList.add('fade-in'); // フェードインクラスを追加

                const artistText = song.artist.join(', ');

                row.innerHTML = `
                    <td>
                        <span class="song-title">${song.link ? `<a href="${song.link}" target="_blank">${song.title}</a>` : song.title}</span>
                        <br>
                        ${artistText}
                        <br>
                        【${song.type}】
						<br>
                    </td>
                `;
                tableBody.appendChild(row);

                // フェードインを適用
                setTimeout(() => {
                    row.classList.add('visible'); // visibleクラスを追加
                }, 10); // 短い遅延を入れてアニメーションが機能するように
            });
        }, limitedSongs.length * 250); // 6曲表示後に一括表示
    }

    // ページを一番上にスクロール
    window.scrollTo(0, 0);
}

// 最初の表示
document.addEventListener('DOMContentLoaded', () => {
    displaySongs(musicData); // 音楽データを表示
});
