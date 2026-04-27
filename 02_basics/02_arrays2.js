const marvel_heros= ["superman","spiderman","batman"]
const dc_heros= ["Ironman","flash","thor"];

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

/*
OUTPUT
[ 'superman', 'spiderman', 'batman', [ 'Ironman', 'flash', 'thor' ] ]
flash
*/


//const allHeros= marvel_heros.concat(dc_heros);
//console.log(allHeros);
/*
OUTPUT:   
[ 'superman', 'spiderman', 'batman', 'Ironman', 'flash', 'thor' ]
 */




const all_newHeros= [...marvel_heros,...dc_heros];
//console.log(all_newHeros);
/*
OUTPUT:   
[ 'superman', 'spiderman', 'batman', 'Ironman', 'flash', 'thor' ]
 */


const another_array=[1,2,3,4,[5,6,7],4,5,[3,4,[3,4]]]
const real_another_array= another_array.flat(Infinity)
//console.log(real_another_array);
/*
OUTPUT
[
  1, 2, 3, 4, 5, 6,
  7, 4, 5, 3, 4, 3,
  4
]
  */


/*
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
OUTPUT
false
[ 'H', 'i', 't', 'e', 's', 'h' ]

*/



let score1="sneha";
let score2=200;
let score3="ruhi";
console.log(Array.of(score1,score2,score3));

