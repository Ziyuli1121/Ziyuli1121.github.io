---
layout: page
title: Honors & Awards
permalink: /honor/
description:
nav: true
nav_order: 3
---

<div class="honors-compact">

  {% for entry in site.data.cv %}
    {% if entry.title == "Honors and Awards" %}
      <div class="honor-grid">
      {% for honor in entry.contents %}
        <article class="honor-card">
          <div class="honor-card__date">{{ honor.year | default: "Date TBA" }}</div>
          <div class="honor-card__title">{{ honor.title }}</div>
        </article>
      {% endfor %}
      </div>
    {% endif %}
  {% endfor %}

</div>

<style>
  .honors-compact {
    margin-top: 1rem;
  }
  .honor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.75rem;
  }
  .honor-card {
    background-color: var(--global-card-bg-color);
    border: 1px solid var(--global-card-border-color);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    justify-content: flex-start;
    min-height: 96px;
    padding: 0.85rem 0.95rem;
  }
  .honor-card__date {
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0;
  }
  .honor-card__title {
    color: var(--global-text-color);
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.35;
  }
  @media (max-width: 767.98px) {
    .honor-grid {
      grid-template-columns: 1fr;
    }
    .honor-card {
      min-height: auto;
    }
  }
</style>
