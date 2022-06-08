//those are the arrays who contain the pieces of the Village//


const vSize = ['a small outpost', 'a medium sized hamlet', 'big sized Village'];
const vAge = ['something between 300 and 1000 years old', 'something between 100 and 300 years old', 'something between 50 and 100 years old', 'freshly built'];
const vRulerOddity = ['cruel', 'weak', 'greedy', 'wise', 'eccentric', 'confused', 'brutal', 'cunning', 'stern', 'secretive', 'drunkard'];
const vRulerType = ['Council', 'Despot', 'Elder', 'Mayor', 'Druid', 'Sorcerer', 'Commander', 'trader', 'bandit chief', 'Artisan'];
const vProblem = ['it seems like they are having problems with nocturnal creatures', 'it seems like they are having problems with widespread Drunkness', 'it seems like they are having problems with a secret cult', 'it seems like they are having problems with a religious schism', 'it seems like they are having problems with undead', 'it seems like they are having problems with a disease', 'it seems like they are having problems with a sinkhole that suddenly appeared in the middle of the village', 'it seems like they are having problems bandits', 'it seems like they are having problems a terrorizing monster', 'it seems like they are having problems a slave trader', 'it seems like the whole village is being haunter by a ghoul or a ghost'];
const vClaim = ['their excellent wine', 'their delicious bread', 'their craftmanship', 'their beautifull location', 'a terrible massacre', 'being in decadence', 'their locally well-brewed beer', 'a series of strange disappearances', 'supposedly worshipping demons', 'being suspicious of every stranger who aproaches', 'their hospitality' ];
const vOddity = ['their eccentric clothing', 'their incomprehensible accent', 'their terrible smell', 'being covered by flowers all the year', 'having the worst muddy roads you can imagine', 'using everything you can imagine to build their houses but NEVER wood or rock', 'having no houses, just lots of tents of every size shape and color you can imagine', 'being built in a really steep hill', 'having that huge old tower in the middle', 'being windy all the year', 'being populated by a bunch of inbreed assholes', 'their disgusting cuisine', 'being built in platforms allover the marshland', 'being cut out of a cliff', 'their old burial site', 'their wandering cattle', 'being mostly inhabited by women', 'supposedly being allied with a monster'];
const vInnOddity = ['you can smell the violence is in the air', 'you notice there are barrels and planks instead of tables and chairs', 'you notice that the fireplace is HUGE for an inn this size', 'you see the walls, who are almost clompletly covered by pelts', 'you notice that instead of a bunch of tables, there is just one long communal table for the whole place', 'if you are paying attention, you will notice, that the inn is actually a gambling den', 'the first you notice is that their bard is terrible', 'you see there is a really nice dog you would love to pet', 'you meet the owner, who is a really grumpy bastard', 'the first thing that catches your attetion is the monster head hanging on the wall', 'you hear the waiter is singing happily while serving the tables', 'you notice that the floor is stomped', 'it looks like you just interrupted a birthday party', 'you see there are a bunch of drunk adventurers drinking on the counter'];
const vInnSpeciality = ['it also looks like their speciality is some kind of very cheap diluted beer', 'it also looks like their speciality is some kind of meat stew that smells really nice', 'it also looks like their speciality is some kind of stewed turnips', 'it also looks like their speciality is some kind of very cheap diluted beer', 'it also looks like their speciality is some kind of disgusting blood soup', 'it also looks like their speciality is some kind of fiery spiced wine', 'it also looks like their speciality is greasy roasted piglet', 'it also looks like their speciality is some kind of swamp stew', 'it also looks like their speciality is some kind of vegetable mush', 'it also looks like their speciality is some kind of salted fish that smeels like rotten', 'it also looks like their speciality is... is that a crow in the stew?', 'it also looks like their speciality is a really strong smelling bear stew', 'it also looks like their speciality is some really strong dwarven ale'];
const vInnGuest = ['there is also a really unhappy farmer, drinking on the counter', 'there is also a woman, that really looks like a scarred treasure hunter', 'there is also a dirty and sullen hunter sitting in the table', 'there is also a really noisy bandit, bragging about their last robbery', 'there is also an old war veteran with a woodden leg, sitting in one corner back to the wall', 'there is also a really annoying jester, trying to be fun'];
const vInnName1 = ['The third', 'The little', 'The red', 'The misty', 'The bloody', 'The Old', 'The Golden', 'The Cold', 'The Refreshing', 'The good', 'The second', 'The last', 'The thisty', 'The prancing', 'The Happy', 'The singing', 'The rolling', 'The Rumpling','The wailing', 'The Greedy', 'The Round', 'The flaming', 'The Silver', 'The Black', 'The dead', 'The big', 'The roaring', 'The cheering', 'The humming', 'The meagre', 'The fat', 'The thick', 'The Round', 'The Sweet', 'The Boisterous', 'The grumpy'];
const vInnName2 = ['Lantern', 'Swine', 'Wheel', 'stoop', 'Sparrow', 'Goat', 'Arrow', 'Pot', 'Lamb', 'Maid', 'Man', 'Dragon', 'Griffin', 'Boar', 'Barrel', 'Bard', 'Dog', 'Horse', 'Girl', 'Wolf', 'Bear', 'Ghost', 'Rat', 'Dagger', 'Jar', 'Mug', 'Goblet', 'Eagle', 'Ravem', 'Hammer', 'Spike', 'Crow', 'Druid', 'Knight', 'Bandit', 'Wild Boar', 'Hunter'];
const vName = ["Copstage", "Innswood", "Northwick", "Inkdon", "Summerton", "Helenton", "Presthorpe", "Barnsey", "Ashbourne", "Butterpond", "Darlajex", "Kriggan", "Sweetmount", "Arsington", "Timbersprout", "Donaville", "Goldpeak", "Windrest", "Kingsford", "Clericsfold", "Wickerton", "Goodminton", "Eagletree", "Knightsroost", "Hawksmoor", "Hillcrest", "Fiddlegreen", "Dogsbody", "Hutton", "Starling", "Swallowbeak", "Dundertun", "Vintnerdale", "Pottersfield", "Gracey Peaks", "Hevensbreath", "Heathenschurch", "Windybrook", "Snowygap", "Rainvalley", "Lakedon", "Bridgefalls", "Gettys Peak", "Crestbourne", "Mintwillow", "Ropewalker", "Ryefield", "Cornhenge", "Beaksdale", "Meadhaven", "Boarsrest", "Goldcrest", "Elkhorn", "Merryhall", "Winters End", "Blythewood", "Fleet Landing", "Bowens Island", "Tugby", "Crudgington", "Nettlebed", "Clontoe", "Whiteparish", "Ballycommon", "Ilton", "Headlam", "Budbrooke", "Chell Heath", "Ilminster", "Swanley", "Crow", "Canonbury", "Wroxham", "Mancot Royal", "Ballycrissane", "Theydon Bois", "Alwalton", "Petersham", "Penrhyn-Llŷn", "Catfield", "Curdridge", "Warninglid", "Lissycasey", "Althorp", "Ashwell", "Woodchurch", "Bardsey Island", "Palgrave", "Messing", "Bierton", "Cliftonville", "Uisge-Labhair", "Rath", "Benwick", "Cowlinge", "Blockley", "Brafferton", "Hammersmith", "Wallasey", "Cowling", "Oweninny", "Wychavon", "Chatwell", "Little Bridge", "Bunowen", "Purton", "Skinningrove", "Ecclesfield", "Notton", "Drumbrughas", "Lyrenagreena", "Wiggenhall", "Curraghlawn", "Tickenham", "Clent", "Leek Wootton", "Barham", "Curragh", "Braunton", "Wesham", "Mamble", "Cumnock", "Farthinghoe", "Tandragee", "Orcheston", "Springthorpe", "Ounageeragh", "Faxfleet", "Bloxholm", "Elmley", "Worlingworth", "Ashdown Forest", "Ballycrossaun", "Wolsingham", "Corrandulla", "Blackwood", "Ballinameen", "Lifford", "Rainow", "Grianan", "Rainhill", "Stow", "Milston", "Uppington", "Ashcott", "Troutbeck", "Uplowman", "Allerthorpe", "Tandridge", "Tay", "Alvechurch", "Munsley", "Offley", "Lettermullan", "Pickworth", "Ousefleet", "Sollom", "Illston on the Hill", "Codrington", "Brotherton", "Branxton", "Babbacombe", "Killarney", "Pyecombe", "Snaefell", "Fife", "Avonmouth", "Marlborough", "Aller", "Willand", "Dewlish", "Ballymartin", "Rodbourne", "Casnewydd Green", "Woodstock", "Totternhoe", "Tindale", "West", "Crux Easton", "Mere", "Morvah", "Ballyheelan", "Treforys", "Hawick", "Weybread", "Kesgrave", "Ashmansworth", "Casnewydd-ar-Wysg", "Braemar", "Bredfield", "Tibthorpe", "Ardsheelane", "Aberavon", "Peckleton", "Penistone", "Wakerley", "Soulby", "Tilford", "Veryan", "Bowthorpe", "Eriskay", "Upwaltham", "Winson", "Lenham", "Freckenham", "Ballygub", "Wimpstone", "Portpatrick", "Orgreave", "Hedley on the Hill", "Appledore", "Blatchington", "Gortnahoe", "Astley", "Glanaman", "Ballyboghal", "Tain", "Shrigley Pott", "Musbury", "Bridgnorth", "Spen", "Ewyas Harold", "Patrington", "Beeford", "Bardney", "Palace", "Pollokshields", "Penarlâg", "Sporle", "Portloman", "Crewe", "Siefton", "Chilwell", "Berrow Green", "Dalwhinnie", "Hilborough", "Wartnaby", "Peterborough", "Alexandria", "Castley", "Midgham", "Ystumllwynarth", "Pitney", "Skendleby", "Grindon", "Ullauns", "Hinstock", "Ballyconneely", "Tetchill", "Shrough", "Saint Bees", "Farthinghoe", "Harlow Hill", "Attenborough", "Elvetham", "Chiddingstone", "Ewell", "Harvenset", "Wishleaf", "Grendale", "Felderford", "Stagcross", "Threaders Hollow", "Ashpoint", "Ravenwood", "Starrynight", "Saint Michaelsheights", "Featherfall", "Featherfoot", "Wundwin", "Maubid", "San Serif", "Orcsnout", "Sevenclaw", "Crag", "Wishbone", "Wagonrut", "Endtown", "Mangle", "Plodburg", "Twindleton", "Hollybranch", "Silverton", "Dalmhurst", "Smackover", "Underthal", "Little Peachingston", "Cripple Creek", "Riddle Reach", "Guildingston", "Jebend", "Shorley-Knott", "Aeby-on-Sea", "Smolton", "Hunose-Weir", "Fockery", "Neistermeechia", "Shavebury", "Downloe", "Supbrough", "Tiltonsville", "Glen Robins", "Mount Pleasant", "Martins Ferry", "Deep Run", "Elm Grove", "Shadyside"]
//those are the arrays who contain the pieces of the dungeon//










