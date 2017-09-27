describe("A calculator", function() {

	it("can sum 1+1", function () {
		var calc = new Calculator();
		var sum = calc.sum(1, 1);
		expect(sum).toEqual(2);
	});

	it("can sum 5+7", function () {
		var calc = new Calculator();
		var sum = calc.sum(5, 7);
		expect(sum).toEqual(12);
	});

	it("can subract 5-3", function () {
		var calc = new Calculator();
		var sub = calc.subtract(5, 3);
		expect(sub).toEqual(2);
	});

	it("can divide 10/5", function () {
		var calc = new Calculator();
		var div = calc.divide(10, 5);
		expect(div).toEqual(2);
	});

	it("can divide by zero", function () {
		var calc = new Calculator();
		var div = calc.divide(10, 0);
		expect(div).toBeNaN();
	});

	it("can sum an array with only numbers", function () {
		var calc = new Calculator();
		var sum = calc.sumArray([1, 2, 3, 4, 5, 6, 7]);
		expect(sum).toEqual(28);
	});
});