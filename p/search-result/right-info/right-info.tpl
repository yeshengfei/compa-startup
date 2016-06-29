<script type="text/html" id="rightInfoTpl">
    <div class="cpn-right-info-wrap">
        <div class="price-wrap">
            {{detail.price}}
        </div>
        <div class="content-wrap">
            {{each detail.detail as value index}}
                <div class="info-item">{{value}}</div>
            {{/each}}
            <a href="http://www.ziroom.com/z/vr/60023149.html">
                <div class="btn-buy">
                    立即预定
                </div>
            </a>
        </div>

    </div>
</script>