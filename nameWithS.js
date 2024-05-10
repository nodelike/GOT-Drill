function nameWithS(houses){
    try{
        let people = []
    
        houses.forEach( house => {
            house.people.forEach( person => {
                if(person.name.toLowerCase().includes("s")){
                    people.push(person.name)
                }
            });
        });
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.nameWithS = nameWithS;