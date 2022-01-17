<script>
    import Title from '$lib/Title.svelte';
    import '../../styles/global.css';
</script>

<header>
    <nav>
        <Title title="Game Reviews"/>
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
        </div>
    </nav>

</header>
<main>
    <slot></slot>
</main>
<footer>
    <p>
        Copyright 2022 Game Reviews
    </p>
</footer>

<style>
    header {
        text-align: center;
        background: rgba(0,0,0,0.1);
    }

    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }

    .links {
        margin-left: auto;
    }
    a {
        margin-left: auto;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
</style>