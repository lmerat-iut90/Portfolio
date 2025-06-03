<template>
  <div>
      <h1>Portfolio</h1>
      <div>
          <div>
              <h2>Les compétences travaillées en BUT</h2>
              <div class="content-box">
                  <div class="box">
                      <div class="little-box">
                          <div class="center">
                              <div class="title">
                                  <p>UE1</p>
                              </div>
                              <div class="content">
                                  <p>Réaliser un développement d'application</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="box">
                      <div class="little-box">
                          <div class="center">
                              <div class="title">
                                  <p>UE2</p>
                              </div>
                              <div class="content">
                                  <p>Optimiser des applications</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="box">
                      <div class="little-box">
                          <div class="center">
                              <div class="title">
                                  <p>UE3</p>
                              </div>
                              <div class="content">
                                  <p>Administrer des systèmes informatiques communicants complexes</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="box">
                      <div class="little-box">
                          <div class="center">
                              <div class="title">
                                  <p>UE4</p>
                              </div>
                              <div class="content">
                                  <p>Gérer des données de l'information</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="box">
                      <div class="little-box">
                          <div class="center">
                              <div class="title">
                                  <p>UE5</p>
                              </div>
                              <div class="content">
                                  <p>Conduire un projet</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="box">
                      <div class="little-box">
                          <div class="center">
                              <div class="title">
                                  <p>UE6</p>
                              </div>
                              <div class="content">
                                  <p>Collaborer au sein d'une équipe informatique</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div>
              <h2>Mes projets</h2>
          </div>
      </div>
  </div>
</template>

<style scoped>
.content-box{
    display: flex;
    justify-content: center;
    align-items: center;


}

.box{
    padding: 8px;
    align-items: center;
}

.little-box{
    padding: 4px;
    background-color: #1F618D;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    border-radius: 360px;
}

.little-box:hover{
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.title{
    color: white;
    font-weight: bold;
}

.content{
    color: white;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
}

.content p, .title p {
    margin: 0;
    padding: 4px 0;
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

<script>
export default {
    name : 'WorkPage'
}
</script>