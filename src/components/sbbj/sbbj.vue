<template>
    <div>
        <div class="sb_out">
            <div class="sb_head">#header</div>
            <div class="sb_body">
                <div class="sb_b_center">#center</div>
                <div class="sb_b_left">#left</div>
                <div class="sb_b_right">#right</div>
            </div>
            <div class="sb_foot">#footer</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sb_out{
    display: flex;
    flex: 1;
    flex-direction: column;
    color: white;
    min-height: 100vh;
}
.sb_head,.sb_foot{
    /* flex: 1; */
    background: gray;
    color: white;
    height: 40px;
}
.sb_body{
    display: flex;
    flex: 1;
    color: white;
}
.sb_b_center{
        flex: 1;
        color: gold;
}
.sb_b_left,.sb_b_right{
    flex: 0 0 12em;
    background: black;
     color: white;
}
.sb_b_left{
    order: -1;
}
</style>