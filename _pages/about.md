---
layout: about
title: About
permalink: /
subtitle: >
  <i></i><br>
  <i></i>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p></p>
    <p></p>
    <p></p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

blogs:
  enabled: true # includes a link to blogs
  title: Blogs # section title
  items:
    - date: 2026-03-09
      description: "Frequency-guided flow generation? No, not just frequency, but energy (Part I)"
      url: http://waveintell.ai/blog/2024-kflow_1_en/
    - date: 2026-01-29
      description: "Who am I, when I talk about myself?"
      url: https://rain-farm-1ce.notion.site/Who-am-I-when-I-talk-about-myself-2f71a04dab4c80a18622dbd3836e492f?source=copy_link
---

Hi! I’m Ziyu Li, a senior at UIUC majoring in Mathematics. Starting in Fall 2026, I will be an incoming Computer Science PhD student at the Chinese University of Hong Kong (CUHK), advised by [Prof. Shengchao Liu](https://chao1224.github.io/).

I study Generative AI, with broad applications in computer vision, bioactivity reasoning, and beyond.

<details markdown="1">
<summary>Hobbies</summary>
<br>
I have been playing the piano for over 17 years. My favorite pianist is the legendary [Martha Argerich](https://www.youtube.com/watch?v=5V8XazLfPWk). I am also inspired by contemporary composer [Andy Zhan](https://www.youtube.com/watch?v=lwpR1_7RDZA).

Feel free to listen to me play one of my favorite piano pieces.
<div class="audio-player">
  <p class="audio-player__title"></p>
  <audio id="piano-audio" controls preload="none" controlslist="nodownload" src="{{ '/assets/audio/piano.mp3' | relative_url }}">
    <source src="{{ '/assets/audio/piano.mp3' | relative_url }}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

I like reading poetry. My favorite poet is Luo Yihe.

I reached Master rank (about the top 0.5%) on League of Legends.

You might also find me on the soccer field.

</details>
<div style="height: 20px;"></div>
<style>
.audio-player {
  margin: 0.5rem 0 1rem;
}
.audio-player__title {
  margin: 0 0 0.35rem;
  font-weight: 600;
  color: var(--global-text-color, #111);
}
.audio-player audio {
  width: 100%;
  max-width: 520px;
}
details[markdown="1"] > p:first-of-type {
  margin-top: 0.9rem;
}
details[markdown="1"] > summary {
  margin-bottom: 0.75rem;
}
</style>
