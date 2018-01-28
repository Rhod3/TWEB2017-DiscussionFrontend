# Frontend for the [LozziKit/microservice-discussions](https://github.com/LozziKit/microservice-discussions/tree/ft-3-crud-refactor)

This AngularJS project is an example of frontend implementation for the discussions microservice developped in the AMT course at the HEIG-VD. It was developped using [generator-angm](https://github.com/newaeonweb/generator-angm) as a base.

It uses an intermediate working version of the microservice. Thus, you can only post, edit and delete a comment, and also reply to one.

Here is a screenshot of the comment section of the website running locally:

![Screenshot of the comment section](/images/screenshot.PNG "Comment section")

You can see a few specific things:
* You can only nest comment to one level (purely arbitrary choice)
* You can't delete a comment if it has replies, for esthetics reasons (if you delete a comment that has replies, it only delete its message, which his weird looking for a user).
* You have to give an AuthorID to post a comment. The reason for that is that the discussions microservice doesn't implement the user microservice, so we have to give a user ID manually.

## How to run it
If you want to test this project locally, you first have to run the microservice.

### Run the microservice
* `git clone` the [microservice](https://github.com/LozziKit/microservice-discussions)
* `git checkout ft-3-crud-refactor` to switch to the correct branch
* Open the project on IntelliJ
* Run it with the given configuration (named *Swagger2SpringBoot*)

### Run the AngularJS project
* `git clone` this repo
* `npm install`
* `bower install`
* `grunt dev`

The website should now automatically open on your browser.