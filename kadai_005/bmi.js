const weight = 68;
const height= 1.7;

const CalculateBMI = (w, h) => {
    return w / (h ** 2);
}

const bmi = CalculateBMI(weight, height);
console.log(bmi);