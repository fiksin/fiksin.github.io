<template>
    <div>
        <nav class="nav">
            <g-link class="nav__link" to="/">home</g-link>
            <g-link class="nav__link" to="/about/">about</g-link>
            <g-link class="nav__link" to="/projects/">projects</g-link>
            <!-- <g-link class="nav__link" to="/test/">test</g-link> -->
            <!-- <g-link class="nav__link" to="/pagelist">pagelist</g-link> -->
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style>
.nav__link {
  margin-left: 20px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}
</style>