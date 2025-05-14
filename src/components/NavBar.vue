<template>
    <nav class="navbar">
        <div class="nav-links">
            <router-link :to="{name:'home'}">Accueil</router-link>
            <router-link :to="{name:'about'}">À propos de moi</router-link>
            <router-link :to="{name:'work'}">Portfolio</router-link>
            <router-link :to="{name:'contact'}">Contact</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.navbar {
    background-color: #2c3e50;
    padding: 1rem 0;
    border-radius: 10px;
}

.nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #1F618D;
}

.nav-links a.router-link-exact-active {
    font-weight: bold;
    border-bottom: 2px solid #1F618D;
}
</style>