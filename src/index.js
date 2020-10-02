
exports.min = function min (array) {
  if (!array || !array.length) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
};

exports.max = function max (array) {
     if (!array || !array.length) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
};

exports.avg = function avg (array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        let avg = total / array.length;
        return avg;
    }
};
