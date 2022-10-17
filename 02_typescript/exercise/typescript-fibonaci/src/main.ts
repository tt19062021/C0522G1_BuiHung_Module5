function sumFibonaci(listFibo: number): string {
    let fibo1: number = 0;
    let fibo2: number = 1;
    let fibo3: number;
    let sum: number = fibo1 + fibo2;
    let fibos: Array<number> = [0,1];

    for (let i = 2; i < listFibo; i++) {
        fibo3 = fibo1 + fibo2;
        fibos.push(fibo3);
        sum += fibo3;
        fibo1 = fibo2;
        fibo2 = fibo3;
    }
    return "Dãy fibonacci : ["+ fibos + "] Tổng số: " + sum;
}

console.log(sumFibonaci(5));

