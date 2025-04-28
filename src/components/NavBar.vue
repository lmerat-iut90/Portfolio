<template>
    <nav>
      <div>
          <router-link :to="{name:'about'}"><p>À propos de moi</p></router-link>
          <router-link :to="{name:'travail'}"><p>Mon travail</p></router-link>
          <router-link :to="{name:'contact'}"><p>Contact</p></router-link>
      </div>

    </nav>
</template>


<script>
export default {
    name: 'NavBar',
}
</script>