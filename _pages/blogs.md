---
layout: page
title: Writing / Notes
permalink: /blogs/
description: 
nav: true
nav_order: 3
---

<section class="interests-section">
  <h2>Interests</h2>
  <p class="interests-section__intro">A few things outside research.</p>
  <details class="interests-more">
    <summary>
      <span class="interests-more__label interests-more__label--closed">More</span>
      <span class="interests-more__label interests-more__label--open">Show less</span>
      <span class="interests-more__chevron" aria-hidden="true"></span>
    </summary>
    <div class="interests-more__content">

      <p>I have been playing the piano for over <span id="piano-years">{{ site.time | date: "%Y" | minus: 2009 }}</span> years. My favorite pianist is the legendary <a href="https://www.youtube.com/watch?v=5V8XazLfPWk" target="_blank" rel="external nofollow noopener">Martha Argerich</a>. I am also inspired by contemporary composer <a href="https://www.youtube.com/watch?v=lwpR1_7RDZA" target="_blank" rel="external nofollow noopener">Andy Zhan</a>.</p>

      <p>Feel free to listen to me play one of my favorite piano pieces.</p>
      <div class="audio-player">
        <p class="audio-player__title"></p>
        <audio id="piano-audio" controls preload="none" controlslist="nodownload" src="{{ '/assets/audio/piano.mp3' | relative_url }}">
          <source src="{{ '/assets/audio/piano.mp3' | relative_url }}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>

      <p>I like reading poetry. My favorite poet is Luo Yihe (骆一禾).</p>

      <p>My favorite movie is Kaili Blues (路边野餐). Feel free to watch <a href="https://weibo.com/tv/show/1034:4669011594772597?from=old_pc_videoshow&mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural" target="_blank" rel="external nofollow noopener">A short clip appreciation</a> I made for this film four years ago.</p>

      <p>I reached Master rank (about the top 0.5%) on League of Legends.</p>

      <p>You might also find me on the soccer field.</p>

    </div>
  </details>
</section>

<section class="notes-section">
  <h2>Notes</h2>
  <div class="blogs-list">
    <div class="table-responsive">
      <table class="table table-sm table-borderless">
        <tr>
          <th scope="row" style="width: 20%">Apr 23, 2026</th>
          <td>
            <a class="blog-title" href="{{ '/blogs/kaili-blues-poetry/' | relative_url }}">《路边野餐》中的诗</a>
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 20%">Mar 09, 2026</th>
          <td>
            <a class="blog-title" href="http://waveintell.ai/blog/2024-kflow_1_en/">Frequency-guided flow generation? No, not just frequency, but energy (Part I)</a>
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 20%">Jan 29, 2026</th>
          <td>
            <a class="blog-title" href="https://rain-farm-1ce.notion.site/Who-am-I-when-I-talk-about-myself-2f71a04dab4c80a18622dbd3836e492f?source=copy_link">Who am I, when I talk about myself?</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</section>

<style>
  .interests-section {
    border-bottom: 1px solid var(--global-divider-color);
    margin: 0.25rem 0 1.85rem;
    padding-bottom: 1.5rem;
  }
  .interests-section h2,
  .notes-section h2 {
    font-size: 1.35rem;
    line-height: 1.2;
    margin-bottom: 0.35rem;
  }
  .interests-section__intro {
    color: var(--global-text-color-light);
    margin-bottom: 0.65rem;
  }
  .interests-more {
    margin-top: 0;
  }
  .interests-more > summary {
    align-items: center;
    border: 1px solid var(--global-theme-color);
    border-radius: 6px;
    color: var(--global-theme-color);
    cursor: pointer;
    display: inline-flex;
    font-weight: 400;
    gap: 0.45rem;
    line-height: 1.1;
    list-style: none;
    list-style-type: none;
    outline: none;
    padding: 0.42rem 0.8rem;
    transition: all 0.2s ease;
    user-select: none;
    width: fit-content;
  }
  .interests-more > summary:focus {
    outline: none;
  }
  .interests-more > summary:focus-visible {
    outline: 1px solid currentColor;
    outline-offset: 3px;
  }
  .interests-more > summary::-webkit-details-marker {
    display: none;
  }
  .interests-more > summary::marker {
    content: "";
    display: none;
    font-size: 0;
  }
  .interests-more__label--open {
    display: none;
  }
  .interests-more[open] .interests-more__label--closed {
    display: none;
  }
  .interests-more[open] .interests-more__label--open {
    display: inline;
  }
  .interests-more__chevron {
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    display: inline-block;
    height: 0.45rem;
    transform: rotate(45deg) translateY(-2px);
    transition: transform 0.2s ease;
    width: 0.45rem;
  }
  .interests-more[open] .interests-more__chevron {
    transform: rotate(225deg) translateY(-1px);
  }
  .interests-more > summary:hover {
    background-color: var(--global-theme-color);
    color: white;
  }
  .interests-more__content {
    margin-top: 0.8rem;
    max-width: 42rem;
  }
  .interests-more__content > p:first-child {
    margin-top: 0;
  }
  .interests-more__content p {
    margin-bottom: 0.85rem;
  }
  .interests-section .audio-player {
    margin: 0.45rem 0 1rem;
  }
  .interests-section .audio-player audio {
    max-width: 520px;
    width: 100%;
  }
  .interests-section .audio-player__title {
    color: var(--global-text-color);
    font-weight: 600;
    margin: 0 0 0.35rem;
  }
  .blogs-list {
    margin-top: 0.65rem;
  }
  .blogs-list .table {
    margin-bottom: 0;
  }
  .blog-title {
    color: var(--global-theme-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .blog-title:hover {
    color: var(--global-hover-color);
    text-decoration: underline;
  }
  @media (max-width: 575.98px) {
    .blogs-list th,
    .blogs-list td {
      display: block;
      width: 100% !important;
    }

    .blogs-list td {
      padding-bottom: 0.75rem;
    }
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
