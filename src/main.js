var data = {
    "title": "What Type of Pokemon Gym Leader are You?",
    "header_image": "media/pokemon-header.jpg",
    "selector_image": "media/pokeball.png",
    "outcomes": {
            "normal":   {
                            "img": "media/outcome-normal.jpg", 
                            "type": "Normal",
                            "text": "You are a normal type gym leader, like the legendary Whitney of Johto and the overworked, underpaid Larry of Paldea. You are friendly and approachable, like the designs of your team of normal types. You have common interests and enjoy the basics in life. As a normal type leader, you are liked by most without many enemies. While you are strong against most adversities, you often avoid controversy and fighting. Deep down, you disregard superficialities and care most about the things that really matter."
                        },
            "fire":     {
                            "img": "media/outcome-fire.jpg", 
                            "type": "Fire",
                            "text": "You are a fire type gym leader, like our fiery girl Mela of Paldea and the powerful Kabu of Galar. You love the summer sunshine and the latest fashion trends, but even without the trends, your aesthetic is usually pretty fire, no pun intended. You might be feisty, but we know that feistiness comes from spirit and true passion. You will achieve your dreams!"
                        },
            "water":    {
                            "img": "media/outcome-water.jpg", 
                            "type": "Water",
                            "text": "You are a water type gym leader. You are among the greats: Nessa the mermaid model of Galar, our best girl Misty of Kanto, the dangerous Crasher Wake of Sinnoh, and the hilarious Kofu of Paldea. You thrive near the water, of course, whether it be the beach, the swim club, or the hot tub. You're bubbly and outgoing with a group of friends that love your energy. While being chill most of the time, you still lead your team to victory with fierce determination. I'll see you at the Pokemon League this year for sure! "
                        },
            "grass":    {
                            "img": "media/outcome-grass.jpg", 
                            "type": "Grass",
                            "text": "You are a grass type gym leader. You might be similar to Milo, the kind and handsome giant of Galar, or Gardenia, the outdoorsy cutie of Sinnoh. You love exploring the outdoors; nothing refreshes you like the fresh air and beautiful, natural scenery. You love the charming idea of a cottage in a garden or a cabin in the woods. You take care of the world around you, and we appreciate you for it!"
                        },
            "electric": {
                            "img": "media/outcome-electric.jpg", 
                            "type": "Electric",
                            "text": "You are an electric type gym leader, like Iono the streamer of Paldea and Volkner, the worthy challenger of Sinnoh. You probably like spending time online, whether it's in discord, playing games, or streaming! While you might not be a person who'd love to spend all their time in the wilderness, you probably still want to explore the big cities, traveling to see what the world has to offer. You thrive in the city and in your online group of friends because, deep down, you love community...and your community loves you back. They will all be cheering for you at the Pokemon League Championships, good luck!"
                        },
            "ice":      {
                            "img": "media/outcome-ice.jpg", 
                            "type": "Ice",
                            "text": "You are an ice type gym leader, like the powerful Wulfric of Kalos or the equally powerful ~ equally cute Candice of Sinnoh. You might not love the humid heat outdoors, but your heart is still warm with ferocity for battle and loyalty to your friends. Chill, calm, and collected...you are a force to be reckoned with on the Pokemon battlefield...and a favorite person for your friends to have around. You keep us steady. Thank you for being you!"
                        },
            "fighting": {
                            "img": "media/outcome-fighting.jpg", 
                            "type": "Fighting",
                            "text": "You are a fighting type gym leader, like the small but strong Bea of Galar or the tough Brawly of Hoenn. First and foremost, you are courageous and determined. You're probably into fitness and any physical activity. Regardless of how much you currently benchpress, you have a fighting spirit. You endure and keep going through the toughest battles, and you stand up for what you believe in. You have both the body and heart of a fighter...keep going straight to the Pokemon League Championship!"
                        },
            "poison":   {
                            "img": "media/outcome-poison.jpg", 
                            "type": "Poison",
                            "text": "You are a poison type gym leader, like the OG Koga of Kanto or the rockin' Roxie of Unova. Poison type gym leaders are very clever. However, your interests are versatile, and you could enjoy lots of different interests, even from opposite ends of the spectrum. While some poison type leaders might be interested in science, others might thrive in a dark mushroom garden. Some are amazing cooks, while others are amazing chemists! What you all have in common is that you're more knowledgable than most on some things, enough that you could even be dangerous, so others should not push your buttons. But don't worry, we know you would never use it, except on the Pokemon battlefield, of course! Thanks for keeping the rest of us informed on the things that we know nothing about. Good luck at the Pokemon League Championship!"
                        },
            "ground":   {
                            "img": "media/outcome-ground.jpg", 
                            "type": "Ground",
                            "text": "You are a ground type gym leader, like the strong Bertha of Sinnoh or the friendly Hapu of Alola. You are reliable, dependable, and down to earth. Thanks for being real with the rest of us and keeping us...grounded!"
                        },
            "flying":   {
                            "img": "media/outcome-flying.jpg", 
                            "type": "Flying",
                            "text": "You are a flying type gym leader, like Skyla of Unova, who plays by her own rules. You are a free-spirited and adventurous daydreamer. You enjoy travel, exploration, and trying exciting new things. You have your head in the clouds with big dreams...and we believe in you. Good luck out there!"
                        },
            "psychic":  {
                            "img": "media/outcome-psychic.jpg", 
                            "type": "Psychic",
                            "text": "You are a psychic type gym leader, like the emotionally-intelligent and stunningly beautiful Tulip of Paldea...or the high-ranking Lucian of Sinnoh. You have great intuition and can rely on your instincts in battle to predict the other player's moves. You are very clever, both emotionally and intellectually. Good luck at the Pokemon League Championship...we know you will be a worthy foe!"
                        },
            "bug":      {
                            "img": "media/outcome-bug.jpg", 
                            "type": "Bug",
                            "text": "You are a bug type gym leader, like the sweet Katy of Paldea and the adventurous Bugsy of Johto. You are persistent and resourceful in battles...and in life. You'll always find a way to push through and win. Good luck at the Pokemon League Championships, although we know you probably won't need it!"
                        },
            "rock":     {
                            "img": "media/outcome-rock.jpg", 
                            "type": "Rock",
                            "text": "You are a rock type gym leader, like our trusty old companion Brock and the steadfast Roark of Sinnoh. You are resilient and dependable, resourceful in and outside of battle. You probably appreciate impressive craftmanship, whether it's beautifully-made jewelry or a wonderfully-constructed building of old architecture. You love a breathtaking outdoor view, and some might not know this, but you probably have excellent taste. Rock type trainers always look good... And we can't wait to see you at the Pokemon League Championships this year!"
                        },
            "ghost":    {
                            "img": "media/outcome-ghost.jpg", 
                            "type": "Ghost",
                            "text": "You are a ghost type gym leader, like the shy Allister of Galar and the mysterious Shauntal of Unova. You can be mysterious to others and probably enjoy alternative, dark aesthetics...and maybe some horror, too! Ghost types can be so difficult to beat, so we probably want to have you on our side. Good luck at the Pokemon League Championships!"
                        },
            "dragon":   {
                            "img": "media/outcome-dragon.jpg", 
                            "type": "Dragon",
                            "text": "You are a dragon type gym leader, like the cool, powerful Raihan of Galar and the young champion Iris of Unova. You are among some of the greats, like Lance of Kanto and Johto, one of the greatest Elite Four members of all time. Dragon type gym leaders may enjoy escaping into a fantasy world, through games, books, and movies. They are some of the most powerful Pokemon trainers out there...and also the most attractive, let's be real! Enjoy looking good and feeling good on the battlefield at the Pokemon League Championships this year, we can't wait!"
                        },
            "dark":     {
                            "img": "media/outcome-dark.jpg", 
                            "type": "Dark",
                            "text": "You are a dark type gym leader, like the alt rocker Piers of Galar and everyone's favorite goth girlfriend, Marnie. You might enjoy some 'dark' interests, and you can be cunning in battle..but you are still truly kindhearted, underneath all the shyness. We love your presence...and your aesthetic!"
                        },
            "steel":    {
                            "img": "media/outcome-steel.jpg", 
                            "type": "Steel",
                            "text": "You are a steel type gym leader. You have the resilience of Jasmine of Johto and the main character energy of Steven Stone. You are resilient and determined. You probably enjoy technology more than the others, whether it be big city exploration, the latest PC build, or flying to a new destination. We know you are a strong-willed opponent who will stop at nothing to stand your ground. When you earn a Pokemon battle victory, you definitely deserve it. Good luck at the Pokemon League Championships!"
                        },
            "fairy":    {
                            "img": "media/outcome-fairy.jpg", 
                            "type": "Fairy",
                            "text": "You are a fairy type gym leader, like the adorable Lacey of Paldea and our formal rival, Bede of Galar. You are nurturing and kind, whether secretly or outwardly, and you love companionship. You are enchanting to others around you, and they always enjoy your latest takes or your latest creative work. You probably enjoy escaping reality through fantasy. You are a gift to all of us around you. Let us just admire your beauty and kindness from afar. Good luck at the Pokemon League Championships!"
                        }
    },
    "questions": [
        {
            "question": "Pick a Pokemon for your team!",
            "weight": "0.5",
            "answer_style": "img-only",
            "answers": [
                {
                    "text": "pikachu",
                    "img_url": "media/pikachu.png",
                    "outcome": ["electric"]
                },
                {
                    "text": "charizard",
                    "img_url": "media/charizard.png",
                    "outcome": ["fire", "flying"]
                },
                {
                    "text": "greninja",
                    "img_url": "media/greninja.png",
                    "outcome": ["dark", "water"]
                },
                {
                    "text": "snorlax",
                    "img_url": "media/snorlax.png",
                    "outcome": ["normal"]
                },
                {
                    "text": "lucario",
                    "img_url": "media/lucario.png",
                    "outcome": ["fighting", "steel"]
                },
                {
                    "text": "mamoswine",
                    "img_url": "media/mamoswine.png",
                    "outcome": ["ice", "ground"]
                },  
                {
                    "text": "dragapult",
                    "img_url": "media/dragapult.png",
                    "outcome": ["dragon", "ghost"]
                },
                {
                    "text": "gengar",
                    "img_url": "media/gengar.png",
                    "outcome": ["poison", "ghost"]
                },
                {
                    "text": "umbreon",
                    "img_url": "media/umbreon.png",
                    "outcome": ["dark"]
                },
                {
                    "text": "gardevoir",
                    "img_url": "media/gardevoir.png",
                    "outcome": ["psychic", "fairy"]
                },
                {
                    "text": "venusaur",
                    "img_url": "media/venusaur.png",
                    "outcome": ["poison", "grass"]
                },
                {
                    "text": "shuckle",
                    "img_url": "media/shuckle.png",
                    "outcome": ["bug", "rock"]
                },
                {
                    "text": "tyranitar",
                    "img_url": "media/tyranitar.png",
                    "outcome": ["dark", "rock"]
                },
                {
                    "text": "scizor",
                    "img_url": "media/scizor.png",
                    "outcome": ["bug", "steel"]
                },
                {
                    "text": "clefable",
                    "img_url": "media/clefable.png",
                    "outcome": ["fairy"]
                }
            ]
        },

        {
            "question": "Where would you prefer to live?",
            "weight": "1.0",
            "answer_style": "img-text",
            "answers": [
                {
                    "text": "The Beach",
                    "img_url": "media/beach.jpg",
                    "outcome": ["water"]
                },
                {
                    "text": "The Misty Mountains",
                    "img_url": "media/misty-mountains.jpeg",
                    "outcome": ["grass", "dragon", "fairy"]
                },
                {
                    "text": "The Desert",
                    "img_url": "media/desert.jpeg",
                    "outcome": ["ground", "fire"]
                },
                {
                    "text": "A Winter Wonderland",
                    "img_url": "media/winter-wonderland.jpeg",
                    "outcome": ["ice", "rock"]
                },
                {
                    "text": "The Big City",
                    "img_url": "media/big-city.jpeg",
                    "outcome": ["steel", "electric", "fighting"]
                },
                {
                    "text": "The Forest",
                    "img_url": "media/forest.jpeg",
                    "outcome": ["fairy", "poison", "grass", "rock"]
                },
                {
                    "text": "A Haunted Village",
                    "img_url": "media/haunted-village.jpeg",
                    "outcome": ["dark", "ghost", "psychic"]
                },
                {
                    "text": "A Small Town",
                    "img_url": "media/small-town.jpg",
                    "outcome": ["normal"]
                },
                {
                    "text": "A Butterfly Garden",
                    "img_url": "media/butterfly-garden.jpeg",
                    "outcome": ["flying", "bug", "fairy"]
                },
                {
                    "text": "Always Traveling!",
                    "img_url": "media/traveling.gif",
                    "outcome": ["flying", "electric"]
                }
            ]
        },
        {
            "question": "Which is your favorite activity?",
            "answer_style": "text-only",
            "weight": "1.0",
            "answers": [
                {
                    "text": "working out",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fighting"]
                },
                {
                    "text": "swimming",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["water"]
                },
                {
                    "text": "reading a fantasy book",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fairy"]
                },
                {
                    "text": "hiking",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["grass"]
                },
                {
                    "text": "rock climbing",
                    "answer_bg": "rgb(233, 184, 169)",
                    "outcome": ["rock"]
                },
                {
                    "text": "sunbathing",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["fire"]
                },
                {
                    "text": "studying chemistry",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["poison"]
                },
                {
                    "text": "just chilling with friends",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["normal"]
                },
                {
                    "text": "ziplining",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["flying"]
                },
                {
                    "text": "playing any and all video games",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["electric"]
                },
                {
                    "text": "catching fireflies",
                    "answer_bg": "rgb(233, 184, 169)",
                    "outcome": ["bug"]
                },
                {
                    "text": "accidentally staying up all night long",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["dark"]
                },
                {
                    "text": "horror games with friends",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["ghost"]
                },
                {
                    "text": "reading tarot cards",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["psychic"]
                },
                {
                    "text": "slaying monsters in an RPG",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["dragon"]
                },
                {
                    "text": "hanging in discord vc",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["electric"]
                },
                {
                    "text": "gardening",
                    "answer_bg": "rgb(233, 184, 169)",
                    "outcome": ["ground"]
                },
                {
                    "text": "walking downtown in the city",
                    "answer_bg": "rgb(176, 163, 51)",
                    "outcome": ["steel"]
                },
                {
                    "text": "skiing",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["ice"]
                },
                {
                    "text": "traveling to new places",
                    "answer_bg": "rgb(204, 191, 82)",
                    "outcome": ["flying"]
                },
                {
                    "text": "cooking",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["poison"]
                }
            ]
        },
        {
            "question": "Which of these best describes your aesthetic?",
            "weight": "1.0",
            "answer_style": "bg-img-text",
            "answers": [
                {
                    "text": "fairycore",
                    "img_url": "media/fairycore.jpg",
                    "outcome": ["fairy"]
                },
                {
                    "text": "egirl ~ eboy",
                    "img_url": "media/egirl.JPG",
                    "outcome": ["electric"]
                },
                {
                    "text": "alternative",
                    "img_url": "media/alternative.jpg",
                    "outcome": ["dark"]
                },
                {
                    "text": "indie",
                    "img_url": "media/indie.jpg",
                    "outcome": ["psychic", "poison"]
                },
                {
                    "text": "goth",
                    "img_url": "media/goth.jpg",
                    "outcome": ["dark", "ghost"]
                },
                {
                    "text": "cottagecore",
                    "img_url": "media/cottagecore.jpg",
                    "outcome": ["grass"]
                },
                {
                    "text": "outdoorsy",
                    "img_url": "media/outdoorsy.jpg",
                    "outcome": ["grass", "ground", "rock"]
                },
                {
                    "text": "sporty",
                    "img_url": "media/sporty.jpg",
                    "outcome": ["fighting", "flying"]
                },
                {
                    "text": "clean",
                    "img_url": "media/clean.jpg",
                    "outcome": ["normal"]
                },
                {
                    "text": "beachy",
                    "img_url": "media/beachy.jpg",
                    "outcome": ["water"]
                },
                {
                    "text": "country",
                    "img_url": "media/country.jpg",
                    "outcome": ["grass", "rock", "ground"]
                },
                {
                    "text": "lots of neutrals",
                    "img_url": "media/neutral.jpg",
                    "outcome": ["ground"]
                },
                {
                    "text": "casual",
                    "img_url": "media/casual.jpg",
                    "outcome": ["normal"]
                },
                {
                    "text": "cyberpunk",
                    "img_url": "media/cyberpunk.jpg",
                    "outcome": ["steel", "electric"]
                },
                {
                    "text": "streetwear",
                    "img_url": "media/streetwear.jpg",
                    "outcome": ["fire"]
                },
                {
                    "text": "luxury",
                    "img_url": "media/luxury.jpg",
                    "outcome": ["rock", "steel"]
                }
            ]
        },
        {
            "question": "What are you most afraid of?",
            "weight": "1.0",
            "answer_style": "text-only",
            "answers": [
                {
                    "text": "&#128123; ghosts &#128123;",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["flying", "ghost"]
                },
                {
                    "text": "&#127754; the ocean &#127754;",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["fire", "ground", "rock"]
                },
                {
                    "text": "&#127769; the dark &#127769;",
                    "answer_bg": "rgb(145, 145, 145)",
                    "outcome": ["psychic", "ghost"]
                },
                {
                    "text": "&#127807; the wilderness &#127807;",
                    "answer_bg": "rgb(212, 228, 50)",
                    "outcome": ["water", "ground", "rock"]
                },
                {
                    "text": "&#127755; volcanic eruptions &#127755;",
                    "answer_bg": "rgb(255, 212, 124)",
                    "outcome": ["grass", "ice", "bug", "steel"]
                },
                {
                    "text": "&#128508; heights &#128508;",
                    "answer_bg": "rgb(255, 239, 103)",
                    "outcome": ["grass", "poison", "bug"]
                },
                {
                    "text": "&#127793; earthquakes &#127793;",
                    "answer_bg": "rgb(206, 187, 179)",
                    "outcome": ["fire", "electric", "poison", "rock", "steel"]
                },
                {
                    "text": "&#128152; pretty girls &#128152;",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fighting", "dragon", "dark"]
                },
                {
                    "text": "&#129514; being poisoned &#129514;",
                    "answer_bg": "rgb(217, 206, 255)",
                    "outcome": ["grass", "fairy"]
                },
                {
                    "text": "&#127970 indsutrialization &#127970",
                    "answer_bg": "rgb(230, 230, 230)",
                    "outcome": ["ice", "rock", "fairy"]
                },
                {
                    "text": "&#9889; lightning &#9889;",
                    "answer_bg": "rgb(255, 239, 103)",
                    "outcome": ["water", "flying"]
                },
                {
                    "text": "&#128009; mythical creatures &#128009;",
                    "answer_bg": "rgb(212, 228, 50)",
                    "outcome": ["dragon"]
                },
                {
                    "text": "&#10052; the cold &#10052;",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["grass", "ground", "flying", "dragon"]
                },
                {
                    "text": "&#128372; normies &#128372;",
                    "answer_bg": "rgb(206, 187, 179)",
                    "outcome": []
                },
                {
                    "text": "&#129704; rockslide &#129704;",
                    "answer_bg": "rgb(230, 230, 230)",
                    "outcome": ["fire", "ice", "flying", "bug"]
                },
                {
                    "text": "&#128375; spiders &#128375;",
                    "answer_bg": "rgb(145, 145, 145)",
                    "outcome": ["grass", "psychic", "dark"]
                },
                {
                    "text": "&#128302; the future &#128302;",
                    "answer_bg": "rgb(217, 206, 255)",
                    "outcome": ["fighting", "poison"]
                },
                {
                    "text": "&#129354; fighting &#129354;",
                    "answer_bg": "rgb(255, 212, 124)",
                    "outcome": ["normal", "ice", "rock", "dark", "steel"]
                }
            ]
        },
        {
            "question": "What's your favorite game franchise?",
            "weight": "0.5",
            "answer_style": "img-text",
            "answers": [
                {
                    "text": "Kirby",
                    "img_url": "media/kirby.jpg",
                    "outcome": ["fairy", "flying"]
                },
                {
                    "text": "The Legend of Zelda",
                    "img_url": "media/zelda.jpg",
                    "outcome": ["fairy", "grass", "dragon"]
                },
                {
                    "text": "Super Mario",
                    "img_url": "media/mario.jpg",
                    "outcome": ["normal", "ground"]
                },
                {
                    "text": "Minecraft",
                    "img_url": "media/minecraft.jpg",
                    "outcome": ["grass", "ground", "rock"]
                },
                {
                    "text": "Metroid",
                    "img_url": "media/metroid.jpeg",
                    "outcome": ["steel", "electric"]
                },
                {
                    "text": "Donkey Kong",
                    "img_url": "media/donkey-kong.jpg",
                    "outcome": ["fighting", "grass", "ground"]
                },
                {
                    "text": "Animal Crossing",
                    "img_url": "media/animal-crossing.jpg",
                    "outcome": ["grass", "bug", "water"]
                },
                {
                    "text": "Street Fighter",
                    "img_url": "media/street-fighter.jpg",
                    "outcome": ["fighting"]
                },
                {
                    "text": "Spyro",
                    "img_url": "media/spyro.jpg",
                    "outcome": ["dragon"]
                },
                {
                    "text": "Resident Evil",
                    "img_url": "media/resident-evil.jpg",
                    "outcome": ["dark", "ghost"]
                },
                {
                    "text": "Diablo",
                    "img_url": "media/diablo.png",
                    "outcome": ["fire"]
                },
                {
                    "text": "Dark Souls",
                    "img_url": "media/dark-souls.jpg",
                    "outcome": ["dark", "fairy"]
                },
                {
                    "text": "Splatoon",
                    "img_url": "media/splatoon.jpg",
                    "outcome": ["water", "fighting"]
                },
                {
                    "text": "The Sims",
                    "img_url": "media/sims.png",
                    "outcome": ["normal"]
                }
            ]
        },
        {
            "question": "What's your personality like?",
            "weight": "1.0",
            "answer_style": "text-only",
            "answers": [
                {
                    "text": "chill",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["ice", "normal"]
                },
                {
                    "text": "feisty",
                    "answer_bg": "rgb(255, 246, 170)",
                    "outcome": ["fire"]
                },
                {
                    "text": "bubbly",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["water", "electric", "fairy"]
                },
                {
                    "text": "outspoken",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["fighting"]
                },
                {
                    "text": "mysterious",
                    "answer_bg": "rgb(217, 206, 255)",
                    "outcome": ["dark", "ghost"]
                },
                {
                    "text": "toxic",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["poison"]
                },
                {
                    "text": "enchanting",
                    "answer_bg": "rgb(255, 246, 170)",
                    "outcome": ["dragon", "fairy"]
                },
                {
                    "text": "clever",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["psychic", "poison"]
                },
                {
                    "text": "daydreamer",
                    "answer_bg": "rgb(255, 246, 170)",
                    "outcome": ["flying", "fairy"]
                },
                {
                    "text": "dependable",
                    "answer_bg": "rgb(217, 206, 255)",
                    "outcome": ["rock", "steel"]
                },
                {
                    "text": "outdoorsy",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["grass", "bug"]
                },
                {
                    "text": "down to earth",
                    "answer_bg": "rgb(217, 206, 255)",
                    "outcome": ["ground"]
                },
                {
                    "text": "nurturing",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["grass", "fairy"]
                },
                {
                    "text": "free-spirited",
                    "answer_bg": "rgb(255, 246, 170)",
                    "outcome": ["flying"]
                },
                {
                    "text": "energetic",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["electric"]
                },
                {
                    "text": "adventurous",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["flying"]
                },
                {
                    "text": "determined",
                    "answer_bg": "rgb(217, 206, 255)",
                    "outcome": ["fighting"]
                },
                {
                    "text": "persistent",
                    "answer_bg": "rgb(255, 225, 216)",
                    "outcome": ["bug"]
                },
                {
                    "text": "resilient",
                    "answer_bg": "rgb(255, 246, 170)",
                    "outcome": ["rock", "steel"]
                },
                {
                    "text": "intuitive",
                    "answer_bg": "rgb(202, 227, 253)",
                    "outcome": ["psychic"]
                },
                {
                    "text": "passionate",
                    "answer_bg": "rgb(255, 246, 170)",
                    "outcome": ["fire"]
                }
            ]
        },
        {
            "question": "What type of Pokemon trainer do YOU think you'd be?",
            "weight": "1.1",
            "answer_style": "img-only",
            "answers": [
                {
                    "text": "normal",
                    "img_url": "media/normal-type.png",
                    "outcome": ["normal"]
                },
                {
                    "text": "fire",
                    "img_url": "media/fire-type.png",
                    "outcome": ["fire"]
                },
                {
                    "text": "water",
                    "img_url": "media/water-type.png",
                    "outcome": ["water"]
                },
                {
                    "text": "grass",
                    "img_url": "media/grass-type.png",
                    "outcome": ["grass"]
                },
                {
                    "text": "electric",
                    "img_url": "media/electric-type.png",
                    "outcome": ["electric"]
                },
                {
                    "text": "ice",
                    "img_url": "media/ice-type.png",
                    "outcome": ["ice"]
                },  
                {
                    "text": "fighting",
                    "img_url": "media/fighting-type.png",
                    "outcome": ["fighting"]
                },
                {
                    "text": "poison",
                    "img_url": "media/poison-type.png",
                    "outcome": ["poison"]
                },
                {
                    "text": "ground",
                    "img_url": "media/ground-type.png",
                    "outcome": ["ground"]
                },
                {
                    "text": "flying",
                    "img_url": "media/flying-type.png",
                    "outcome": ["flying"]
                },
                {
                    "text": "psychic",
                    "img_url": "media/psychic-type.png",
                    "outcome": ["psychic"]
                },
                {
                    "text": "bug",
                    "img_url": "media/bug-type.png",
                    "outcome": ["bug"]
                },
                {
                    "text": "rock",
                    "img_url": "media/rock-type.png",
                    "outcome": ["rock"]
                },
                {
                    "text": "ghost",
                    "img_url": "media/ghost-type.png",
                    "outcome": ["ghost"]
                },
                {
                    "text": "dragon",
                    "img_url": "media/dragon-type.png",
                    "outcome": ["dragon"]
                },
                {
                    "text": "dark",
                    "img_url": "media/dark-type.png",
                    "outcome": ["dark"]
                },
                {
                    "text": "steel",
                    "img_url": "media/steel-type.png",
                    "outcome": ["steel"]
                },
                {
                    "text": "fairy",
                    "img_url": "media/fairy-type.png",
                    "outcome": ["fairy"]
                }
            ]
        }
    ],

    "creator_tag": "made by xGigglypuff.",
    "support_button_text": "",
    "footer_columns": [
        {
            "heading": "Find Me",
            "links": [
                {
                    "text": "Twitter",
                    "url": "https://twitter.com/xGigglypuff"
                },
                {
                    "text": "Twitch",
                    "url": "https://www.twitch.tv/xGigglypuff/"
                },
                {
                    "text": "YouTube",
                    "url": "https://www.youtube.com/@xGigglypuff/featured"
                },
                {
                    "text": "Instagram",
                    "url": "https://www.instagram.com/gov.madison/"
                },
                {
                    "text": "Reddit",
                    "url": "https://www.reddit.com/user/xgigglypuff"
                }
            ]
        },
        {
            "heading": "The Quiz",
            "links": [
                {
                    "text": "Take It Again",
                    "url": ""
                },
                {
                    "text": "The Algorithm",
                    "url": "algorithm.html"
                }
            ]
        },
        {
            "heading": "Resources",
            "links": [
                {
                    "text": "Art Credits",
                    "url": "art-credits.html"
                },
                {
                    "text": "Code Resources",
                    "url": "code-resources.html"
                },
                {
                    "text": "Related Quizzes",
                    "url": "related-quizzes.html"
                }
            ]
        },
        {
            "heading": "More Pokemon!",
            "links": [
                {
                    "text": "Play the Games",
                    "url": "https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games"
                },
                {
                    "text": "Watch the Anime",
                    "url": "https://www.pokemon.com/us/animation"
                },
                {
                    "text": "Get Merch",
                    "url": "https://www.pokemoncenter.com/"
                }
            ]
        }
    ]
}
// retrieve the data
// used https://api.jquery.com/jquery.getjson/ as a resource

