function simple(n) {
    const simpleL = [2, 3];
    for (let i = 4; simpleL.length - 2 < n - 2; i++) {
        let flag = 1;
        for (let v = 2; v <= i-1; v++){
            if (i % v == 0) {
                flag = 0;
                break
            }
        }
        if (flag == 1){
            simpleL.push(i);
        }
    }
    return simpleL;
}
console.log(simple(process.argv[2]));