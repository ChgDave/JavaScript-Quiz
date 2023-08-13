# 04 Web APIs: Code Quiz

## Description

This project is week for challenge of the NW full-stack coding bootcamp. We are required to build a JavaScript Coding Quiz website where the user can take a quiz in a limited amount of time and check their scores at the end.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Usage

```
- When first open the web site, you have the option to click the button to start the game or view the highscores.
- Once the game starts, the timer will start and you will be presented with the quiz questions.
- User will have 60 seconds to finish the quiz.
- For each questions answered correctly, the user will gain 20 points.
- For each questions answered incorrectly, the user will lose 10 points and lose 10 seconds of quiz time as penalty.
- The quiz ends when the user answered all the questions or the timer runs out of time.
- After the game ends, the user will be asked to type in Initials to store their score.
- After the Initials were submitted, the players initials with their scores will be displayed on the highscore list.
- At the highscore list, the user will have the options to either go back to retake the test, or clear the highscores list.
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Github Repo Link

The link for the github repository for this project is:
https://github.com/ChgDave/JavaScript-Quiz

## URL Deployment Link

The link for the deployed website for this project is:
https://chgdave.github.io/JavaScript-Quiz/

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