// append the data
// retrieves and appends header
$('title').append(data.title);
$('header').append(`<h1>${data.title}</h1>`);
$('header').append(`<img class="background-img" src="${data.header_image}"/>`);

// retrieves the questions
for (var i = 0; i < data.questions.length; i++)
{
  var q = data.questions[i];
  var question = q.question;
  var image = question.img_url;
  var background = question.answer_background;

  // appends the questions to the html structure + opening answer container tag
  $(".questions").append("<div class='question-container'>" + "<div class='question'>" + question + "</div>" + 
  "<div class='answer-container' id='a" + i + "'>");

  // retrieve the question's answers
  var answers = q.answers;
  var n = answers.length;
  for (var j = 0; j < n; j++)
  {
    // retrieve the style of the answer button
    var answerStyle = q.answer_style;
    var img = answers[j].img_url;
    
    // set up each answer button
    if (answerStyle === 'img-only') 
    {
        var answerButton = `<label class="img-only-label"><img class="img-text-IMG" src="${answers[j].img_url}"/><img class="hidden selector-img" src="${data.selector_image}"/><input type="radio" name="${i}" value="${j}"/></label>`;
        var answerId = `img${i}${j}`;
    }
    else if (answerStyle === 'img-text')
    {
        var answerButton = `<label><img src="${answers[j].img_url}"/><span>${answers[j].text}</span><input type="radio" name="${i}" value="${j}"/></label>`;
        var answerId = `imgtext${i}${j}`;
    }
    else if (answerStyle === 'bg-img-text')
    {
        var answerButton = `<label><span>${answers[j].text}</span><input type="radio" name="${i}" value="${j}"/></label>`;
        var answerId = `bgimgtext${i}${j}`;
    }
    else 
    {
        var answerButton = `<label>${answers[j].text}<input type="radio" name="${i}" value="${j}"/></label>`; // text-only
        var answerId = `text${i}${j}`;
    }
    
    // append the answer to the html structure answer container
    $(`#a${i}`).append("<div class='answer " + answerStyle + "' id='" + answerId + "'>" + answerButton + "</div>");

    // add background images and colors
    if (answerStyle === 'bg-img-text')
    {
        $("#" + answerId).css({"background-image": "url(" + answers[j].img_url + ")"});
    }
    else if (answerStyle === 'text-only')
    {
        $("#" + answerId).css({"background-color": answers[j].answer_bg});
    }

  // close the answer container and question container
  $(".questions").append("</div>" + "</div>");
  }
}

