function peopleNameOfAllHouses(houses){
    try{
        let result = {}
        houses.forEach( house => {
            let people = house.people.map( person => {
                return person.name;
            });
            result[house.name] = people;
        });
        
        return result;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.peopleNameOfAllHouses = peopleNameOfAllHouses;