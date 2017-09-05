## Project Description
We were given the project called "IBM Watson For Good"
As a rather open ended challenge by [Phaedra Boinodiris](https://www.linkedin.com/in/phaedra) from IBM, our team is investigating how Watson can be used in creative ways to drive social change.

We have decided to use IBM Watson to aggregate social media posts related to campus topics, and have the general “mood” be displayed as an artistic representation on significant parts of campus. This aggregation can then be used to enable crowdfunding or automate messages to legislators related to the issue at hand.

### Team Roles
- Client Manager: Michael Gu
- Project Manager: Amogh Sharma
- Editor: Greer Glenn
- Chief Architect: Victor Cui

# Technologies
- IBM Watson: IBM’s Cognitive Color Tool, Tone Analyzer
- Twitter API
- Mailchimp
- Venmo API

# Inspiration - Art + Activism = Artivism
During the Met Gala last year, IBM Watson collaborated to create a unqiue dress. 
The lights lit up with a color that corresponded to Tweets containing #MetGala. All Tweets were analyzed using IBM Watson Sentiemnt Analysis API's, and the aggregate sentiment was mapped to a color. 

![Dress](https://media.wired.com/photos/592704e7f3e2356fd800b338/master/w_582,c_limit/KK_FINAL-Red-Carpet-1.jpg)
"The LED lights attached to the dress’ embroidered flowers are connected to Watson’s Tone Analyzer API, which is able to interpret the emotional content of tweets tagged #MetGala and #CognitiveDress. As the tone of the tweets change, Watson is able to pull from the color palettes it generated and change the hue of the dress in real time. If tweets have a high “joy” value, for example, the dress would light up with a bright rose color; while tweets with a more “excited” tone will turn the flowers a shade of aqua. Even the fabric—a lightweight tulle—was chosen through a cognitive process." - https://www.wired.com/2016/05/ibms-watson-helped-design-karolina-kurkovas-light-dress-met-gala/

We wish to apply the idea of **artistic visual representations based on ML aggregation of social media data to campus issues**, specifically Silent Sam.

# Potential Ideas
- aggregate tweets related to #SilentSam -> run tweets through Watson Sentiment analysis -> represent the sentiment using lights or physical visual indicator surrounding statue
- show a physical NC map separated by county. Counties light up based on tweets from people from each county. When a certain threshold is reached(visual indicator reaches an extreme), an email is autogenerated and sent to respective legislator with tweet contents
- Venmo integration: when a certain visual indication is reached via Watson Sentiment, send a venmo link to all who've tweeted to enable crowdsourcing donations (to fund UNC Black Student Movement, poltiical campaigns, etc) 

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
