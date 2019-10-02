class User{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    hasAccess(){
        return this.name === "James";
    }
}

class NullUser{
    constructor(){
        this.id = -1;
        this.name = "Guess";
    }
}