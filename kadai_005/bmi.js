const weight = 68;
const height= 1.7;

const CalculateBMI = (w, h) => {
    const bmi = w / (h ** 2) ;
    return bmi;
}

const ans = CalculateBMI(weight, height);
console.log(ans);