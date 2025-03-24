// type properties = {name: string, uid: number|string} //type aliases

// let greet = (user: properties, department:string) =>{
//     console.log(`User is ${user.name} and ID is ${user.uid} and is at department ${department}`)
    
// }

// greet({
//     name:"faisal",
//     uid:"898898"
// }, "Computer Science")


// // function signature

// type data = {grade:string, clss: number}

// let woman : (statndard:data) => void;

// woman = (standard:data)=>{

//    console.log(`She is class ${standard.clss} so she is ${standard.grade}`);
// }

//classes

class Parent{

    name: string;
    Gender: string; 
    
    constructor(name:string, gender:string){
        this.name=name;
        this.Gender=gender

    }




    who(){
        if(this.Gender == 'male'){
            return "Father";
        }
        else{
            return "Mother"
        }
    }

   
}

const parent1 = new Parent("Halid", "male");
const parent2 = new Parent("Rahi", "female");

alert(parent1.who)

