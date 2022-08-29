class Cat{
    name;
    weight;
    maxspeed;
    constructor(name,weight,maxspeed){
        this.name = name;
        this.weight = weight;
        this.maxspeed = maxspeed;
    }
    talk(sound){
        alert(sound);
    }
    catchRat(rat){
        if(this.maxspeed> rat.speed){
            return true;
        }
        return false;
    }
    eatRat(rat){
        if(rat.status){
            rat.status = false;
            this.weight+= rat.getWeight();
            alert("trọng lượng mèo tăng:" + this.weight);
        }else{
            alert("chuột chết rồi mèo không thèm ăn !!");
        }
    }
}