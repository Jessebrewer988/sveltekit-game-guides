<script>
    export let title = "";
</script>

<div class="title">
    <img src="/video-game-controller-svgrepo-com.svg" alt="site logo">
    <h1>{title}</h1>
</div>

<style>
    .title {
        display: flex;
    }

    .title img {
        margin-top: 10px;
        display: inline-block;
        height: 50px;
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    }

    .title h1 {
        margin-left: 10px;
    }
</style> 