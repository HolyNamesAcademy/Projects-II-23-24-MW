# Project Team
- Maddy
- Fiona 
- josie :3
- Emery
- anaiysaa!!! :D

# Java Spring Web Server

This is a Web Server application, modified from the Spring MVC serving web content tutorial repository (found [here](https://github.com/spring-guides/gs-serving-web-content)).
A Web Server is an application that receives HTTP requests and returns web pages.
Spring is a framework that we use to write our web server.
It implements a bunch of features that are common to all web servers so we can focus on the portions that unique to our application.

# Getting Started

Here, we have a basic "Hello World" web server. Fork this repository to quickly get your project set up with some starter code.

The server works out of the box, and allows you to send 2 requests:

- **/**: this is the home page of our website
- **/hello**: this is a sub page that you can navigate to

Below are instructions to get the server running using 2 possible methods.

## Via Command Line

Here are the steps to getting started via command line or terminal:

1. Run git clone on your repo and then `cd` into the root folder of your repo.

2. Run gradlew build to compile the application (On Windows `.\gradlew build`, on Mac `./gradlew build`).

3. Run graldew bootRun to run the server (Windows `.\gradlew bootRun`, Mac `./gradlew bootRun`).

## Via IntelliJ

Here are the steps to getting started via IntelliJ:

1. Click on to File > New > Project from Version Control.

2. Paste in the link to your GitHub repository. Click "Clone". If it asks you to chose between Gradle and Eclipse, choose Gradle.

3. If you see a toast notification in the bottom right about Gradle ("IntelliJ IDEA found a Gradle build script"), select "Import Gradle project".

3. Once the project loads, you can press the build button on the toolbar on the top right to compile the project, and you can press the play/debug buttons to run/debug the server.

## Interacting with the Server

Once you run the server using either method above, you can send requests to the server and receive responses.
The request you send will be in the form of a url (such as https://www.wikipedia.org) and the response you receive is an HTML document (plus CSS and JavaScript) that your browser parses to display the web page.

1. Open a browser and navigate to `http://localhost:8080/`. `localhost` is a special keyword that tells the browser that the server is on your own computer instead of somewhere else on the internet.
   `8080` is the port number on your computer that the server is listening to and waiting for requests on.
   You should see a message that says "Get your greeting here".

2. Navigate to `http://localhost:8080/hello`. The server sees `/hello` in the url and knows to give you a different HTML document than before. You should see "Hello, World!".

3. Navigate to `http://localhost:8080/hello?name=Bob`. You should see "Hello, Bob!".
   You can change Bob in the url to a different name, and it should change the displayed message.

You now have the website up and running on your local computer.
That's great because you can now develop features, make changes, and easily test them out, but the site is only visible on your computer.
The next step is to deploy your website to the internet so everyone else can see it too.

# Deploying Your App to Heroku

The very first task we will do after getting set up is to deploy our website.
This means anyone will be able to access the website from their computer just like they can access https://www.wikipedia.org.
We're going deploy first so that we can follow an agile methodology.That means we start with a working product, and then we add features as we go.
Our product is always in a "complete" state, because we'll always have a working website.

In order to deploy the app, follow these steps:

1. Go [here](https://signup.heroku.com/) and create a Heroku account. Get the account verified and then go to the [Heroku dashboard](https://dashboard.heroku.com/apps).

2. Select "Create new app". Give your app a name, and then select "Create App". The name you enter will be part of the url.

3. In the "Deployment Method" section on the next page, click on GitHub and then "Connect to GitHub" and enter your GitHub info.

4. Enter the name of the repo that you created above and then select "Connect".

5. Select "Enable Automatic Deploys".

6. Select "Deploy Branch".

7. It will take a few minutes to deploy. In the meantime, you should see some logs being output, and a loading bar. Once deploy finishes, click "View". You should see your app deployed to an actual url (like https://hna-test.herokuapp.com).

8. Your teammates should be able to access it from their computers, so give them the link and make sure it works.
   If you forget the link, you can always find it by going to the [Heroku Dashboard](https://dashboard.heroku.com/apps), clicking on your app, and then selecting "Open App".

That's it! You have a working website!  Of course the interesting -- and fun -- part comes next: turning your website into something unique and useful! 

 