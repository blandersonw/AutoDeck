# GenerativePresentation
This application will be used to create a software capable of generating a presentation on many topics.

## User Input:

### Presentation topic:

Monkey species found in the Amazon rainforest

### Subtopics:

History, Social Behavior, Diet

### Number of slides:

6-8 slides

### Script, Y/N:

Y

### Additional Information:

Be sure to include information about the length of monkey's tails.  Each slide should take 15-30 seconds to present.

## Using this input, we can include text formatting to generate a prompt for a LLM, like so:

Create a presentation about 'monkey species found in the Amazon rainforest. Include subtopics as the theme of each slide, such as 'history, social behavior and diet'. The presentation should be 6-8 slides. Include a title, body content, and script for each slide.  The body content can be presented with key words/phrases, bullet points, or other effective methods of relaying information in a slide.  Give detailed information in each body slide, without writing out full paragraphs. Feel free to separate body content into categories if effective.  The script should be for the speaker of the presentation. Be sure to include information about the length of monkey's tails. Each slide should take 15-30 seconds to present.  Output the information in the following format: "1. 'Title:' __ [new line] 'Body content:' __ [new line] 'Script:' __ [new line]". This represents the first slide.  Continue this format for each slide.


## This input produce the following output.

1. Title: Monkey Species Found in the Amazon Rainforest

Body Content: 
- Types of Monkeys: Howler, Spider, Squirrel, Titi, and Marmoset
- Geographic Location: South America
- Habitats: Rivers, Trees, and Leaves

Script: Welcome, everyone! Today we'll be discussing the different monkey species that can be found in the Amazon Rainforest. The five species are Howler, Spider, Squirrel, Titi, and Marmoset. They are all found in South America and inhabit various habitats, such as rivers, trees, and leaves. Now let's take a closer look at each species.

2. Title: Howler Monkeys

Body Content: 
- Appearance: Fur Color Varies, Large Heads, Long & Shaggy Coats
- Size: Average Weight 15 lbs, Longest Tail Length 24 inches
- Diet: Fruits, Leaves, Nuts, and Insects

Script: Howler Monkeys are one of the species in the Amazon Rainforest. They have fur that can vary in color, large heads, and a long, shaggy coat. They weigh on average 15 lbs and their tail can reach up to 24 inches in length. Their diet consists of fruits, leaves, nuts, and insects.

3. Title: Spider Monkeys

Body Content: 
- Appearance: Fur Color Varies, Long Tail, Long Limbs
- Size: Average Weight 15 lbs, Longest Tail Length 28 inches
- Diet: Leaves, Fruits, Nuts, and Insects

Script: Spider Monkeys are another species in the Amazon Rainforest. They have fur that can vary in color, long tails, and long limbs. They weigh on average 15 lbs and their tail can reach up to 28 inches in length. Their diet consists of leaves, fruits, nuts, and insects.

4. Title: Squirrel Monkeys

Body Content: 
- Appearance: Light Gray Fur, Large Ears, Short Tail
- Size: Average Weight 2 lbs, Longest Tail Length 14 inches
- Diet: Fruits, Insects, Nuts, and Leaves

Script: Squirrel Monkeys are another species in the Amazon Rainforest. They have light gray fur, large ears, and a short tail. They weigh on average 2 lbs and their tail can reach up to 14 inches in length. Their diet consists of fruits, insects, nuts, and leaves.

5. Title: Titi Monkeys

Body Content: 
- Appearance: Thick Fur, Long Tail, Dark Eyes
- Size: Average Weight 4 lbs, Longest Tail Length 18 inches
- Diet: Fruits, Insects, Nuts, and Leaves

Script: Titi Monkeys are another species in the Amazon Rainforest. They have thick fur, long tails, and dark eyes. They weigh on average 4 lbs and their tail can reach up to 18 inches in length. Their diet consists of fruits, insects, nuts, and leaves.

6. Title: Marmoset Monkeys

Body Content: 
- Appearance: White-tipped Tail, Fur Color Varies, Long-clawed Feet
- Size: Average Weight 1 lbs, Longest Tail Length 10 inches
- Diet: Insects, Nectar, Sap, Fruits, and Leaves

Script: Marmoset Monkeys are another species in the Amazon Rainforest. They have white-tipped tails, fur that can vary in color, and long-clawed feet. They weigh on average 1 lbs and their tail can reach up to 10 inches in length. Their diet consists of insects, nectar, sap, fruits, and leaves. 

7. Title: Summary

Body Content: 
- 5 Species of Monkeys 
- Geographic Location: South America
- Habitats: Rivers, Trees, Leaves 
- Diet: Fruits, Leaves, Nuts, Insects

Script: Let's review what we've discussed today. We learned about the five species of monkeys that inhabit the Amazon Rainforest: Howler, Spider, Squirrel, Titi, and Marmoset. These species are all found in South America and inhabit various habitats such as rivers, trees, and leaves. Their diets consist of fruits, leaves, nuts, and insects.

## Limitations

This output makes for a mildly interesting presentation, but it 1) does not accurately address all of the specified subtopics, 2) is incredibly repetitive, and 3) seems like the work of a young teenager.

We already know that LLMs can produce detailed analysis and essays.  This project will seek to apply GPT's generative strength in producing high-quality presentations. 

The first step is refining the prompt to fine-tune content generation, as shown above.

Step two will include presentation graphic design, including images, charts, etc.  Step two explanation to be cont'd...
