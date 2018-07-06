<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://www.calix.com.au" title="Calix limited">
                    <img src="../../assets/images/logo.svg" width="200" height="114" alt="Calix limited">
                    <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
                </a>

                <!-- <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a> -->
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'HeaderPart',
  props: {
    msg: String,
  },
};
</script>

<style lang='scss' scoped>
.navbar {
    border-bottom: 0.05rem solid #76c4e3;
    border-top: 0.05rem solid #ff8300;
}
.navbar-item img {
    max-height:  100%;
}
</style>
