<template>
  <div>
      <div class="content-wrapper">
          <img alt="Leslie MERAT" src="../assets/Photo.jpg" class="profile-image">
          <div class="text-content">
              <h1>À propos de moi</h1>
          </div>
      </div>
      <h2>Présentation</h2>

      <h2>Mes compétences</h2>
      <div class="content-box">
          <div class="language">
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
                  <div class="context-group">
                      <p>C ++</p>
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
                      <p>JavaScript</p>
                  </div>
              </div>
          </div>

          <div class="language">
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
      <h2>Mon parcours</h2>

  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
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
.language {
    padding : 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    text-align: left;
    margin: 0;
    padding-left: 50px;
    padding-top: 40px;
}
</style>