function surnameWithA(houses){
    try{
        let people = []
    
        houses.forEach( house => {
            house.people.forEach( person => {
                if(person.name.split(" ")[1].includes("A")){
                    people.push(person.name)
                }
            });
        });
        return people;
    } catch(error) {
        console.log(`Invalid input. ${error}`)
    }
}

module.exports.surnameWithA = surnameWithA;