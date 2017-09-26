# <a name="func_spec"></a>Functional Spec
## Watson-4-good
* The primary function of our app is inspire activism through art using sentiment visualization of twitter hashtags.

## Requirements (prioritized)
1. Utilizes IBM Watson (i.e, NLU Engine and Tone Analyzer)
2. Re-usable platform
3. Automatically generated visualizations of sentiment
4. Visualizations are clear and easily understandable
5. Hosted in the cloud via IBM Bluemix
6. Simple, intuitive interface that can be understood by non-technical users
7. Query times out after 2 minutes
8. Protect API keys


## User Types
1. Basic Visualization User
* A user who goes to our app and just wants to see a sentiment visualization
Requires no technical knowledge- user just has to navigate to our page and input their desired tags
2. Student User
* Students who can easily use our platform for artivism
This is more of an “educational” use case. Young students can use the platform to research sentiment about topics and conduct further research. They may want a downloadable summary of their query as well.
3. Political/Business User
* A user who uses our platform for analysis on certain issues pertaining to their campaign/constituents/business/etc. They may want the option to save hashtag settings, export sentiment as a .csv file, or run sentiment on past tweets instead of a live stream.
4. Developer User
* Someone with technical knowledge 
This user might want to add more features/expand more heavily than what our basic platform provides.

## Interfaces
* Basic 
1. Running sentiment on one or more hashtag(s)
2. Enter hashtag into the input bar
3. Hit button which will query the back-end API
4. Visualize results