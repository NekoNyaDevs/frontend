<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <div class="navbar-brand">
          <NuxtLink class="navbar-brand-items" to="/">
            <img src="/img/logo_rounded.png" alt="Brand PNG" width="40" height="40">
            <p>NekoNya</p>
          </NuxtLink>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/#about">About</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Random Images
              </a>
              <ul class="dropdown-menu" aria-labelledby="imagesDropdown">
                <li><NuxtLink class="dropdown-item" to="/random/neko">Random Neko</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/random/kitsune">Random Kitsune</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/random/hug">Random Hug</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/random/kiss">Random Kiss</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/random/pat">Random Pat</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/random/slap">Random Slap</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown" aria-labelledby="utilitiesDropdown">
              <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Utilities
              </a>
              <ul class="dropdown-menu">
                <li><NuxtLink class="dropdown-item" to="/8ball">8ball</NuxtLink></li>
                <li><NuxtLink class="dropdown-item" to="/owoify">Owoify</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Others
              </a>
              <ul class="dropdown-menu" aria-labelledby="otherDropdown">
                <li><a class="dropdown-item" href="/api/v1/">API</a></li>
                <li><NuxtLink class="dropdown-item" to="/random/lewd">NSFW</NuxtLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" target="_blank" href="https://discord.gg/DUnuSfFdEM">Post images</a></li>
                <li><a class="dropdown-item" target="_blank" href="mailto://contact@classydev.fr">Contact Us</a></li>
                <li><a class="dropdown-item" target="_blank" href="https://docs.classydev.fr/nekonya">API Docs</a></li>
                <li><a class="dropdown-item" target="_blank" href="https://github.com/NekoNyaDevs">Github</a></li>
                <li><a class="dropdown-item" target="_blank" href="https://discord.com/oauth2/authorize?client_id=1143297786566164624&permissions=8&integration_type=0&scope=bot+applications.commands">Discord Bot</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item disabled" href="#">More Soon...</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>