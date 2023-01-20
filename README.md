# Twitter-Analysis-With-Spark

Aight, simple thing is that this project is meant to do sentiment analysis using Twitter's API. 

`Update`: I don't know if the API works with Elon Musk taking over Twitter but try it out if it helps you.

The project has 3 parts which combines together for the complete the project.

`Part 1` - Scrap data of Twitter --> Store it in a CSV --> Make insights and visualization. 

`Part 2` - Twitter Streaming through Twitter API --> Send data to TCP socket which connects to Apache Spark --> Do real time analysis and see the results. 

`Part 3` - Build a RBF-SVM classifer --> Connect it with Part 2 files --> Use it for sentiment analysis. 

## Step 1: Twitter API

Get yourself a Twitter's developer account. I used Tweepy library but it was very restricting for a student developer account.
So I used `snscrape`, a scraper for social networking services. With it, I scrapped Twitter’s search page, which returned substantially more data than the API.

Nevertheless, you still need the API for authentication as well as to scrape the Twitter pages. The limitation of using the scraper is that it does not return all the data which can be available.

Hence, the dataset collected cannot be used for concluding confident results. I collected the tweets with the geolocation set to India and queried for any tweets containing use of ‘covid-19, ‘corona’, ‘pandemic’ or ‘virus’. The retrieved data from snscrape is stored as .csv file containing the date, tweet and the person who tweeted whether used keyword ‘Covid-19’ or ‘Corona’ when talking about the pandemic. The tweets collected were around 11,800 tweets from 1st of January to 30th of September 2021.

### Step 2: Insights and visualization of stored data

The main goal of the analysis was to understand and analyze the sentiments of tweets regarding the virus and the current pandemic status in India.

I made use of TextBlob library for this analysis and you find all the visualization diagram in the root directory as well as `static` directory.
