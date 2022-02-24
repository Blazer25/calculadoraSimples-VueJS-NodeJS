<template>
        <div class="message-container">
            <h1>{{ mensagem }}</h1>
    </div>
</template>

<script>
export default {
    name:'Mensagem',
    props:{
        mensagem: String
    }
}
</script>

<style scoped>
    .message-container{
        color: var(--deep-purple);
        background: var(--light-purple);
        border: 2px solid var(--deep-purple);
        border-radius: 3px;
        padding: 12px;
        max-width: 400px;
        margin: 30px auto;
        font-weight: normal;
        font-size: 10px;
        text-align: center;

        margin-top: 280px;
    }

    @media (max-width: 700px) {
        .message-container{
            font-size: 8px;
            max-width: 200px;
            max-height: 500px;
            margin-left: 25%;
            margin: 25% 0 10% auto;
            margin-top: 43%;       }
    }
</style>