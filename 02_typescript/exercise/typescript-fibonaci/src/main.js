function sumFibonaci(listFibo) {
    var fibo1 = 0;
    var fibo2 = 1;
    var fibo3;
    var sum = fibo1 + fibo2;
    var fibos = [0, 1];
    for (var i = 2; i < listFibo; i++) {
        fibo3 = fibo1 + fibo2;
        fibos.push(fibo3);
        sum += fibo3;
        fibo1 = fibo2;
        fibo2 = fibo3;
    }
    return "Dãy fibonacci : [" + fibos + "] Tổng số: " + sum;
}
console.log(sumFibonaci(5));
