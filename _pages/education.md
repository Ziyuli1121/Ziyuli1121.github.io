---
layout: page
title: Education
permalink: /education/
description:
nav: true
nav_order: 2
---

<!-- 在页面头部插入Lightbox模态框 -->
<div id="lightbox-modal" class="lightbox-modal">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
  <div id="lightbox-caption"></div>
</div>

<div class="education">

  {% for entry in site.data.cv %}
    {% if entry.title == "Education" %}
      {% for edu in entry.contents %}
      <div class="card mt-3 p-3">
        <div class="row no-gutters">
          {% if edu.image %}
            <div class="col-md-4">
              <img src="{{ edu.image | relative_url }}" class="card-img project-image lightbox-trigger" alt="{{ edu.title }}" data-title="{{ edu.title }}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
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
                {% if edu.links %}
                <div class="project-links mt-3">
                  {% for link in edu.links %}
                  <a href="{{ link.url }}" target="_blank" class="btn btn-sm project-link-btn">{{ link.name }}</a>
                  {% endfor %}
                </div>
                {% endif %}
              </div>
            </div>
          {% else %}
            <div class="col-12">
              <div class="card-body">
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
                {% if edu.links %}
                <div class="project-links mt-3">
                  {% for link in edu.links %}
                  <a href="{{ link.url }}" target="_blank" class="btn btn-sm project-link-btn">{{ link.name }}</a>
                  {% endfor %}
                </div>
                {% endif %}
              </div>
            </div>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    {% endif %}
  {% endfor %}

</div>

<style>
  .card {
    background-color: var(--global-card-bg-color);
    border-color: var(--global-card-border-color);
    overflow: hidden;
  }
  .card-title, .card-text, .card li {
    color: var(--global-text-color);
  }
  .card-subtitle {
    color: var(--global-text-color-light);
  }
  .project-link-btn { background-color: var(--global-theme-color); color: white; margin-right: 0.5rem; margin-bottom: 0.5rem; transition: all 0.3s ease; }
  .project-link-btn:hover { background-color: var(--global-hover-color); transform: translateY(-2px); box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
  .project-image { width: auto; max-width: 100%; height: auto; object-fit: contain; border-radius: 4px; display: block; margin: 0 auto; cursor: pointer; }
  @media (max-width: 767.98px) { .project-image { width: auto; max-width: 100%; height: auto; margin-bottom: 1rem; } }
  .lightbox-modal { display: none; position: fixed; z-index: 9999; padding-top: 50px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.9); }
  .lightbox-content { margin: auto; display: block; max-width: 90%; max-height: 80vh; }
  #lightbox-caption { margin: auto; display: block; width: 80%; max-width: 700px; text-align: center; color: white; padding: 10px 0; height: 50px; font-weight: bold; }
  .lightbox-close { position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; transition: 0.3s; cursor: pointer; }
  .lightbox-close:hover, .lightbox-close:focus { color: #bbb; text-decoration: none; cursor: pointer; }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('lightbox-modal');
    var modalImg = document.getElementById('lightbox-img');
    var captionText = document.getElementById('lightbox-caption');
    var closeBtn = document.getElementsByClassName('lightbox-close')[0];
    var images = document.querySelectorAll('.lightbox-trigger');
    images.forEach(function(img) { img.onclick = function() { modal.style.display = 'block'; modalImg.src = this.src; captionText.innerHTML = this.getAttribute('data-title'); } });
    closeBtn.onclick = function() { modal.style.display = 'none'; };
    modal.onclick = function(event) { if (event.target === modal) { modal.style.display = 'none'; } };
    document.addEventListener('keydown', function(event) { if (event.key === 'Escape' && modal.style.display === 'block') { modal.style.display = 'none'; } });
  });
</script>
