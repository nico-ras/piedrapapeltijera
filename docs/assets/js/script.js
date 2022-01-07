
var attempts = parseInt(prompt("Cuantas veces quieres competir contra la maquina?", "1"));
var cards = ["piedra", "papel", "tijera"]; 
var humanWins = 0;
var machineWins = 0;
var draws = 0;

for (i = 0; i < attempts; i++) {
    var humanPlay = cards[parseInt(prompt("Ingresa tu eleccion numerica segun tu eleccion:\n 1-piedra \n 2-papel \n 3-tijera"))-1];
    
    var machinePlay = cards[Math.floor(Math.random() * cards.length)];

    

    console.log(humanPlay);
    console.log(machinePlay);

        if (humanPlay == "piedra" && machinePlay == "tijera" || humanPlay == "papel" && machinePlay == "piedra" || humanPlay == "tijera" && machinePlay == "papel") {
            alert(`Lanzaste ${humanPlay} y la maquina ${machinePlay}, haz ganado el duelo numero ${i+1}!!`);
            
            humanWins++;

        } else if (humanPlay == "tijera" && machinePlay == "piedra" || humanPlay == "piedra" && machinePlay == "papel" || humanPlay == "papel" && machinePlay == "tijera") {
            alert(`Lanzaste ${humanPlay} y la maquina ${machinePlay}, haz perdido el duelo numero ${i+1}!!`);
            
            machineWins++;

        } else if (humanPlay == machinePlay) {
            alert(`Lanzaste ${humanPlay} y la maquina ${machinePlay}, haz empatado con la maquina en el duelo numero ${i+1}!!`);
            draws++;

        } else {
            alert("Debes ingresar una de las tes opciones correctamente escrita y sin mayusculas!! duelo anulado!!!");
        }
  
}

if (machineWins < humanWins) {
    alert(`Con ${humanWins} encuentros a tu favor, ${machineWins} en contra y ${draws} empates, el gran ganador de la batalla eres TU!!`);
}else if(machineWins > humanWins) {
    alert(`Con ${humanWins} encuentros a tu favor, ${machineWins} en contra y ${draws} empates, el gran ganador de la batalla es La maquina!!`);
}else {
    alert(`Con ${humanWins} encuentros a tu favor, ${machineWins} en contra y ${draws} empates, esto es un empate!!`);
}

