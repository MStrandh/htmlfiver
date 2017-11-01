describe("Boat tools", function() {

	describe("has a function called getHarbour", function() {


		/***************** TEST ****************/
		it("that exists", function() {
			getHarbour();

			expect(getHarbour).toBeDefined();
		});


		/***************** TEST ****************/
		it("that returns a harbour when called", function() {
			var portName = getHarbour();

			expect(portName).toEqual("Gröndal");
		});
	});

	describe("has a function called getBoatName", function() {

		/***************** TEST ****************/
		it("that exists", function() {
			getBoatName();

			expect(getBoatName).toBeDefined();
		});


		/***************** TEST ****************/
		it("that accepts a parameter", function() {
			var boatName = getBoatName("Jehander");

			expect(getBoatName.length).toBe(1, "getBoatName needs to accept one parameter");
		});


		/***************** TEST ****************/
		it("that returns a boat name string when called with a boat name", function() {
			var boatName = getBoatName("Jehander");

			expect(boatName).toBe("Båten Jehander", "It should return \"Båten Jehander\"");
		});


		/***************** TEST ****************/
		it("that handles different boat names", function() {
			var boatName = getBoatName("Östanvik");

			expect(boatName).toBe("Båten Östanvik", "It should return \"Båten Östanvik\"");
		});


		/***************** TEST ****************/
		// it("that returns an empty string when no parameter is passed in", function() {
		// 	var boatName = getBoatName("");

		// 	expect(boatName).toBe("", "Hint: use if-clause to check the parameter");
		// });
	});
});