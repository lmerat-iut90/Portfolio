<template>
    <div class="home-container">
        <h1>Leslie MERAT</h1>
        <h2>Étudiante en BUT informatique</h2>
        <div class="content-wrapper">
            <router-link to="/about" >
                <img alt="Leslie MERAT" src="../assets/Photo.jpg" class="profile-image clickable-image">
            </router-link>


            <div class="text-content">
                <router-link to="/work" >
                    <img alt="Projets" src="../assets/code.jpeg" class="profile-image2 clickable-image">
                </router-link>

            </div>

        </div>
        <div class="bottom">
            <router-link to="/contact">
                <img alt="Leslie MERAT" src="../assets/contact.png" class="profile-image3 clickable-image">
            </router-link>
        </div>


    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.content-wrapper {
    display: flex;
    align-items: center;
    gap: 3rem;
}



.profile-image {
    width: 400px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.profile-image2 {
    width: 730px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.profile-image3 {
    width: 150px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}

.clickable-image {
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.clickable-image:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.text-content {
    max-width: 600px;
}
.bottom {
    display: flex;
    justify-content: flex-start;
    padding-left: 100px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

h2 {
    font-size: 1.5rem;
    color: #1F618D;
    font-weight: normal;
}

</style>