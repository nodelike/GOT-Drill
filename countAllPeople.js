function countAllPeople(houses){
    try {
        let result = houses.reduce( (accumulator, house) => {
            accumulator += house.people.length
            return accumulator;
        }, 0);

        return result;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.countAllPeople = countAllPeople;