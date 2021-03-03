/*
Author: William Anderson
Assignment: New Technologists Application Coding Question

This program accepts an array as a parameter, then returns the index value at which the sum of elements with a lower index value in the array is equal to that of elements with a greater index value.
The file also includes a test function which runs the function using values provided in the question prompt.
*/

//Main function
function balanced(arr){ //Define function, takes in an array as a parameter
    //This function accepts an array, then returns the index at which the sum of elements with a lower index value is equal to that of the greater index values.
    let res = -1; //Define variable to hold result, starts as -1 (the requested default result).
    let lowerSum = arr[0]; //Instantiate variable to hold lower sum or array, starts with a value equal to the first element.
    let upperSum = 0 //Define variable to hold upper sum of array values
    let aL = arr.length //Define variable for length of array, exists to simplify code and avoid rewriting arr.length in full.
    if(aL < 3){ //Check if array length is less than 3, as 3 is the shortest length at which a split can occur.
        return res; //Return default value as there is no way the array can be split evenly.
    };
    for(i = 1; i < aL; i++){ //Cycle through values of the array excluding the first. The first is excluded since it is part of the lower sum.
        upperSum += arr[i]; //Add each value to the upper sum.
    };
    for(i = 1; i < aL; i++){ //Cycle through all values of array excluding the first (the first value is not a valid split).
        //This sequence subtracts an index value from the upper sum, compares the sums (making the current index the split) then adding the split to the lower sum.
        upperSum -= arr[i]; //Subtract the current index from the upper sum.
        if(lowerSum == upperSum){//Compare the two sums.
            res = i; //If the sums are equal, the condition is fulfilled and the current index is set.
        };
        lowerSum += arr[i];//Add current index value to lower value.
    };
    return res;//Return the result.
};

//Tests
function balancedTestReport(arr){
    //This function exists to format tests into a string which provides context
    console.log(`The array ${arr} fulfils the condition at index value ${balanced(arr)}`);
};

function tests(arr){//Accepts an array of arrays to test.
    for(i in arr){//Loops through parameter array.
        balancedTestReport(arr[i]);//Runs the test reporting function on each array listed in the parameter array.
    };
};

testArrays = [[-8, 2, 6, 2, -5, 4, 1],[2, 4, 6],[4, -3, 5, 1, 2, 5, -1],[16, 8, 2, 4, 4, 6],[2, 4, 4, 0, -3, 3, 1, 6],[2, 3, 5, 5, 2]]; //Array of example arrays from prompt.
tests(testArrays); //Run test function.