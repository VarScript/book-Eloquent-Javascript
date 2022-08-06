    
//Establece un entorno para su diario
let diary = [];
//definiendo la funcion
function addEntry(events, squirrel) {
    diary.push({events, squirrel})
}
//anadiendo las entradas
addEntry(["work", "i touch a tree", "pizza", "i went out to run", "tv"], false);
addEntry(["work", "ice cream", "couliflower", "lasagna", "i touch a tree", "i brushed the teeths"], false);
addEntry(["weekend", "i mounted the bike", "break", "walnuts"], true);




//calculando la correlacion 
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
             (table[0] + table[1]) *
             (table[1] + table[3]) *
             (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434




//Conuar  cuántas veces ocurre el evento en relación a las transformaciones de ardilla
function tableFor(event, diary) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < diary.length; i++) {
        let entry = diary[i], index = 0;
        if (entry.events.include(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]




//En la función tablaPara, hay un ciclo como este:
for (let i = 0; i < DIARIO.length; i++) {
        let entry = DIARIO[i];
        // Hacer con algo con la entry
    }
//Este tipo de ciclo es común en JavaScript clasico—ir a traves de los arrays un elemento a la vez es algo que surge mucho. Esta el la forma moderna:
for (let entry of DIARIO) {
    console.log(`${entry.events.length} events.`);
    }
//Cuando un ciclo for se vea de esta manera, con la palabra of (“de”) después de una definición de variable, recorrerá los elementos del valor dado después of.



//encontrar cada tipo de evento.
function eventDiary(diary) {
    let events = [];
    for (let entry of diary) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(eventsDiary(DIARY));
// → ["zanahoria", "ejercicio", "fin de semana", "pan", …]


//ver todos las correlaciones

for (let event of eventDiary(DIARY)) {
    console.log(event + ":", phi(tableFor(event, DIARY)));
}
// → zanahoria: 0.0140970969
// → ejercicio: 0.0685994341
// → fin de semana: 0.1371988681
// → pan: -0.0757554019
// → pudin: -0.0648203724
// and so on...



for (let event of eventsDiary(DIARY)) {
    let correlation = phi(tablaPara(event, DIARY));
    if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
    }
    }
    // → fin de semana: 0.1371988681
    // → me cepille los dientes: -0.3805211953
    // → dulces: 0.1296407447
    // → trabajo: -0.1371988681
    // → spaghetti: 0.2425356250
    // → leer: 0.1106828054
    // → nueces: 0.5902679812
    
for (let entry of DIARY) {
    if (entry.events.includes("walnuts") &&
        !entry.events.includes("i brushed the teeths")) {
     entry.events.push("teeths with walnuts");
    }
}
        
console.log(phi(tableFor("teeths with walnuts", DIARY)));
// → 1















//==========================BOOK======================================//

var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];
  
  // This makes sure the data is exported in node.js —
  // `require('./path/to/journal.js')` will get you the array.
  if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
    module.exports = JOURNAL;
  if (typeof global != "undefined" && !global.JOURNAL)
    global.JOURNAL = JOURNAL;



    var journal = [];

    function addEntry(events, squirrel) {
      journal.push({events, squirrel});
    }
    
    function phi(table) {
      return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
    }
    
    function tableFor(event, journal) {
      let table = [0, 0, 0, 0];
      for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
      }
      return table;
    }
    
    function journalEvents(journal) {
      let events = [];
      for (let entry of journal) {
        for (let event of entry.events) {
          if (!events.includes(event)) {
            events.push(event);
          }
        }
      }
      return events;
    }
    
    function max(...numbers) {
      let result = -Infinity;
      for (let number of numbers) {
        if (number > result) result = number;
      }
      return result;
    }
    
    var list = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null
        }
      }
    };

// Run code here in the context of Chapter 4

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
  }
  // → brushed teeth: -0.3805211953
  // → work:          -0.1371988681
  // → reading:        0.1106828054

