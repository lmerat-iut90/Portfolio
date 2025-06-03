<template>
  <div>
      <div class="content-wrapper">
          <img alt="Leslie MERAT" src="../assets/Photo.jpg" class="profile-image">
          <div class="text-content">
              <h1>À propos de moi</h1>
          </div>
      </div>
      <h2>Présentation</h2>
      <div class="presentation">
          <p>Bonjour ! Je m'appelle Leslie MERAT, je suis actuellement en deuxième année de BUT informatique à l'IUT Nord Franche-Comté.</p>
      </div>

      <h2>Mes compétences</h2>
      <div class="content-box">
          <div class="content">
              <div class="content-little-box">
                  <p style="font-weight: bold;">Langages</p>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>Python </p>
                      </div>
                      <div class="context-group">
                          <p>Java</p>
                      </div>
                      <div class="context-group">
                          <p>C</p>
                      </div>
                  </div>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>HTML</p>
                      </div>
                      <div class="context-group">
                          <p>CSS</p>
                      </div>
                      <div class="context-group">
                          <p>Kotlin</p>
                      </div>
                  </div>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>JavaScript</p>
                      </div>
                      <div class="context-group">
                          <p>C ++</p>
                      </div>
                      <div class="context-group">
                          <p>Swift</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="content">
              <div class="content-little-box">
                  <p style="font-weight: bold;">Bases de données</p>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>SQL Server</p>
                      </div>
                      <div class="context-group">
                          <p>MySQL</p>
                      </div>
                  </div>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>PostgreSQL</p>
                      </div>
                      <div class="context-group">
                          <p>MongoDB</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="content">
              <div class="content-little-box">
                  <p style="font-weight: bold;">Frameworks</p>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>Bootstrap</p>
                      </div>
                      <div class="context-group">
                          <p>Flask</p>
                      </div>
                  </div>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>Vue.JS</p>
                      </div>
                      <div class="context-group">
                          <p>Express</p>
                      </div>
                  </div>
                  <div class="content-sub-box">
                      <div class="context-group">
                          <p>Tailwind</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <h2>Mon parcours</h2>
      <div class="content-box">
          <div class="content2">
              <div class="content-little-box">
                  <p style="font-weight: bold;">Bac général (2023)</p>
                  <div>
                      <p>Spécialitées : </p>
                      <p>NSI (Numérique et Science de l'informatique)</p>
                      <p>Mathématiques</p>
                      <p>Physique-Chimie</p>
                  </div>
              </div>
          </div>

          <div class="content2">
              <div class="content-little-box">
                  <p style="font-weight: bold;">BUT Informatique (2023-2026)</p>
                  <div>
                      <p>Parcours : </p>
                      <p>Réalisation d'applications : conception, développement, validation</p>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>

.presentation {
    color : black;
}
.content-wrapper {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-top: 50px;
    padding-left: 150px;
}
.content-box {
    display: flex;
    align-items: center;
    padding-left: 250px;
}
.content-little-box:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.content-sub-box {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
}
.context-group{
    display: grid;
    align-content: flex-start;
    row-gap: 1rem;
}
.profile-image {
    width: 200px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.content-little-box {
    padding : 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 225px;
    height: 225px;
    color : black;
}
.content {
    padding-left: 165px;
}
.content2 {
    padding-left: 300px;
}
.text-content {
    padding-left: 150px;
    max-width: 600px;
}
h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

h2 {
    color: #1F618D;
    font-weight: normal;
    text-align: center;
    margin: 0;
    padding-top: 40px;
    padding-bottom: 20px;
}
</style>
