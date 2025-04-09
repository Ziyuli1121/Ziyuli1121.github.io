---
layout: page
title: Experiences
permalink: /experiences/
description:
nav: true
nav_order: 3
---

<!-- Lightbox Modal -->
<div id="experience-lightbox-modal" class="lightbox-modal">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" id="experience-lightbox-img">
  <div id="experience-lightbox-caption"></div>
</div>

<div class="experiences">

  {% for entry in site.data.cv %}
    {% if entry.title == "Experience" %}
      {% for exp in entry.contents %}
      <div class="card mt-3 p-3">
        <div class="row no-gutters">
          {% if exp.image %}
          <div class="col-md-4">
            <img src="{{ exp.image | relative_url }}" class="card-img experience-image lightbox-trigger" alt="{{ exp.title }}" data-title="{{ exp.title }}">
          </div>
          <div class="col-md-8">
          {% else %}
          <div class="col-12">
          {% endif %}
            <div class="card-body">
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
              
              {% if exp.links %}
              <div class="experience-links mt-3">
                {% for link in exp.links %}
                  <a href="{{ link.url }}" target="_blank" class="btn btn-sm experience-link-btn">
                    {{ link.name }}
                  </a>
                {% endfor %}
              </div>
              {% elsif exp.url %}
              <div class="experience-links mt-3">
                <a href="{{ exp.url }}" target="_blank" class="btn btn-sm experience-link-btn">
                  Visit Link
                </a>
              </div>
              {% endif %}
            </div>
          </div>
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
  .experience-link-btn {
    background-color: var(--global-theme-color);
    color: white;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
  }
  .experience-link-btn:hover {
    background-color: var(--global-hover-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  .experience-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
    max-height: 250px;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
  @media (max-width: 767.98px) {
    .experience-image {
      max-height: 200px;
      margin-bottom: 1rem;
    }
  }
  
  /* Lightbox styles */
  .lightbox-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
  }
  
  .lightbox-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80vh;
  }
  
  #experience-lightbox-caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: white;
    padding: 10px 0;
    height: 50px;
    font-weight: bold;
  }
  
  .lightbox-close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }
  
  .lightbox-close:hover,
  .lightbox-close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>

<script>
  // Wait for the DOM content to load
  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('experience-lightbox-modal');
    var modalImg = document.getElementById('experience-lightbox-img');
    var captionText = document.getElementById('experience-lightbox-caption');
    var closeBtn = modal.getElementsByClassName('lightbox-close')[0];
    
    // Add click handlers to all experience images
    var images = document.querySelectorAll('.experiences .lightbox-trigger');
    images.forEach(function(img) {
      img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.getAttribute('data-title');
      }
    });
    
    // Close the modal when clicking the × button
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
    
    // Close the modal when clicking outside the image
    modal.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
    
    // Close the modal on Escape key press
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
      }
    });
  });
</script>
