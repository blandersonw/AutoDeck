# Overview

The goal of this project is to find new use cases of GPT-3. We were interested in seeing how GPT-3 would perform when asked to generate a slide deck. To accomplish this, we decided to use Google Apps Script to build a custom Google Slides plugin that would take in a presentation topic and length, and output a presentation based on those parameters. 

# GenerativePresentation
We created a google slides plugin that can generate a presentation on any topic. The plugin works best on decks of <10 slides, with a sweet spot around 5-7.

Here is an example:

https://user-images.githubusercontent.com/89415722/211634050-88eedbbc-405f-48c9-8e4d-a8461000b704.mp4

Generated Presentation 1 (0:25): Multivariable Calculus - showcases application using real-world, complex topics.

Generated Presentation 2 (1:15): The War on Antarctic Camels - showcases application imagining a false reality.

# Limitations

There are several limitations with this project. One of them is that, in its current form, the plugin can only generate slides of one particular format. This results in fairly boring looking presentations. In future iterations of this project, it is possible that we add functionality that varies the slide formats for a more dynamic presentation. 

Another limitation of this project is that there are some limits with the amount of tokens that GPT-3 can output on a single API request. If one wanted to make a 50 slide presentation, it is possible that the GPT-3 output would not all be sent in one request and therefore the formatting of the final presentation would be incorrect. 

## Disclaimer:
This application uses GPT-3 for content creation.  GPT-3 can confidently respond to prompts with false information, as demonstrated in the Antarctic Camels example.  Information in presentations may not be factual and should be reviewed before shared in any form.
