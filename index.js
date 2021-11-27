function RandGen (min, max) {
    if (min >= max) {
        return 'Минимум должен быть меньше  максимума';
      } else {
    return Math.round(Math.random() * (max - min) + min);
    	}
}

console.log(RandGen(2,100));
console.log(RandGen(100,2));
