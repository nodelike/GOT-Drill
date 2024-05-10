function surnameWithS(houses){
    try{
        let people = []
    
        houses.forEach( house => {
            house.people.forEach( person => {
                let name = person.name.split(" ")
                if(name[name.length-1].includes("S")){
                    people.push(person.name)
                }
            });
        });
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.surnameWithS = surnameWithS;