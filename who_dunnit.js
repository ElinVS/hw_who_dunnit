

// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.


// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

//No errors:
//Return: The murderer is Miss Scarlett


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//We get a type error as it is trying to change the constant variable murderer
// if const murderer where let this would run with the outcome The murderer is Mrs Peacock
//if you take out changeMurderer() it also runs and returns The murderer is Professor Plum


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// The first console.log looks into the declareMurderer where the variable within that scope is changed to Mrs Peacock by using let

//First Verdict: The murderer is Mrs Peacock
//Second Verdict: The murderer is Professor Plum


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// The first concole.log looks into the scope of the declareAllSuspects. The second console.log references the variables at the top.

//The Suspects are Miss Scarlet, Professor Plum, Colonel Mustard
//Suspect three is Mrs Peacock

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

//Eventhough its a const you can change the value of the key. The changeWeapon variable contains a function which updates the value of the scenario.weapon key

//The weapon is the revolver


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// murderer is a let ie it can be changed.
//changeMurderer first changes it to mr Green but because contains another function pltTwist within the scope and plotTwist() is called at the end of the scope then murderer is updated to Mrs White. If you comment out plotTwist() you get Mr Green
// The murderer is Mrs White



// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//      let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//     plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Can't figure this one out.Something to do with the let keyword for the variable on the plotTwist

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

  //Because plot twist contains the unexpectedOutcome it passes through its arguments
//   The weapon is Candle Stick

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//The murderer is Professor Plum
// In the if statement because the variable has a let keyword you are only changing the variable within that scope. In this scope let it be this. Take away the let keyword and the murderer will now be re-assigned to Mrs Peacock

const scenario = {
    murderer: 'John',
    room: 'Hopper Room',
    weapon: 'Rubber Duck'
};

let changeMurderer = function() {
    scenario.murderer = 'Stuart'

changeMurderer = function(plotTwist) {
    scenario.murderer = plotTwist
}

changeMurderer('Hanseul');

}

changeMurderer()
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer} with the ${scenario.weapon}`;
}


const verdict = declareMurderer();
console.log(verdict);
























