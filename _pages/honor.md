---
layout: page
title: Honors & Awards
permalink: /honor/
description: My academic achievements and recognitions.
nav: true
nav_order: 5
---

<div class="honors">

  {% for entry in site.data.cv %}
    {% if entry.title == "Honors and Awards" %}
      {% for honor in entry.contents %}
      <div class="card mt-3 p-3">
        <h5 class="card-title">{{ honor.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ honor.institution }}</h6>
        <p class="card-text">{{ honor.year }}</p>
        {% if honor.description %}
        <ul class="card-text font-weight-light">
          {% for item in honor.description %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      {% endfor %}
    {% endif %}
  {% endfor %}

</div>

<style>
  .card {
    background-color: var(--global-card-bg-color);
    border-color: var(--global-card-border-color);
  }
  .card-title, .card-text, .card li {
    color: var(--global-text-color);
  }
  .card-subtitle {
    color: var(--global-text-color-light);
  }
</style>
