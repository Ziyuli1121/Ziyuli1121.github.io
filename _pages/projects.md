---
layout: page
title: Projects
permalink: /projects/
description: My technical and research projects.
nav: true
nav_order: 4
---

<div class="projects-direct">

  {% for entry in site.data.cv %}
    {% if entry.title == "Projects" %}
      {% for project in entry.contents %}
      
      {% if project.url %}
      <a href="{{ project.url }}" target="_blank" class="project-link" style="text-decoration: none; color: inherit;">
      {% endif %}
      
      <div class="card mt-3 p-3">
        <h5 class="card-title">{{ project.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ project.institution }}</h6>
        <p class="card-text">{{ project.year }}</p>
        {% if project.description %}
        <ul class="card-text font-weight-light">
          {% for item in project.description %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      
      {% if project.url %}
      </a>
      {% endif %}
      
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
  .project-link:hover .card {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
</style>
