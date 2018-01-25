<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            msg: ''
        }
    },
    computed: {

    },
    methods:{

    },
    components: {

    }
}
</script>

<style scoped>
  .child{
    background-color: #00bbff;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
