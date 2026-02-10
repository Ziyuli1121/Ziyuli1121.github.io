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
  date: 2026-01-29 # date of the blog post
  description: "Who am I, when I talk about myself?" # description shown on homepage
  url: https://rain-farm-1ce.notion.site/Who-am-I-when-I-talk-about-myself-2f71a04dab4c80a18622dbd3836e492f?source=copy_link # link to blogs page (can also be external URL)
---

Hi! I’m Ziyu Li, a senior at the University of Illinois Urbana-Champaign (UIUC) majoring in Mathematics.

My research focuses on **Generative AI** and **AI for Science**. Specifically, I am interested in physics-inspired generative AI and multimodal representation learning for biological systems.

Currently, I am fortunate to be advised by [Prof. Shengchao Liu](https://chao1224.github.io/) at CUHK. Previously, I was fortunate to be advised by [Prof. Huimin Zhao](https://zhaogroup.web.illinois.edu/index.html) at UIUC and [Prof. Chi Zhang](https://icoz69.github.io/) at Westlake University.


<details markdown="1">
<summary>Hobbies</summary>
<br>
I have been playing the piano for over 17 years. My favorite pianist is the legendary [Martha Argerich](https://www.youtube.com/watch?v=5V8XazLfPWk). I am also greatly inspired by contemporary composer [Andy Zhan](https://www.youtube.com/watch?v=lwpR1_7RDZA).

Feel free to listen to me play one of my favorite piano pieces!
<div class="audio-player">
  <p class="audio-player__title"></p>
  <audio id="piano-audio" controls preload="none" controlslist="nodownload" src="{{ '/assets/audio/piano.mp3' | relative_url }}">
    <source src="{{ '/assets/audio/piano.mp3' | relative_url }}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

I like reading poetry. My favorite poet is Luo Yihe.

I reached Master rank (about the top 0.5%) on the League of Legends China server, Ionia.

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
