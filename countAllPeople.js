function countAllPeople(houses){
    try {
        let result = houses.reduce( (acc, house) => {
            acc += house.people.length
            return acc;
        }, 0);

        return result;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.countAllPeople = countAllPeople;