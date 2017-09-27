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

        // Write for-loop to sum each element in the data array

        return sum;
    };
};