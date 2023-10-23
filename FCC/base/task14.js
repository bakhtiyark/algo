function fibo(number){
    if (number === 1 || number === 0){
        return number
    }
    return fibo(number - 1) + fibo(number - 2)

}
console.log(fibo(7))