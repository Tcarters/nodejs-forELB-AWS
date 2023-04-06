
## Step 1: Create the client app directory 
```bash
    
    mkdir webapp & cd webapp

```

## Step 2: Initialize the Nodejs project

```bash
    npm init -y 
```

## Step 3:  Install Express package
```bash

    npm install express random-poems
    npm install -g nodemon

```

## Step 4: Create the `app.js` file 
```bash
    ## The file `app.js` will contain the business logic for our nodejs Express server will reside.
    touch app.js

```

## Step 5: Add content to `app.js` file 
```Javascript
    // const randomPoem  from './poem-gen'; Use my generated poem because package `random-poems` has some bugs 
    // const randomPoems2 = require('random-poems');
    const express = require('express');
    const randomPoem = require('./poem-generated'); //Use my generated poem because package `random-poems` has some bugs
    const fs = require('fs');
    const app = express();
    const port = 8080;  //ELB don't accept this 7000;

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

    
```

##  Serve HTML content by creating an `index.html` Html file
```Html
    ### Inside this file, We add the following HTML with a link to the REST endpoint we created earlier to show how it connects to the backend.
    <html>
    <head>
        <title>Elastic Beanstalk App</title>
    </head>

    <body style="font-family: 'Verdana', 'Helvetica Neue', 'sans-serif'; font-size: 20px; ">
        <center>
            <h1>Small Node App for AWS Elastic Beanstalk</h1>

            <p  style="font-size: '36px' "> If You here that means, your are working on your something good !!! <br /> <i>Keep Going Buddy...</i></p> <br />

            <h3>To deploy a web application to AWS, you may need the following services:  </h3>
            <p>
            <br />
                <strong><em>Amazon Elastic Compute Cloud (EC2):</em></strong> This service provides scalable computing capacity in the cloud. You can use EC2 to launch virtual servers, which can be used to run your web application. <br />

                <strong><em>Amazon Relational Database Service (RDS)</em></strong>: This service provides managed database instances that can be used to store your application data. RDS supports several popular database engines, such as MySQL, PostgreSQL, and Oracle. <br />

                <strong><em>Amazon Simple Storage Service (S3)</em></strong>: This service provides object storage for your web application. You can use S3 to store static assets like images, videos, and documents. <br />

                <strong><em>Amazon Elastic Load Balancer (ELB)</em></strong>: This service can distribute incoming traffic across multiple EC2 instances running your web application. ELB provides high availability, scalability, and fault tolerance for your application. <br />

                <strong><em>Amazon Route 53</em></strong>: This is a scalable domain name system (DNS) service that can be used to route traffic to your web application. Route 53 provides global DNS resolution, health checks, and traffic management features. <br />

                <strong><em>Amazon CloudFront</em></strong>: This service can be used to deliver your static content (e.g. images, videos, and documents) to users around the world with low latency and high transfer speeds. <br />

                <strong><em>AWS Identity and Access Management (IAM)</em></strong>: This service provides security and access control for your AWS resources. You can use IAM to manage user accounts, permissions, and roles. <br />

                <strong><em>Amazon CloudWatch</em></strong>: This service provides monitoring and logging capabilities for your web application. You can use CloudWatch to monitor your EC2 instances, RDS instances, and ELB instances, as well as to collect and analyze log data from your application. <br />

                <strong><em>AWS Elastic Beanstalk</em></strong>: This service can be used to quickly deploy and manage your web application in the cloud. Elastic Beanstalk provides a platform that automatically scales and manages your application resources based on demand. <br />

            Overall, the services you need to deploy your web application to AWS may depend on your specific requirements and architecture.
            </p>

            <br />
            &#129383; <a href="/poem"> A Small gift is waiting for you here ... </a> &#129383;
        </center>

        <br />
        <br />
        <footer> 
            <div> 
            <center>
                <i> Made with &#128151; By <a href='https://github.com/Tcarters/' target='_blank'>Tcarters Edmund</a> a.k.a tcdocker2021 &#128512;</i> |<span style='padding-bottom: 50px;'>Share Love & Peace<sup>&copy;</sup>2023.</span>  
            </center> 
            </div> 
        </footer>

    </body>
</html>

```

## Step 6:  Modify the  `script` part of `package.json ` content 
```Json
     "scripts": {
        "start": "node app.js"
  }
    
```

## Step 7: Start the App
```bash
    npm start or nodemon app.js ## If you have nodemon installed locally
```


## Small View

![image](https://user-images.githubusercontent.com/71230412/229656088-bf1d89ee-4139-468a-8c79-59cd6ab1b49a.png)
