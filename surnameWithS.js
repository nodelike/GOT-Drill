function surnameWithS(houses){
    try{
        let people = houses.reduce( (accumulator, house) => {
            house.people.forEach( person => {
                let name = person.name.split(" ")
                if(name[name.length-1].includes("S")){
                    accumulator.push(person.name)
                }
            });

            return accumulator;
        }, []);
    
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.surnameWithS = surnameWithS;