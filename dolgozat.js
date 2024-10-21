function digitsAverage(number)
{
   
    var db = 0;
    var ossz = 0;
    var n = number.toString()
    for(var i = 0; i<n.length; i++){
        db++;
        let asd = n[i]
        ossz += parseInt(asd)
    }
    return ossz/db
}


function isLeapYear(ev)
{
    if(ev % 4 == 0){
        if(ev.toString().endsWith("00") && ev % 400 == 0 ){
            return true
        } else if(ev.toString().endsWith("00") && ev % 400 != 0){
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

function cuboid(a, b, c) 
{
    if(a <=0 || b <=0 || c <=0 ){
        return [0,0]
    }

    const surface = 2 * ((a*b) + (a*c) + (b*c));
    const volume = a * b * c;

    return [surface,volume]
   
}

function divisors(number)
{   
    let tomb = []

    for(var i = 1; i<number+1; i++)
    {
        if(number%i==0){
            tomb.push(i)
        }
    }
    return tomb
}

console.log(digitsAverage(268))
console.log(isLeapYear(28))
console.log(cuboid(10.4, 13.5, 8.2))
console.log(divisors(10))