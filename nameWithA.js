function nameWithA(houses){
    try{
        let people = houses.reduce( (accumulator, house) => {
            house.people.forEach( person => {
                if(person.name.toLowerCase().includes("a")){
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

module.exports.nameWithA = nameWithA;