//those are the arrays who contain the pieces of the castle//












//main function// 


const generate = (input) => {

let variable = input.toLowerCase();

if (variable === "village") {
    console.log(`After a long walk along the trail, the party discovered a ${vSize[Math.floor(Math.random() * vSize.length)]}, the name of the village seems to be ${vName[Math.floor(Math.random() * vName.length)]}, judging by the shape of the buildings, the village must be ${vAge[Math.floor(Math.random() * vAge.length)]}, this village is specially well known in the region for ${vClaim[Math.floor(Math.random() * vClaim.length)]}, but is also famous for ${vOddity[Math.floor(Math.random() * vOddity.length)]}, in this village there is also an Inn, "${vInnName1[Math.floor(Math.random() * vInnName1.length)]} ${vInnName2[Math.floor(Math.random() * vInnName2.length)]} ", if you enter this Inn ${vInnOddity[Math.floor(Math.random() * vInnOddity.length)]}, ${vInnSpeciality[Math.floor(Math.random() * vInnSpeciality.length)]}, if you look closer to each of the regulars, you notice ${vInnGuest[Math.floor(Math.random() * vInnGuest.length)]}; apparently, in this village, ${vProblem[Math.floor(Math.random() * vProblem.length)]}, and their ruler, a ${vRulerOddity[Math.floor(Math.random() * vRulerOddity.length)]} ${vRulerType[Math.floor(Math.random() * vRulerType.length)]} is not really dealing with the problem. Would the party stop by and try to help this humble people?`)
} else {
    console.log('It is only possible to generate villages at this moment')
}

};

generate('village'); 

