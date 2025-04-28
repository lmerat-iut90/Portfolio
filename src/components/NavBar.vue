<template>
    <nav>
        <div>
            <router-link :to="{name:'about'}">À propos de moi</router-link>
            <router-link :to="{name:'work'}">Mon travail</router-link>
            <router-link :to="{name:'contact'}">Contact</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>