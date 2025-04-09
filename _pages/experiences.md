---
layout: page
title: Experiences
permalink: /experiences/
description: My professional and research experiences.
nav: true
nav_order: 3
---

<div class="experiences">

  {% for entry in site.data.cv %}
    {% if entry.title == "Experience" %}
      {% for exp in entry.contents %}
      <div class="card mt-3 p-3">
        <h5 class="card-title">{{ exp.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ exp.institution }}</h6>
        <p class="card-text">{{ exp.year }}</p>
        {% if exp.description %}
        <ul class="card-text font-weight-light">
          {% for item in exp.description %}
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
