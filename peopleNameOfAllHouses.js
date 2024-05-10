function peopleNameOfAllHouses(houses){
    try{
        let result = houses.reduce( (accumulator, house) => {
            let people = house.people.map( person => {
                return person.name;
            });
            accumulator[house.name] = people;

            return accumulator;
        }, {});
        
        return result;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.peopleNameOfAllHouses = peopleNameOfAllHouses;