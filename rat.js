class Rat{
    name;
    weight;
    speed;
    constructor(name,weight,speed, status){
        this. name= name;
        this.weight = weight;
        this.status = status;
        this.speed = speed;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;

    }
    getSpeed(){
        return this.speed;
    }
    talk(sound){
        alert(sound);
    }
    getStatus(){
        return this.status;
    }
}