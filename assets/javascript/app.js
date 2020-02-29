$(document).ready(function() {
  // event listeners
  $("#remaining-time").hide();
  $("#start").on("click", trivia.startGame);
  $(document).on("click", ".option", trivia.guessChecker);
});

// trivia variables

var trivia = {
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  currentSet: 0,
  timer: 20,
  timerOn: false,
  timerId: "",

  // questions 1-10

  questions: {
    q1:
      'In S1E1 "Pilot": Who started their first day at Dunder Mifflin Scranton?',
    q2:
      'In S1E2 "Diversity Day": What famous comedian\'s stand up routine does Michael imitate?',
    q3:
      'In S1E3 "Health Care": Which of these is NOT one of Jim and Pam\'s made up diseases?',
    q4:
      "In S1E4 \"The Alliance\": How much money does Michael donate to Oscar's nephew's charity, not realizing it is a walk-a-thon and the ammount is per mile?",
    q5:
      'In S1E5 "Basketball": What small appliance of Pam\'s breaks down? (It was given to her at her engagement party three years earlier)',
    q6: 'In S1E6 "Hot Girl": What is the Hot Girl\'s name?',
    q7: 'In S2E1 "The Dundies": What Dundie award does Phyllis take home?',
    q8:
      'In S2E2 "Sexual Harassment": What is on Todd Packer\'s vanity license plate?',
    q9:
      'In S2E3 "Office Olympics": What does Pam name "Box of paper snowshoe racing"?',
    q10:
      'In S2E4 "The Fire": What are Meredit\'s five DVD choices for the game "Desert Island"?'
  },

  // options (4 total options) questions 1-10

  options: {
    q1: ["Jim Halpert", "Ryan Howard", "Michael Scott", "Erin Hannon"],
    q2: ["Chris Rock", "Richard Pryor", "Robin Williams", "George Carlin"],
    q3: [
      "Killer Nano Robots",
      "Hot Dog Fingers",
      "Spontaneous Dental Hydroplosion",
      "Hair Cancer"
    ],
    q4: ["$40", "$10", "$25", "$100"],
    q5: ["Toaster Oven", "Microwave", "Blender", "Coffee Maker"],
    q6: ["Amy", "Christy", "Kelly", "Katy"],
    q7: [
      "The Busiest Beaver Dundie",
      "The Bushiest Beaver Dundie",
      "Spicy Curry Dundie",
      "Whitest Sneakers Dundie"
    ],
    q8: ["LUVMKR", "WLHUNG", "TODPKR", "BGDADY"],
    q9: ["Flonkerton", "Icelandic Snowshoe Racing", "Bixing", "Pegerhosen"],
    q10: [
      "The Shawshank Redemption, 40 Year Old Virgin, Gentlemen Prefer Blondes, Disney's Sleeping Beauty, Life of Pi",
      "Gone With The Wind, The Burbs, Clerks II, Sense & Sensibility, Chronicles of Riddick",
      "Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)",
      "Fargo, Edward Scissor-hands, The Breakfast Club, Dazed and Confused, The Princess Bride"
    ]
  },

  // answers to questions 1-10
  answers: {
    q1: "Ryan Howard",
    q2: "Chris Rock",
    q3: "Hair Cancer",
    q4: "$25",
    q5: "Toaster Oven",
    q6: "Katy",
    q7: "The Bushiest Beaver Dundie",
    q8: "WLHUNG",
    q9: "Flonkerton",
    q10:
      "Legends of the Fall, Legally Blonde, Bridges of Madison County, My Big Fat Greek Wedding, Ghost (but just that one scene)"
  }
};
