---
layout: page
title: Portfolio
permalink: /portfolio/
description:
nav: true
nav_order: 2
---

<!-- Lightbox Modal -->
<div id="lightbox-modal" class="lightbox-modal">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
  <div id="lightbox-caption"></div>
</div>

<div class="portfolio-page">
  <section id="honors" class="portfolio-section portfolio-section--honors">
    <h2>Honors & Awards</h2>

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
  </section>

  <section id="projects" class="portfolio-section portfolio-section--projects">
    <h2>Projects</h2>

    {% for entry in site.data.cv %}
      {% if entry.title == "Projects" %}
        {% for project in entry.contents %}
          {% if forloop.index <= 2 %}

        <div class="card mt-3 p-3 project-card">
          <div class="row no-gutters">
            {% if project.image %}
            <div class="col-md-4">
              <img src="{{ project.image | relative_url }}" class="card-img project-image lightbox-trigger" alt="{{ project.title }}" data-title="{{ project.title }}">
            </div>
            <div class="col-md-8">
            {% else %}
            <div class="col-12">
            {% endif %}
              <div class="card-body">
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

                {% if project.links %}
                <div class="project-links mt-3">
                  {% for link in project.links %}
                    <a href="{{ link.url }}" target="_blank" class="btn btn-sm project-link-btn">
                      {{ link.name }}
                    </a>
                  {% endfor %}
                </div>
                {% elsif project.url %}
                <div class="project-links mt-3">
                  <a href="{{ project.url }}" target="_blank" class="btn btn-sm project-link-btn">
                    Visit Project
                  </a>
                </div>
                {% endif %}
              </div>
            </div>
          </div>
        </div>

          {% endif %}
        {% endfor %}

        <details class="projects-more">
          <summary>
            <span class="projects-more__label projects-more__label--closed">More projects</span>
            <span class="projects-more__label projects-more__label--open">Show less</span>
            <span class="projects-more__chevron" aria-hidden="true"></span>
          </summary>
          <div class="projects-more__content">
            {% for project in entry.contents %}
              {% if forloop.index > 2 %}

              <div class="card mt-3 p-3 project-card">
                <div class="row no-gutters">
                  {% if project.image %}
                  <div class="col-md-4">
                    <img src="{{ project.image | relative_url }}" class="card-img project-image lightbox-trigger" alt="{{ project.title }}" data-title="{{ project.title }}">
                  </div>
                  <div class="col-md-8">
                  {% else %}
                  <div class="col-12">
                  {% endif %}
                    <div class="card-body">
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

                      {% if project.links %}
                      <div class="project-links mt-3">
                        {% for link in project.links %}
                          <a href="{{ link.url }}" target="_blank" class="btn btn-sm project-link-btn">
                            {{ link.name }}
                          </a>
                        {% endfor %}
                      </div>
                      {% elsif project.url %}
                      <div class="project-links mt-3">
                        <a href="{{ project.url }}" target="_blank" class="btn btn-sm project-link-btn">
                          Visit Project
                        </a>
                      </div>
                      {% endif %}
                    </div>
                  </div>
                </div>
              </div>

              {% endif %}
            {% endfor %}
          </div>
        </details>
      {% endif %}
    {% endfor %}
  </section>
</div>

<style>
  .portfolio-page {
    margin-top: 0.5rem;
  }
  .portfolio-section {
    scroll-margin-top: 5rem;
  }
  .portfolio-section + .portfolio-section {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 2.4rem;
    padding-top: 2rem;
  }
  .portfolio-section h2 {
    font-size: 1.65rem;
    margin-bottom: 1rem;
  }
  .honor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.75rem;
  }
  .honor-card {
    background-color: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
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
  .portfolio-page .card {
    background-color: var(--global-card-bg-color);
    border-color: var(--global-divider-color);
    overflow: hidden;
  }
  .portfolio-page .card-title,
  .portfolio-page .card-text,
  .portfolio-page .card li {
    color: var(--global-text-color);
  }
  .portfolio-page .card-subtitle {
    color: var(--global-text-color-light);
  }
  .project-link-btn {
    background-color: var(--global-theme-color);
    color: white;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    transition: all 0.3s ease;
  }
  .project-link-btn:hover {
    background-color: var(--global-hover-color);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    color: white;
    transform: translateY(-2px);
  }
  .project-image {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    height: auto;
    margin: 0 auto;
    max-height: 250px;
    object-fit: contain;
    width: 100%;
  }
  .projects-more {
    margin-top: 1rem;
  }
  .projects-more > summary {
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
    padding: 0.42rem 0.8rem;
    transition: all 0.2s ease;
  }
  .projects-more > summary::-webkit-details-marker {
    display: none;
  }
  .projects-more > summary::marker {
    content: "";
    display: none;
    font-size: 0;
  }
  .projects-more__label--open {
    display: none;
  }
  .projects-more[open] .projects-more__label--closed {
    display: none;
  }
  .projects-more[open] .projects-more__label--open {
    display: inline;
  }
  .projects-more__chevron {
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    display: inline-block;
    height: 0.45rem;
    transform: rotate(45deg) translateY(-2px);
    transition: transform 0.2s ease;
    width: 0.45rem;
  }
  .projects-more[open] .projects-more__chevron {
    transform: rotate(225deg) translateY(-1px);
  }
  .projects-more > summary:hover {
    background-color: var(--global-theme-color);
    color: white;
  }
  .projects-more__content {
    margin-top: 0.75rem;
  }
  .lightbox-modal {
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    height: 100%;
    left: 0;
    overflow: auto;
    padding-top: 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
  .lightbox-content {
    display: block;
    margin: auto;
    max-height: 80vh;
    max-width: 90%;
  }
  #lightbox-caption {
    color: white;
    display: block;
    font-weight: bold;
    height: 50px;
    margin: auto;
    max-width: 700px;
    padding: 10px 0;
    text-align: center;
    width: 80%;
  }
  .lightbox-close {
    color: #f1f1f1;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
    position: absolute;
    right: 35px;
    top: 15px;
    transition: 0.3s;
  }
  .lightbox-close:hover,
  .lightbox-close:focus {
    color: #bbb;
    cursor: pointer;
    text-decoration: none;
  }
  @media (max-width: 767.98px) {
    .portfolio-section + .portfolio-section {
      margin-top: 2rem;
      padding-top: 1.6rem;
    }
    .honor-grid {
      grid-template-columns: 1fr;
    }
    .honor-card {
      min-height: auto;
    }
    .project-image {
      margin-bottom: 1rem;
      max-height: 200px;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('lightbox-modal');
    var modalImg = document.getElementById('lightbox-img');
    var captionText = document.getElementById('lightbox-caption');
    var closeBtn = document.getElementsByClassName('lightbox-close')[0];
    var images = document.querySelectorAll('.lightbox-trigger');

    if (!modal || !modalImg || !captionText || !closeBtn) {
      return;
    }

    images.forEach(function(img) {
      img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.getAttribute('data-title');
      };
    });

    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };

    modal.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  });
</script>
