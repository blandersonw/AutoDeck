# Overview

The goal of this project is to experiment with new applications of GPT-3. 

We created a google slides plugin that can generate a presentation on any topic. The plugin works best on decks of <10 slides, with a sweet spot around 5-7.

## Backstory

The United States' most brilliant minds have estimated that millions of hours are spent creating meaningless presentations, not just in elementary school, but also at top Universities.

# Demonstration

Here is an example:

https://user-images.githubusercontent.com/89415722/211634050-88eedbbc-405f-48c9-8e4d-a8461000b704.mp4

Generated Presentation 1 (0:25): Multivariable Calculus - showcases application using real-world, complex topics.

Generated Presentation 2 (1:15): The War on Antarctic Camels - showcases application imagining a false reality.


## Methodology

This project was very easy to build.  The primary steps consisted of:

1. Google Slides plug-in interface.
   * Get topic value (string) from user.
   * Get length value (int) from user.
2. Generate a prompt for GPT-3 with user inputs.
   * Must return information in a digestible format (JSON).
   * Separate content into sections (titles, segemented body content, etc).
3. Make the GPT-3 API request.
   * Da-Vinci-003 for best accuracy.
   * {temperature: .7, tokens: 2500, frequency_penalty: .5, presence_penalty: .5}
4. Read JSON-string as a JSON and separate elements.
   * Keys = titles.
   * Values = body content.
5. Create slides for each property.
   * Adjusted height positioning based on number of body content values for each slide.

## Limitations

**There are a number of limitations to this project, including but not limited to:**

* Statically formatted slides (text size, positioning, etc).

* Lack of images / graphics.

* Accuracy breakdown + token limits with increased presentation size (>10).

* Highly professional level writing and analysis.

**These problems could be solved with:**

* Increased UI customization and randomness.

* Searching internet for relevant images based on body content.

* Fragmented API calls.

* AutoDeck specific fine-tuned model.

Nevertheless, the point of this project was to create a simple, easy-to-use model for fun and practice.  

Enjoy looking through.  We will *hopefully* publish it to the Google Add-On store soon!

## Disclaimer:
This application uses GPT-3 for content creation.  GPT-3 can confidently respond to prompts with false information, as demonstrated in the Antarctic Camels example.  Information in presentations may not be factual and should be reviewed before shared in any form.
