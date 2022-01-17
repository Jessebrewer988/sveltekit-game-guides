<script>
    import Title from '$lib/Title.svelte';
    import '../styles/global.css';
</script>

<header>
    <Title title="Game Reviews"/>
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
        display: flex;
        justify-content: center;
    }

    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
</style>