<template>
    <div>
        <footer class="footer">
            <div class="content has-text-centered">
                <!-- <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p> -->
                <figure>
                    <span class="is-size-6">designed by</span>&nbsp;
                    <a href="http://boardroomlimited.com.au" title="Boardroom pty limited">
                        <img src="../../assets/images/boardroomlimited.png" class="image" alt="BoardRoom" border="0">
                    </a>
                </figure>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'FooterPart',
  props: {
    msg: String,
  },
};
</script>

<style lang='scss' scoped>

</style>
