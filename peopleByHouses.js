function peopleByHouses(houses){
    try{
        let counts = houses.reduce( (accumulator, house) => {
            let people = house.people.length
            accumulator[house.name] = people

            return accumulator
        }, {});
        
        return counts;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.peopleByHouses = peopleByHouses;