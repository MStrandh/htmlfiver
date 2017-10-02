function Calculator() {
    this.sum = function(l, e) {
        return l+e;
    };
    
    this.subtract = function(l, e) {
        return l-e;
    };

    this.divide = function(l, e) {
        if(e==0){
            return NaN;
        }

        return l/e;
    };

    this.sumArray = function(data) {
        var sum = 0;

        for (i = 0; i < data.length; i++) {
            sum += data[i];
        }

        return sum;
    };
};