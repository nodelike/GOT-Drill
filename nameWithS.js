function nameWithS(houses){
    try{
        let people = houses.reduce( (accumulator, house) => {
            house.people.forEach( person => {
                if(person.name.toLowerCase().includes("s")){
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

module.exports.nameWithS = nameWithS;