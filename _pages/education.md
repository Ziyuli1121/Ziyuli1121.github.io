---
layout: page
title: Education
permalink: /education/
description:
nav: true
nav_order: 2
---

<div class="education">

  {% for entry in site.data.cv %}
    {% if entry.title == "Education" %}
      {% for edu in entry.contents %}
      <div class="card mt-3 p-3">
        <h5 class="card-title">{{ edu.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ edu.institution }}</h6>
        <p class="card-text">{{ edu.year }}</p>
        {% if edu.description %}
        <ul class="card-text font-weight-light">
          {% for item in edu.description %}
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
