---

title: spotify lately

layout: ~/layouts/Default.vue

---

#### {{ $frontmatter.title }}

Over the past couple of years, I've been working on a personal project based on my Spotify listening habits. I started a playlist called "lately" at the end of 2017 to save the music I was listening to regularly; the one rule of the playlist was that each track could only stay on the playlist for at most a week. At the time, I thought I would continue the playlist for at most a month, so I recorded it with screenshots. After months of maintaining the "lately" playlist and saving hundreds of screenshots, I finally chose to update my method of preserving playlists.

In the summer of 2018, I decided to investigate all this data I had collected, so I wrote a program in Python to scrape the song titles, artist names, and other text from the screenshots and then retrieve, analyze, and visualize all the audio features and other information for the playlist tracks.

Since then, I have written another program to pull my listening data from Spotify in a more streamlined manner, and I am working on a new project to generate more customized playlists for myself using this data. Exploring my own listening data with the Spotify API has been enthralling, and it has inspired me to ask even more questions about what can be learned from audio analysis.

You can take a look at the project [here](http://github.com/fiksin/lately).