// create a class for unselected answers
$(".answer").click(function() {
    $(this).removeClass("not-selected");
    $(this).addClass("selected");
    $(this).siblings().addClass("not-selected");
    $(this).siblings().removeClass("selected");

    // add selector image to selected answer
    $(this).find(".selector-img").addClass("visible");
    $(this).find(".selector-img").removeClass("hidden");
    $(this).siblings().find(".selector-img").removeClass("visible");
    $(this).siblings().find(".selector-img").addClass("hidden");
  });

// retrieve the modal, button, and span to close
var modal = document.getElementById("myModal");
var errorModal = document.getElementById("errorMsg");
var submit = document.getElementById("submit");


$("#submit").on("click", function(e) {
    // gather all checked radio-button values
    var choices = $(".selected > label > input").map((i, radio) => {
        return $(radio).val();
      }).toArray(choices);
      // creates an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]

    // ensure all of the questions are answered
    if(choices.length !== data.questions.length) 
    {
        $(".error-container").append("<img class='errorImg' src='media/answer-all-questions.gif'/>");
        $(".error-container").removeClass("hidden");
        $(".error-container").addClass("visible");

        setTimeout(() => {$(".error-container").addClass("hidden"); $(".error-container").removeClass("visible");}, 5000);
        return;
    }

    var c = calculateResults(choices);

    // display the result
    var outcomeTitle = data.outcomes[c].type;
    var outcomeImg = data.outcomes[c].img;
    var outcomeText = data.outcomes[c].text;

    // unblock the modal display
    $("#resultsModal").removeClass("hidden");
    $("#resultsModal").addClass("visible");
    
    $(".modal-content").append("<div class='card'><h3>" + outcomeTitle  + "</h3> <img class='outcome-img' src='" + outcomeImg + "'/></div><p>" + outcomeText + "</p>");
    }
);

