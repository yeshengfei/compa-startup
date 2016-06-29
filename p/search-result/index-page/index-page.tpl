<script type="text/html" id="indexPageTpl">
    <div class="js-index-page-wrap index-page-wrap">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                {{each roomImageList as value index}}
                <div class="swiper-slide">
                    <img src="{{value}}" width="100%" height="100%">
                </div>
                {{/each}}
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="content-block">
            <div class="content-inner" style="position: relative">
                <div class="js-right-info-wrap right-info-wrap">

                </div>
            </div>
        </div>
        <!--基础信息-->
        <div class="content-block">
            <div class="content-inner">
                <div class="content-left">

                </div>
            </div>
        </div>
        <div class="content-block">
            <div class="content-inner">

            </div>
        </div>
    </div>
</script>