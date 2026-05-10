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

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

blogs:
  enabled: false # hides the homepage Writing / Notes section
  title: Writing / Notes # section title
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

I'm an incoming CS PhD student at CUHK, advised by [Prof. Shengchao Liu](https://chao1224.github.io/).

I study GenAI.

<p class="feynman-quote"><span>“What I cannot create, I do not understand.”</span><cite>Richard Feynman</cite></p>

<details class="more-details" markdown="1">
<summary><span class="more-summary__label">More</span></summary>
<div class="more-details__content" markdown="1">

I have been playing the piano for over <span id="piano-years">{{ site.time | date: "%Y" | minus: 2009 }}</span> years. My favorite pianist is the legendary [Martha Argerich](https://www.youtube.com/watch?v=5V8XazLfPWk). I am also inspired by contemporary composer [Andy Zhan](https://www.youtube.com/watch?v=lwpR1_7RDZA).

Feel free to listen to me play one of my favorite piano pieces.
<div class="audio-player">
  <p class="audio-player__title"></p>
  <audio id="piano-audio" controls preload="none" controlslist="nodownload" src="{{ '/assets/audio/piano.mp3' | relative_url }}">
    <source src="{{ '/assets/audio/piano.mp3' | relative_url }}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>

I like reading poetry. My favorite poet is Luo Yihe (骆一禾).

My favorite movie is Kaili Blues (路边野餐). Feel free to watch [A short clip appreciation](https://weibo.com/tv/show/1034:4669011594772597?from=old_pc_videoshow&mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural) I made for this film four years ago.

I reached Master rank (about the top 0.5%) on League of Legends.

You might also find me on the soccer field.

</div>
</details>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var pianoYears = document.getElementById("piano-years");
  var moreDetails = document.querySelector(".more-details");
  var moreLabel = document.querySelector(".more-summary__label");

  if (pianoYears) {
    pianoYears.textContent = String(new Date().getFullYear() - 2009);
  }

  if (moreDetails && moreLabel) {
    var updateMoreLabel = function () {
      moreLabel.textContent = moreDetails.open ? "Show less" : "More";
    };

    updateMoreLabel();
    moreDetails.addEventListener("toggle", updateMoreLabel);
  }
});
</script>
