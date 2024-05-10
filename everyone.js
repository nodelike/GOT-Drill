function everyone(houses){
    try{
        let people = houses.reduce( (accumulator, house) => {
            house.people.forEach( person => {
                accumulator.push(person.name)
            });
            return accumulator;
        }, []);
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
    
}

module.exports.everyone = everyone;