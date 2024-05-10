function nameWithA(houses){
    try{
        let people = houses.reduce( (acc, house) => {
            house.people.forEach( person => {
                if(person.name.toLowerCase().includes("a")){
                    acc.push(person.name)
                }
            });
            return acc;
        }, []);
        
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.nameWithA = nameWithA;