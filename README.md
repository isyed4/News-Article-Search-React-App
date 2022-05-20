## Project title
 The Title of this Project is called 'Current News Engine'.

## Motivation
The motivation of this project was to give the user an easy and fast experience to keep up with the current news of the topics they are personally intereseted in. 

## Code style

Using standard JSX.
 
## Screenshots

![Screen Shot 2022-05-19 at 9 56 58 PM (2)](https://user-images.githubusercontent.com/101440413/169441611-214151b9-3719-4b6a-9470-c445ec5090d8.png)
<img width="1440" alt="Screen Shot 2022-05-19 at 9 57 53 PM" src="https://user-images.githubusercontent.com/101440413/169441624-367a9c3a-a8cc-4f07-9b6c-815c17f62a82.png">
<img width="1440" alt="Screen Shot 2022-05-19 at 9 58 02 PM" src="https://user-images.githubusercontent.com/101440413/169441629-d3568749-a937-4082-b4c0-aa093e5e1384.png">




## Tech/framework used

Built with React.Js

## Features

-Two search bars to find news articles by date and topic
-Able to add specific articles to the 'Reading List'
-Able to also remove specific articles from the Reading List
-Able to link to the article that opens up in another tab

## Code Example

fetch('https://newsapi.org/v2/everything?q={TOPIC}&from={DATE}&sortBy=popularity&apiKey=API_KEY')
.then(response => response.json())
.then(data => console.log(data))


## Credits
  Shout out to Jennifer Susan for the advice and being an awesome TA!
