const crypto = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
This is a script for creating random
hash strings quickly.

Compeletely free to use & modify.
*/

// Get byte count from user
let recursiveQuery = async function () {
    
    // Ask user input using readline
    rl.question("Length of the hash: ", byteCount => {

        // If byteCount is a string
        if (typeof byteCount === "string") {

            // Try to parse the string into an integer
            try {

                // Convert byte count to integer
                let byteCountInt = parseInt(byteCount);

                // Create a random hash
                const hash = crypto.randomBytes(byteCountInt).toString("hex");
                console.log(hash);

                // Close the query
                rl.close();

                // Exit process with exit code 0
                process.exit(0);

            // If parsing fails
            } catch(error) {

                // Recall the query recursively
                recursiveQuery();

            }

        }

    })

}

recursiveQuery();