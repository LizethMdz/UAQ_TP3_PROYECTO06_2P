// function addCode(codestring) {
//     const codeArray = codestring.split(/\n/);
    
//     parseInput(codeArray);
//   }
  
//   function parseInput(codeArray) {
//     const codeObject = {};
  
//     codeArray.forEach((text, line) => {
//       const shouldContainInput = /€/.test(text);
  
//       if(shouldContainInput) {
//         codeObject[line] = [];
  
//         text.split('€').forEach(x => {
//           codeObject[line].push(x);
//         });
  
//       } else {
//         codeObject[line] = text;
//       }
//     });
    
//     printHTML(codeObject);
//   }
  
//   function printHTML(codeObject) {
//     const parentElement = document.createElement('div');
//     parentElement.className = 'code-parent';
  
//     for(let prop in codeObject) {
//       const line = codeObject[prop];
//       if(typeof line === 'string') parentElement.innerHTML += createLine(line);
//       else parentElement.innerHTML += createInputLine(line);
//     }
    
//     el('.code-container').appendChild(parentElement);
//     setTimeout(() => {
//       all('.code-input').forEach((input, key) => {
//         input.addEventListener('keydown', handleKeydown);
//         input.setAttribute('data-key', key);
//       });
//     });
//   }
  
//   function createLine(text) {
//     return '<p class="p" >' + text + '</p>';
//   }
  
//   function createInputLine(textArray) {
//     let inputLine = '<p>';
    
//     textArray = textArray.map(text => {
//       if(/°/.test(text)) {
//         const filteredText = text.replace(/°/g, '');
//         const characterWidth = 12;
//         text = `<input class="code-input unanswered"style="width: ${filteredText.length * characterWidth}px" data-answer="${filteredText}"></input>`;
//       }
      
//       return text;
//     }).join('');
    
//     inputLine += textArray + '</p>';
    
//     return inputLine;
//   }
  
//   function handleKeydown(e) {
//     const target = e.target;
//     const value = e.target.value + e.key;
//     const answer = e.target.getAttribute('data-answer');
  
//     if(value === answer) {
//       target.value = value;
//       target.classList.remove('unanswered');
//       target.classList.add('correct-answer');
//       target.setAttribute('disabled', 'true');
  
//       if(!el('.unanswered')) {
//         renderLevel();
//       } else {
//         const focusIndex = +target.getAttribute('data-key') + 1;
//         setTimeout(() => all('input')[focusIndex].focus());
//       }
      
//     }
//   }
  
//   let levels = {
//     easy: 
//   [
//   [`
//   Permiten que una persona se destaque de otra, sobre todo cuando 
//   se tienen desarrollados los buenos modales:
//     €°habilidades blandas°€;
//   `],
//   [`
//   Si bien en el ámbito laboral, las habilidades €°duras€° 
//   se pueden aprender y 
//   son necesarias para realizar las actividades correctamente;
//   `]
//   ],
//     medium:
//   [
//   [`
//   De esta habilidad depende, en gran medida, el éxito de los proyectos.
//   ¿Cual es? €°comunicacion€°;
//   `],
//   [ 
//   `
//   Las organizaciones buscan personal con 
//   proactividad, capaz de enfrentar 
//   problemas y encontrar soluciones 
//   oportunas en el menor tiempo posible.
//   €°toma de decisiones€°;
//   `
//   ]
//   ],
//     hard: [
//   [`
  // Los trabajadores que tienen la capacidad de manejar
  // favorablemente su actitud en el trabajo
  // ¿Cuál es?
  // €°actitud positiva€°;
  
//   `],
//   [
//       `
//       Tener liderazgo y dejar de lado la competencia entre 
//       miembros del mismo equipo, son puntos muy valorados, 
//       con los que se logrará el cumplimiento de 
//       objetivos, de una manera más eficaz.
//       ¿Cuál es?
//       €°trabajo en equipo€°;
//       `
//   ]
//   ]
//   };
  


var preguntas = [
  ['Permiten que una persona se destaque de otra, sobre todo cuando '
  +'se tienen desarrollados los buenos modales:','habilidades blandas'],
  ['Si bien en el ámbito laboral, las habilidades ..... se pueden aprender y son necesarias para realizar las actividades correctamente;','duras'],
  ['De esta habilidad depende, en gran medida, el éxito de los proyectos. ¿Cuál es?', 'comunicacion'],
  ['Los trabajadores que tienen la capacidad de manejar favorablemente su actitud en el trabajo ¿Cuál es?','actitud positiva'],
  ['Tener liderazgo y dejar de lado la competencia entre miembros del mismo equipo','trabajo en equipo'],
  ['Capaz de enfrentar problemas y encontrar soluciones oportunas en el menor tiempo posible', 'toma de decisiones'],
  ['Entre las más buscadas figuran las habilidades comunicativas y de ..........','relacionamiento']
],
pregunta, respuesta,
formuladas = 0,
acertadas = 0;


hacerPregunta();

document.getElementById('boton').addEventListener('click', function(){
  var entrada = document.getElementById("dato").value;
  if (entrada == respuesta){
      acertadas++;
  }

  if(formuladas < 5){
      hacerPregunta();
  }else{
      mostrarResultado();
  }
});


function hacerPregunta(){
  var aux;

  aux = preguntas.splice(numAleat(0, preguntas.length-1),1);
  pregunta = aux[0][0];
  respuesta = aux[0][1];

  document.getElementById('preg').innerHTML = pregunta;
  document.getElementById('dato').value= '';
  formuladas++;
}

function mostrarResultado(){
  var resultado;      // para guardar el mensaje con el resultado
  switch(acertadas){
      case 0:
          resultado = 'No has acertado una sola pregunta, toca estudiar :-/';
          break;
      case 1:
          resultado = 'Bueno, al menos has acertado una pregunta :-)';
          break;
      case 2:
          resultado = 'Solo 2 preguntas acertadas de 5. Toca mejorar.';
          break;
      case 3:
          resultado = 'No está mal, 3/5 acertadas.';
          break;
      case 4:
          resultado = 'Muy bien, has acertado 4 preguntas :-)';
          break;
      case 5:
          resultado = '¡EXCELENTE, has acertado todas las preguntas! :-D';
          break;
  }

  document.getElementById('resolucion').innerHTML = resultado;
}


function numAleat(min, max){
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}