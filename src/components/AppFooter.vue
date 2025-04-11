<template>
    <footer class="d-flex flex-wrap justify-content-center gap-2 gap-md-0 justify-content-md-between align-items-center py-3 px-4 bg-light flex-column flex-md-row">
        <div class="col-md-8 d-flex align-items-center">
            <span>© 2021-2025 Copyright:</span>
            <NuxtLink class="ms-1 text-reset fw-bold" to="https://github.com/NekoNyaDevs">NekoNya Developers</NuxtLink>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex fs-3">
            <li>
                <NuxtLink to="https://github.com/NekoNyaDevs/website" class="footer-icon"><i class="bi bi-github"></i></NuxtLink>
            </li>
            <li class="ms-3">
                <NuxtLink to="https://discord.gg/DUnuSfFdEM" class="footer-icon"><i class="bi bi-discord"></i></NuxtLink>
            </li>
            <li class="ms-3">
                <NuxtLink to="mailto://contact@classydev.fr" class="footer-icon"><i class="bi bi-envelope-fill"></i></NuxtLink>
            </li>
        </ul>
    </footer>
</template>