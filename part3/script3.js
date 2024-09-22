function getRandomInt(min, max) {
    const random1 = Math.random();
    const random2 = random1*(max-min +1);
    const random3 =Math.floor(random2);
    const result= random3 + min;
    return result;
    }
    console.log(getRandomInt(1, 10)); // Random integer between 1 and 10
   
    //exp min=1 , max=5
    function Random1(min,max){
    const first = Math.random();
    const second = first * (max - min + 1);
    const third = Math.floor(second);
    const result = third + min;
    return result;
    }
    console.log(Random1(1,5));