import {Picture} from '../Picture';
import {Paragraph} from '../Paragraph';
import {ArticleComment} from '../ArticleComment'
import {Article} from '../Article'

// Photo imports
import mainPhotoPath from "./Images/josephHalletCaughtWindows.jpg";
import correctionPhotoPath from "./Images/CorrectionEmailLeakedScaledLeft.png";

// Variables used to create object
const headline = "BREAKING: University of Bristol Lecturer Caught Red-Handed Using a Windows Machine!";

const author = "Joe Barlow";

const publishDate = new Date("February 18 2023 18:40");

const summaryForHomePage =  "Joeseph Hallett caught using Windows 11 in a savage assault on open-source values." +
    " Friday after before last, multiple reports were made by students of this upsetting incident."

const mainPhoto = new Picture(mainPhotoPath,
  'A sorry looking Joeseph Hallett after being caught using Widnows 11.');

const correctionPhoto = new Picture(correctionPhotoPath, 
  'The alleged leaked contents of Joseph Hallett\'s email to the CSS Times.');

// Paragraphs *********************************************************************************
const para1 = new Paragraph(
  <p> 
    <strong>
    In a shocking turn of events, renowned computer science lecturer Joseph Halett of the University of Bristol was caught
     using a Windows machine instead of his beloved Linux software.
    </strong>
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para2 = new Paragraph(
  <p>
    Halett, known for his strict adherence to open-source software, was caught in the act by a group of computer science
     students who were in awe at the sight of their revered professor using a proprietary operating system.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para3 = new Paragraph(
  <p>
    Jason Price, who wished to remain anonymous, stated: "We were shocked. We always thought that Joseph lived 
    and breathed Linux. He's always preaching about the benefits of open-source software, and here he was using
    a Windows machine. It's like finding out Santa Claus isn't real."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para4 = new Paragraph(
  <p>
    When asked about the incident, Halett simply stated: "I needed to check my email, and my Linux machine was down for
     maintenance. I had no choice but to use a Windows machine. I swear, it's a one-time thing."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING)

const para5 = new Paragraph(
  <p>
    However, sources close to Halett have stated that this isn't the first time he's used a Windows machine. It appears
     that Joseph has a secret love affair with proprietary software, and he just can't resist its alluring features and
     ease of use.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para6 = new Paragraph(
  <p>
    The University of Bristol released a statement saying: "We support the use of open-source software, but we also understand
     that there may be times when our faculty may need to use proprietary software for specific tasks. We trust that Joseph
      Halett will continue to spread the gospel of open-source software, even if he does have a soft spot for proprietary 
      software."
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para7 = new Paragraph(
  <p>
    This news has sent shockwaves through the computer science community, and many are questioning if they can ever
     trust their lecturer again. But we at the University of Bristol have faith in Joseph, and we know that he'll return 
     to the Linux fold, stronger and more committed than ever.
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para8 = new Paragraph(
  <p>
    Stay tuned for updates on this developing story...
  </p>,
  Paragraph.NO_PHOTO, Paragraph.NO_HEADING);

const para9 = new Paragraph(
  <p>
    Mr. Hallett has reached out to editorial team of the CSS Times following this publication of this article. 
    He highlighted that his name had been incorrectly spelt and requested that we clarify that his open-source  
    operating system of choice is OpenBSD. We would like to apologies to Mr. Hallett and reassure 
    him that we have terminated the individual responsible for this egregious mistake. At the CSS Times, we will 
    not tolerate anything less than journalistic excellence and have thus replaced this individual with a 
    more up-to-date generative AI model.
  </p>,
  correctionPhoto, "Correction");

  const para10 = new Paragraph(
    <p>
      Joseph Hallett has asked us to highlight that he has a doctorate. We would like to apologise 
      for referring to him as "Mr. Hallett". He should instead be referred to as "Dr. Hallett". 
      Dr. Hallett has not commented on rumours that he has agreed to be the 16th doctor in the 
      illustrous BBC drama series 'Doctor Who'. Either way, he'll always be The Doctor to us. 
    </p>,
    Paragraph.NO_PHOTO, "Correction Correction");

const paragraphs = [para1, para2, para3, para4, para5, para6, para7, para8, para9, para10];

// End of paragraphs

// Start of comments ***********************************
const comment1 = new ArticleComment("REDACTED", "I am just in utter shock");

const comment2 = new ArticleComment("CSGamer", "I hate windows! Not the OS, just windows and sunlight in general.");

const comments = [comment1, comment2];

// End of comments

/**
 * The newspaper article for david.
 */
export const joeCaught = new Article(
  headline, author, publishDate, summaryForHomePage, mainPhoto, paragraphs, comments, Article.NO_ID__YET
);
