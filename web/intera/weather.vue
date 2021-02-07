<template>
    <div class="weather">
        <div class="weather_wrapper">
            <div class="four">
                <no-ssr>
                    <v-mini-weather class="weather" size="normal" type="multiline" color="666666"></v-mini-weather>
                </no-ssr>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.weather {
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>