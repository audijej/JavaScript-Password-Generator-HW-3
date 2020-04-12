# JavaScript-Password-Generator-HW-3

In this Homework Assignment, we were tasked with creating a functioning JavaScript file that will interact with the pre-built HTML and CSS files.

My methods for logically building a functioning code was:
    
    -List all my variables and arrays. This included all the characters, numbers and symbols that I wanted to include in my variables.

    -Building all the prompts, alerts and confirms.

    -Creating a function called buttonPassword that will use the input that the user chooses to include. This function included a while loop that must be answered before proceeding to the actual 'Generate Password' button. If the amount of characters selected is not within the parameters, the loop will keep asking the prompt until it fits the criteria.

     -The function buttonPassword also has several if statments that the user can select from when building their randome password. The if statements are confirm questions that must be answered with either true or false.

     -Another function called writePassword was created and includes a for loop that takes into account all the users input and creates a random password comprised of strings, integers and special characters.

     -After the function writePassword, the query selectors and event listeners were defined. This allowed the JavaScript to work synchroniously with the HTML element attributes to use the generated password and print onto the text area in the HTML file.
