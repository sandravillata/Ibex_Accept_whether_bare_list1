// var shuffleSequence = seq("consent", "instructions", "instructions2", "intro_training", sepWith("sep", seq("practice", "intro_test", shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");


var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq(startsWith("practice"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");


var showProgressBar = false;


var defaults = [
    
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "",
        ignoreFailure: true,   // if true never displays an error message
    },
    
    "DashedSentence", {
        mode: "self-paced reading",
        blankText: "+",
        display: "in place",
        showAhead: false,
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "",
        leftComment: "(Very bad)", rightComment: "(Very good)"
    },
    "Question", {
        as: [["1"], ["2"]],
        autoFirstChar:true,
        presentHorizontally: false,
        randomOrder: false,
        showNumbers: true,
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];


var items = [

    ["sep", "Separator", { }],
    
    ["consent", "Form", {consentRequired: true, html: {include: "consent.html" }} ],
            
    ["exit", "Form", {consentRequired: false, html: {include: "exit_MTurk.html" }} ],

    ["instructions", "Form", {consentRequired: false, html: {include: "instructions.html" }} ],
      
    ["open_ended_question1", "Form", {consentRequired: false, html: {include: "open_ended_question1.html" }} ],
    ["open_ended_question2", "Form", {consentRequired: false, html: {include: "open_ended_question2.html" }} ],
   

 

// test


// item 1
[["test.that.wh.1.1",1],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you think that the patron ate?"], ["2", "What do you think that the patron ate the omelette?"]]}],

[["test.that.do.2.1",1],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you think that the patron ate?"], ["2", "Do you think that the patron ate the omelette?"]]}],

[["test.whether.wh.3.1",1],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you wonder whether the patron ate?"], ["2", "What do you wonder whether the patron ate the omelette?"]]}],

[["test.whether.do.4.1",1],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you wonder whether the patron ate?"], ["2", "Do you wonder whether the patron ate the omelette?"]]}],

[["test.transposed.wh.5.1",1],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you that think the patron ate?"], ["2", "What do you that think the patron ate the omelette?"]]}],

[["test.transposed.do.6.1",1],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you that think the patron ate?"], ["2", "Do you that think the patron ate the omelette?"]]}],



// item 2
[["test.that.wh.1.2",2],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you think that the candidate solved the problem?"], ["2", "What do you think that the candidate solved?"]]}],

[["test.that.do.2.2",2],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you think that the candidate solved the problem?"], ["2", "Do you think that the candidate solved?"]]}],

[["test.whether.wh.3.2",2],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you wonder whether the candidate solved the problem?"], ["2", "What do you wonder whether the candidate solved?"]]}],

[["test.whether.do.4.2",2],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you wonder whether the candidate solved the problem?"], ["2", "Do you wonder whether the candidate solved?"]]}],

[["test.transposed.wh.5.2",2],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you that think the candidate solved the problem?"], ["2", "What do you that think the candidate solved?"]]}],

[["test.transposed.do.6.2",2],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you that think the candidate solved the problem?"], ["2", "Do you that think the candidate solved?"]]}],



// item 3
[["test.that.wh.1.3",3],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you think that the housekeeper folded?"], ["2", "What do you think that the housekeeper folded the jumper?"]]}],

[["test.that.do.2.3",3],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you think that the housekeeper folded?"], ["2", "Do you think that the housekeeper folded the jumper?"]]}],

[["test.whether.wh.3.3",3],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you wonder whether the housekeeper folded?"], ["2", "What do you wonder whether the housekeeper folded the jumper?"]]}],

[["test.whether.do.4.3",3],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you wonder whether the housekeeper folded?"], ["2", "Do you wonder whether the housekeeper folded the jumper?"]]}],

[["test.transposed.wh.5.3",3],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you that think the housekeeper folded?"], ["2", "What do you that think the housekeeper folded the jumper?"]]}],

[["test.transposed.do.6.3",3],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you that think the housekeeper folded?"], ["2", "Do you that think the housekeeper folded the jumper?"]]}],



// item 4
[["test.that.wh.1.4",4],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you think that the student attended the workshop?"], ["2", "What do you think that the student attended?"]]}],

[["test.that.do.2.4",4],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you think that the student attended the workshop?"], ["2", "Do you think that the student attended?"]]}],

[["test.whether.wh.3.4",4],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you wonder whether the student attended the workshop?"], ["2", "What do you wonder whether the student attended?"]]}],

[["test.whether.do.4.4",4],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you wonder whether the student attended the workshop?"], ["2", "Do you wonder whether the student attended?"]]}],

[["test.transposed.wh.5.4",4],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you that think the student attended the workshop?"], ["2", "What do you that think the student attended?"]]}],

[["test.transposed.do.6.4",4],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you that think the student attended the workshop?"], ["2", "Do you that think the student attended?"]]}],



// item 5
[["test.that.wh.1.5",5],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you think that the attendee packaged?"], ["2", "What do you think that the attendee packaged the television?"]]}],

[["test.that.do.2.5",5],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you think that the attendee packaged?"], ["2", "Do you think that the attendee packaged the television?"]]}],

[["test.whether.wh.3.5",5],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you wonder whether the attendee packaged?"], ["2", "What do you wonder whether the attendee packaged the television?"]]}],

[["test.whether.do.4.5",5],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you wonder whether the attendee packaged?"], ["2", "Do you wonder whether the attendee packaged the television?"]]}],

[["test.transposed.wh.5.5",5],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you that think the attendee packaged?"], ["2", "What do you that think the attendee packaged the television?"]]}],

[["test.transposed.do.6.5",5],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you that think the attendee packaged?"], ["2", "Do you that think the attendee packaged the television?"]]}],



// item 6
[["test.that.wh.1.6",6],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you think that the girl misplaced the necklace?"], ["2", "What do you think that the girl misplaced?"]]}],

[["test.that.do.2.6",6],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you think that the girl misplaced the necklace?"], ["2", "Do you think that the girl misplaced?"]]}],

[["test.whether.wh.3.6",6],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you wonder whether the girl misplaced the necklace?"], ["2", "What do you wonder whether the girl misplaced?"]]}],

[["test.whether.do.4.6",6],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you wonder whether the girl misplaced the necklace?"], ["2", "Do you wonder whether the girl misplaced?"]]}],

[["test.transposed.wh.5.6",6],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you that think the girl misplaced the necklace?"], ["2", "What do you that think the girl misplaced?"]]}],

[["test.transposed.do.6.6",6],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you that think the girl misplaced the necklace?"], ["2", "Do you that think the girl misplaced?"]]}],



// item 7
[["test.that.wh.1.7",7],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you think that the thief avoided?"], ["2", "What do you think that the thief avoided the checkpoint?"]]}],

[["test.that.do.2.7",7],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you think that the thief avoided?"], ["2", "Do you think that the thief avoided the checkpoint?"]]}],

[["test.whether.wh.3.7",7],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you wonder whether the thief avoided?"], ["2", "What do you wonder whether the thief avoided the checkpoint?"]]}],

[["test.whether.do.4.7",7],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you wonder whether the thief avoided?"], ["2", "Do you wonder whether the thief avoided the checkpoint?"]]}],

[["test.transposed.wh.5.7",7],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you that think the thief avoided?"], ["2", "What do you that think the thief avoided the checkpoint?"]]}],

[["test.transposed.do.6.7",7],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you that think the thief avoided?"], ["2", "Do you that think the thief avoided the checkpoint?"]]}],



// item 8
[["test.that.wh.1.8",8],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you think that the hunter chased the bear?"], ["2", "What do you think that the hunter chased?"]]}],

[["test.that.do.2.8",8],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you think that the hunter chased the bear?"], ["2", "Do you think that the hunter chased?"]]}],

[["test.whether.wh.3.8",8],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you wonder whether the hunter chased the bear?"], ["2", "What do you wonder whether the hunter chased?"]]}],

[["test.whether.do.4.8",8],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you wonder whether the hunter chased the bear?"], ["2", "Do you wonder whether the hunter chased?"]]}],

[["test.transposed.wh.5.8",8],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you that think the hunter chased the bear?"], ["2", "What do you that think the hunter chased?"]]}],

[["test.transposed.do.6.8",8],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you that think the hunter chased the bear?"], ["2", "Do you that think the hunter chased?"]]}],



// item 9
[["test.that.wh.1.9",9],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you think that the boyfriend edited?"], ["2", "What do you think that the boyfriend edited the letter?"]]}],

[["test.that.do.2.9",9],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you think that the boyfriend edited?"], ["2", "Do you think that the boyfriend edited the letter?"]]}],

[["test.whether.wh.3.9",9],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you wonder whether the boyfriend edited?"], ["2", "What do you wonder whether the boyfriend edited the letter?"]]}],

[["test.whether.do.4.9",9],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you wonder whether the boyfriend edited?"], ["2", "Do you wonder whether the boyfriend edited the letter?"]]}],

[["test.transposed.wh.5.9",9],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you that think the boyfriend edited?"], ["2", "What do you that think the boyfriend edited the letter?"]]}],

[["test.transposed.do.6.9",9],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you that think the boyfriend edited?"], ["2", "Do you that think the boyfriend edited the letter?"]]}],



// item 10
[["test.that.wh.1.10",10],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you think that the husband announced the job?"], ["2", "What do you think that the husband announced?"]]}],

[["test.that.do.2.10",10],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you think that the husband announced the job?"], ["2", "Do you think that the husband announced?"]]}],

[["test.whether.wh.3.10",10],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you wonder whether the husband announced the job?"], ["2", "What do you wonder whether the husband announced?"]]}],

[["test.whether.do.4.10",10],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you wonder whether the husband announced the job?"], ["2", "Do you wonder whether the husband announced?"]]}],

[["test.transposed.wh.5.10",10],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you that think the husband announced the job?"], ["2", "What do you that think the husband announced?"]]}],

[["test.transposed.do.6.10",10],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you that think the husband announced the job?"], ["2", "Do you that think the husband announced?"]]}],



// item 11
[["test.that.wh.1.11",11],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you think that the broker shredded?"], ["2", "What do you think that the broker shredded the file?"]]}],

[["test.that.do.2.11",11],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you think that the broker shredded?"], ["2", "Do you think that the broker shredded the file?"]]}],

[["test.whether.wh.3.11",11],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you wonder whether the broker shredded?"], ["2", "What do you wonder whether the broker shredded the file?"]]}],

[["test.whether.do.4.11",11],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you wonder whether the broker shredded?"], ["2", "Do you wonder whether the broker shredded the file?"]]}],

[["test.transposed.wh.5.11",11],"Question", {hasCorrect: 0, q: "", as: [["1", "What do you that think the broker shredded?"], ["2", "What do you that think the broker shredded the file?"]]}],

[["test.transposed.do.6.11",11],"Question", {hasCorrect: 0, q: "", as: [["1", "Do you that think the broker shredded?"], ["2", "Do you that think the broker shredded the file?"]]}],



// item 12
[["test.that.wh.1.12",12],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you think that the critic viewed the western?"], ["2", "What do you think that the critic viewed?"]]}],

[["test.that.do.2.12",12],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you think that the critic viewed the western?"], ["2", "Do you think that the critic viewed?"]]}],

[["test.whether.wh.3.12",12],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you wonder whether the critic viewed the western?"], ["2", "What do you wonder whether the critic viewed?"]]}],

[["test.whether.do.4.12",12],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you wonder whether the critic viewed the western?"], ["2", "Do you wonder whether the critic viewed?"]]}],

[["test.transposed.wh.5.12",12],"Question", {hasCorrect: 1, q: "", as: [["1", "What do you that think the critic viewed the western?"], ["2", "What do you that think the critic viewed?"]]}],

[["test.transposed.do.6.12",12],"Question", {hasCorrect: 1, q: "", as: [["1", "Do you that think the critic viewed the western?"], ["2", "Do you that think the critic viewed?"]]}],



// filler
["filler.bigdiff.21","Question", {hasCorrect: 1, q: "", as: [["1", "It is illegal one to criticize the government."], ["2", "It is illegal for one to criticize the government."]]}],
["filler.bigdiff.22","Question", {hasCorrect: 0, q: "", as: [["1", "I told you when we met that Bill will come to the party."], ["2", "I told you that Bill when we met will come to the party."]]}],
["filler.bigdiff.23","Question", {hasCorrect: 1, q: "", as: [["1", "Who is in love with who the hell?"], ["2", "Who the hell is in love with who?"]]}],
["filler.bigdiff.24","Question", {hasCorrect: 0, q: "", as: [["1", "It is unimaginable for Mary to arrive on time."], ["2", "It is unimaginable Mary to arrive on time."]]}],
["filler.mediumdiff.25","Question", {hasCorrect: 1, q: "", as: [["1", "One interpreter each tried to be assigned to every visiting diplomat."], ["2", "One interpreter tried to be assigned to every visiting diplomat."]]}],
["filler.mediumdiff.26","Question", {hasCorrect: 0, q: "", as: [["1", "That Mary was going out with Luke bothered you."], ["2", "Who did that Mary was going out with bother you?"]]}],
["filler.mediumdiff.27","Question", {hasCorrect: 1, q: "", as: [["1", "There had all hung over the fireplace the portraits by Picasso."], ["2", "There had hung over the fireplace all of the portraits by Picasso."]]}],
["filler.mediumdiff.28","Question", {hasCorrect: 0, q: "", as: [["1", "The man that he gave the creeps to last night is over there."], ["2", "The man that he gave the creeps last night to is over there."]]}],
["filler.smalldiff.29","Question", {hasCorrect: 1, q: "", as: [["1", "How likely to be a riot is there?"], ["2", "How likely to win the race is John?"]]}],
["filler.smalldiff.30","Question", {hasCorrect: 0, q: "", as: [["1", "It seemed at that time that David had left."], ["2", "It seemed at that time David had left."]]}],
["filler.smalldiff.31","Question", {hasCorrect: 1, q: "", as: [["1", "I told Mr. Smith that I am able to paint the fence together."], ["2", "I told Mr. Smith that I wonder when to paint the fence together."]]}],
["filler.smalldiff.32","Question", {hasCorrect: 0, q: "", as: [["1", "The game was played wearing no shoes."], ["2", "The game was played shoeless."]]}],


// practice
["practice.bigdiff.111","Question", {hasCorrect: 1, q: "", as: [["1", "Debbie ate chocolate, and Kathy milk drank."], ["2", "Debbie ate chocolate, and Kathy drank milk."]]}],
["practice.mediumdiff.112","Question", {hasCorrect: 0, q: "", as: [["1", "We students of physics are taller than you students of chemistry."], ["2", "We students of physics are taller than you of chemistry."]]}],
["practice.smalldiff.113","Question", {hasCorrect: 1, q: "", as: [["1", "Mary believed Peter finished school and Bill Peter got a job."], ["2", "Mary believed that Peter finished school and Bill that Peter got a job."]]}],
];
