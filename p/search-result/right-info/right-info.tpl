<script type="text/html" id="rightInfoTpl">
    <div class="cpn-right-info-wrap">
        <div class="price-wrap">
            $ 15.33
        </div>
        <div class="content-wrap">
            {{each detail.detail as value index}}
                <div class="info-item">{{value}}</div>
            {{/each}}
            <div class="btn-buy">
                立即预定
            </div>
        </div>

    </div>
</script>