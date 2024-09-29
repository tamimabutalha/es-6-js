class Teacher {
    constructor (name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is math teacher')
    }
}
const tapan = new Teacher ('tapon sir','English' )
console.log(tapan)