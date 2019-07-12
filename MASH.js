function mash(){
    let house = "house"
    return(house);
}


function getHome(){
    let getHome = ["Mansion", "Apartment", "Shack", "House"];
    getHome.push(process.argv[2])
    return (getHome[Math.floor(Math.random() * getHome.length)]);
}

function getCar(){
    let getCar = ["Lambo", "Convertable", "Box with Wheels", "Jeep", "Hotwheels toy car", "Roller Skates", "Your Mom"];
    return(getCar[Math.floor(Math.random() * getCar.length)])
}






function getChildrenCount(){
    let percentChance = Math.random()

    if(percentChance < 0.5){
        let getChildrenCount = Math.floor(Math.random() * 100)
        return(getChildrenCount)

    }else{
      
        return(process.argv[3])
    } }


    function Str(){
        let Str = ["Strong", "Weak", "Fast", "Slow", "Smart", "Stupid", "Famous", "a Nobody"];
        return(Str[Math.floor(Math.random() * Str.length)]);

    }

    console.log("You will live in a " + getHome() + " and you will have " + getChildrenCount() + " children. You may also drive a " + getCar() + " and you are " + Str() + ".")
