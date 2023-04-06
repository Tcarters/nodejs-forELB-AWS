// const randomPoem  from './poem-gen'; Use my generated poem because package `random-poems` has some bugs 
// const randomPoems2 = require('random-poems');
const express = require('express');
const randomPoem = require('./poem-generated'); //Use my generated poem because package `random-poems` has some bugs
const fs = require('fs');
const app = express();
const port = 8080; //Change cause of AWS Elastic BeanStalk don't accept it --> 7000;

app.listen( port, () => console.log (`🚀 Server running at http://127.0.0.1 on ${port}`) );

// REST API

// Create default route for home Page 
app.get('/', (req, res) => {
    html = fs.readFileSync('index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});

// Create the poem Page
app.get('/poem', (req, res) => {
    // Generate a random poem using the poem-generator package
    const poem =  randomPoem(); // use this one randomPoems2() when my the package `random-poems` bugs fixed

    // Format the poem with HTML tags
    const formattedPoem = `
        <div style="text-align:center">
            <h1 style="font-style:italic">
                    😜 Random Poem 🤪  
            </h1>
            <pre style="text-align:left">
                ${poem}
            </pre>
            <p> Refresh the page to get Random Poem, Enjoy 🤸... <br /><a href="/"> Returning Home ... </a> </p>
            <br />
            <footer> 
                <div> 
                <center>
                    <i> Made with 💕 By <a href='https://github.com/Tcarters/' target='_blank'>Tcarters Edmund</a> a.k.a tcdocker2021</i>|<span style='padding-bottom: 50px;'>Share Love & Peace<sup>&copy;</sup>2023.</span>  
                </center> 
                </div> 
            </footer>
        </div>`;

    // Send the poem as a response to the client
    res.send(formattedPoem);
   
});