// close the modal with the "X" button
$("#close-modal").click(hideModal);

// *todo* close the modal when the user clicks outside of the modal window
window.onclick = function(event) {
    console.log(`event.target is ${event.target}`);
    // if (event.target == modal) {
    //     hideModal();
    // }
}

// try the quiz again + reset answers with the "Try Again" button
$("#try-again").click(hideModal, function() {
    // reset the quiz answers
    location.reload();

    // *todo* go back to the top of the page
    window.scrollTo(0,0);
  });

function calculateResults(choices) {
// create a map of the tally of each outcome's score 
var score = new Map();

for (i = 0; i < choices.length; i++)
{
    // store the answer in the results map
    var a = choices[i];
    var question = data.questions[i];
    var answer = question.answers[a];
    var outcomes = answer.outcome;
    var weight = question.weight;

    for (var j = 0; j < outcomes.length; j++)
    {
        var outcome = outcomes[j];

        const value = score.get(outcome);

        if (score.has(outcome))
        {
            score.set(outcome, value + (1 * weight));
        }
        else
        {
            score.set(outcome, (1 * weight));
        }
    }
}

return findMaxKey(score);
}

// resource: https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
function findMaxKey(map) {
    if (map.size === 0) 
    {
        return -1;
    }

    // convert to array to iterate over and compare elements
    var arr = Array.from(map);

    var maxValue = 0;
    var maxKey = "";

    arr.forEach((element) => {
        const key = element[0];
        const value = element[1];

        if (value > maxValue)
        {
            maxValue = value;
            maxKey = key;
        }
    });

    return maxKey;
}

function hideModal() {
    // reblock the modal display
    $("#resultsModal").removeClass("visible");
    $("#resultsModal").addClass("hidden");

    // clear the appended content in the modal
    $(".modal-content").empty();
}