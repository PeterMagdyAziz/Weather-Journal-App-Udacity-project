const zipCodes = [90209, 60601, 10001]; // array of zip codes
let i = 1;

const timer = ms => new Promise(res => setTimeout(res, ms)); // created Promise to make the delays


async function test () { 
    for (const zCode of zipCodes) {
        await timer(5000); // delay for opening the page and checking the console area first
        console.log(zCode); // to check the zip code in the console same as the zip shown on the 
        document.getElementById("zip").value = zCode; // setting the value of zip code
        document.getElementById("feelings").innerHTML = "Hello, this is test number " + i; // setting the string for the feeling
        document.getElementById("generate").click(); // clicking the generate button
        await timer(1500);// a delay to get data from api 
        console.log( document.getElementById("zip").value); // to check that zip code equal to the one given
        console.log(document.getElementById("date").innerHTML); // checking the o/p
        console.log(document.getElementById("temp").innerHTML);  // checking the o/p
        console.log(document.getElementById("content").innerHTML); // checking the o/p
        i++; // for the string
      await timer(2000); // delay for the data to be displayed an seen on screen
    }
    i=1;
}

test(); // calling the test function
