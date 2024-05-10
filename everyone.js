function everyone(houses){
    try{
        let people = []

        houses.forEach( house => {
            house.people.forEach( person => {
                people.push(person.name)
            });
        });
    
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
    
}

module.exports.everyone = everyone;