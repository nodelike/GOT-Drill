function peopleByHouses(houses){
    try{
        let counts = {}
    
        houses.forEach( house => {
            let people = house.people.length
            counts[house.name] = people
        });
        return counts;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.peopleByHouses = peopleByHouses;