# Final Project
### CS 342 Deep Learning
#### Bennet Leff, Andrew Einspanier, Aanand Shah

---
## Abstract
Our project encompasses a wide range of approaches -- modules from class as well as self-discovered research -- and has led us to a final product which reflects many different Deep Learning paradigms.
Specifically, we began our research with a HW4/5-inspired, image-based, Convolutional Neural Network. We then began a parallel effort into the Soft-Actor-Critic model. 
This yielded limited results, so we finally pivoted to a decision between image-based approach and a state-based imitation learning model. 
Eventually, we were able to develop and implement a nuanced reward function within our state-based model which allowed our agent to perform resiliently in numerous scenarios.

**Table of Contents**
1. Our background and approach
2. First efforts and discovery
3. Crossroads
4. End outcome
5. Learnings

## Our background and approach
All three of us come from very different backgrounds and work in different fields; so aligning to our strengths was an important first step for us.
We quickly got to know each other: 
- **Bennet**: 
- **Andrew**: 
- **Aanand**: Austin-based Army officer with a background in Economics, Java and software engineering.

Upon assignment, we took a week to each do a shallow dive into the various aspects of the project and learn more about the possible approaches. 
In [our repository](https://github.com/aeinspanier/DeepLearningFinalProject), you will find our initial forays into the possible image- and state-based solutions.

We divided up the work based on our initial appraisals of the work and what we *thought* might be relevant skills for each. 
- Aanand began diving in to exploration on the state-based approach because he felt comfortable manipulating the controller and adjusting and debugging the code on the fly.
- Andrew has a strong background in ML and Linear Algebra, so he felt more comfortable taking on the image-based model and the potential adjustments needed from HW4 & HW5. 
- Bennet is skilled at absorbing new topics, fast. He decided to be our "wild card" -- searching for the out-of-the-box solution which could net us a more skilled agent or steeper learning curve. 

We dove in to our disovery and research efforts soon after project release, but quickly discovered that many of our assumptions were very wrong. 

## First efforts and discovery
When we began exploring the state-based model, we were confused by how to build the structure from scratch and make something which was robust enough to learn and act from the raw state-based input.
** add more here ** . We knew that the parameters for our controller would essentially be 'baked in' to the actor and that the reward function and training time would need to be harmonious, so that the model could get used to 
a wide variety of state spaces and understood the most high-reward action for any random state presented. 

Our initial efforts into the image-based approach yielded a lot of progress and led us to follow that as our strongest lead during the first phase of our project.
We were able to harness our CNN from HW5 to quickly identify the puck and an aim point for it -- simply leaving us (at least, we thought) the controller to act based on the aim point our computer vision was detecting. 

