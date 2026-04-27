---
layout: about
title: About
permalink: /

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular

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
    - date: 2026-04-23
      description: "《路边野餐》中的诗"
      url: /blogs/kaili-blues-poetry/
    - date: 2026-03-09
      description: "Frequency-guided flow generation? No, not just frequency, but energy (Part I)"
      url: http://waveintell.ai/blog/2024-kflow_1_en/
    - date: 2026-01-29
      description: "Who am I, when I talk about myself?"
      url: https://rain-farm-1ce.notion.site/Who-am-I-when-I-talk-about-myself-2f71a04dab4c80a18622dbd3836e492f?source=copy_link
---

Hi! I’m Ziyu Li, a senior at UIUC majoring in Mathematics. Starting in Fall 2026, I will be an incoming Computer Science PhD student at the Chinese University of Hong Kong (CUHK), advised by [Prof. Shengchao Liu](https://chao1224.github.io/).

"What I cannot create, I do not understand." - Richard Feynman

I study Generative AI, with broad applications in computer vision, bioactivity reasoning, and beyond.

<details class="more-details" markdown="1">
<summary><span class="more-summary__closed">More</span><span class="more-summary__open">Show less</span></summary>
<br>
I have been playing the piano for over <span id="piano-years">{{ site.time | date: "%Y" | minus: 2009 }}</span> years. My favorite pianist is the legendary [Martha Argerich](https://www.youtube.com/watch?v=5V8XazLfPWk). I am also inspired by contemporary composer [Andy Zhan](https://www.youtube.com/watch?v=lwpR1_7RDZA).

Feel free to listen to me play one of my favorite piano pieces.
<div class="audio-player">
  <p class="audio-player__title"></p>
  <audio id="piano-audio" controls preload="none" controlslist="nodownload" src="{{ '/assets/audio/piano.mp3' | relative_url }}">
    <source src="{{ '/assets/audio/piano.mp3' | relative_url }}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

I like reading poetry. My favorite poet is Luo Yihe.

My favorite movie is Kaili Blues (路边野餐). Feel free to watch [A short clip appreciation](https://weibo.com/tv/show/1034:4669011594772597?from=old_pc_videoshow&mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural) I made for this film four years ago.

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
.more-details > p:first-of-type {
  margin-top: 0.9rem;
}
.more-details > summary {
  margin-bottom: 0.75rem;
}
.more-details > summary .more-summary__open {
  display: none;
}
.more-details[open] > summary .more-summary__closed {
  display: none;
}
.more-details[open] > summary .more-summary__open {
  display: inline;
}
</style>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var pianoYears = document.getElementById("piano-years");

  if (pianoYears) {
    pianoYears.textContent = String(new Date().getFullYear() - 2009);
  }
});
</script>
