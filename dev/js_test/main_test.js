describe("Boat tools", function() {

	describe("can compare boats", function() {	


		/***************** TEST ****************/
		/*
		 * Hint: Make sure isTugBoat returns false
		 */
		it("to verify that a boat is not a tug boat", function() {
			var result = isTugBoat("Östanvik");

			expect(result).toEqual(false);
		});


		/***************** TEST ****************/
		/*
		 * Pseudo code:
		 * - Check if boatName equals "Leif"; use the operator: ==
		 * - If it does not equal "Leif", then return false
		 *
		 * Hint:
		 * - Use console.log(..) often; See if you can print 'boatName' to see what is passed in as a parameter.
		 * - Double-check your strings. "Leif" is not the same as "leif".
		 * - You only need to use if(..) { ..}; you don't need an else for this.
		 * - Remember that 'return' ends the function. Nothing else will happen after return.
		 */
		// it("to verify that a boat is a tug boat", function() {
		// 	var result = isTugBoat("Leif");

		// 	expect(result).toEqual(true);
		// });


		/***************** TEST ****************/
		/*
		 * Hint: Make sure isCementCarrier returns false
		 */
		// it("to verify that a boat is not a cement carrier", function() {
		// 	var result = isCementCarrier("Leif");

		// 	expect(result).toEqual(false);
		// });

		/***************** TEST ****************/
		/*
		 * Hint: If boatName is equal to Östanvik then return true
		 */
		// it("to verify that a boat is a cement carrier", function() {
		// 	var result = isCementCarrier("Östanvik");

		// 	expect(result).toEqual(true);
		// });

	});


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