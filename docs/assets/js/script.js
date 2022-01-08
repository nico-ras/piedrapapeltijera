
var attempts = parseInt(prompt("Cuantas veces quieres competir contra la maquina?", "1"));
var cards = ["piedra", "papel", "tijera"]; 
var humanWins = 0;
var machineWins = 0;
var draws = 0;

for (i = 0; i < attempts; i++) {
    var humanPlay = parseInt(prompt("Ingresa tu eleccion numerica segun tu eleccion:\n 1-piedra \n 2-papel \n 3-tijera"))-1;
                    //to string this number should be cards index number to select the string card
    var machinePlay = Math.floor(Math.random() * cards.length);
                    // to string logic cards[Math.floor(Math.random() * cards.length)];
    
    //with string logic instead number, should be string card`s name (humanPlay == 'piedra' && machinePlay == 'tijera') 
    console.log(humanPlay);

        if (humanPlay == 0 && machinePlay == 2 || humanPlay == 1 && machinePlay == 0 || humanPlay == 2 && machinePlay == 1) {
            alert(`Lanzaste ${cards[humanPlay]} y la maquina ${cards[machinePlay]}, haz ganado el duelo numero ${i+1}!!`);
            
            humanWins++;

        } else if (humanPlay == 2 && machinePlay == 0 || humanPlay == 0 && machinePlay == 1 || humanPlay == 1 && machinePlay == 2) {
            alert(`Lanzaste ${cards[humanPlay]} y la maquina ${cards[machinePlay]}, haz perdido el duelo numero ${i+1}!!`);
            
            machineWins++;

        } else if (humanPlay == machinePlay) {
            alert(`Lanzaste ${cards[humanPlay]} y la maquina ${cards[machinePlay]}, haz empatado con la maquina en el duelo numero ${i+1}!!`);
            draws++;

        } else {
            alert("Debes ingresar el numero correcto!!");
        }
  
}

if (machineWins < humanWins) {
    alert(`Con ${humanWins} encuentros a tu favor, ${machineWins} en contra y ${draws} empates, el gran ganador de la batalla eres TU!!`);
}else if(machineWins > humanWins) {
    alert(`Con ${humanWins} encuentros a tu favor, ${machineWins} en contra y ${draws} empates, el gran ganador de la batalla es La maquina!!`);
}else {
    alert(`Con ${humanWins} encuentros a tu favor, ${machineWins} en contra y ${draws} empates, esto es un empate!!`);
}

