exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0
    } else {
        let minValue = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minValue && typeof (array[i]) === 'number') {
                minValue = array[i];
            }
        }
        return minValue;
    }
}

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
        return 0
    } else {
        let maxValue = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxValue && typeof (array[i]) === 'number') {
                maxValue = array[i];
            }
        }
        return maxValue;
    }
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        return 0
    } else {
        let sum = 0;
        let count = 0;
        let avgValue = 0;
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) != 'number') {
                return 0
            } else {
                sum += array[i];
                count++;
                avgValue = sum / count;

            }

        }
        return avgValue
    }
}
