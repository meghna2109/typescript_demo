function startGame() {

    let playerName : string = "Meghna";
    console.log(playerName);

    let messages : string | null =  canReturnNullOrString() ;
    let notNullMessgaes = messages;

    
}

function canReturnNullOrString() : string | null {
  return "IAmString";
}

function printLabel(labelledObj : {label: string}) {
    console.log(labelledObj.label);
    
}
startGame();

