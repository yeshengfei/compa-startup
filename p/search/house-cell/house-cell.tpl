<script type="text/html" id="houseCellTpl">
    <div class="js-house-cell-wrap house-cell-wrap">
        <div class="image-and-info">
            <a href="/p/search-result/">
                <img src="https://z1.muscache.com/ac/pictures/b8b2210c-eb77-4612-9301-a0fee64e4f78.jpg?interpolation=lanczos-none&amp;size=x_medium&amp;output-format=jpg&amp;output-quality=70"
                     width="400" height="265">
            </a>

            <div class="price-wrap">￥{{price}}</div>
        </div>
        <div class="badge-wrap float-right">
            {{if isChoice}}
                <span class="badge">精选</span>
            {{/if}}
            {{if source == 1}}
                <span class="badge orange">自如</span>
            {{else}}
                <span class="badge green">魔方</span>
            {{/if}}
        </div>
        <div class="sub-info">
            <div class="title">市中心美式风情公寓3室2厅</div>
            <div class="sub-title">徐汇|上海南站</div>
        </div>

    </div>
</script>