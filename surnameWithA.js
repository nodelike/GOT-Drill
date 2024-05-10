function surnameWithA(houses){
    try{
        let people = houses.reduce( (accumulator, house) => {
            house.people.forEach( person => {
                if(person.name.split(" ")[1].includes("A")){
                    accumulator.push(person.name);
                }
            });

            return accumulator;
        }, []);
    
        
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.surnameWithA = surnameWithA;