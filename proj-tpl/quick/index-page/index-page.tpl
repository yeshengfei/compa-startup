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
                <div class="js-right-info-wrap right-info-wrap"></div>


                <div class="content-left left-base-info">
                    <div class="title-name">
                        {{detail.name}}
                    </div>
                    <div class="area">
                        {{detail.area}}
                    </div>
                    <div class="description info-item">
                        {{each descriptionList as value index}}
                            {{value}} <br>
                        {{/each}}
                    </div>
                    <ul class="info-item config">
                        {{each configList as value index}}
                            <li>
                                <span class="
                                    {{if value=='床'}}
                                        bed
                                    {{else if value=='衣柜'}}
                                        chest
                                    {{else if value=='书桌'}}
                                        desk
                                    {{else if value=='Wi-Fi'}}
                                        wifi
                                    {{else if value=='洗衣机'}}
                                        washing
                                    {{else if value=='热水器'}}
                                        calorifier
                                    {{else if value=='空调'}}
                                        air-condition
                                    {{else if value=='微波炉'}}
                                        microwave
                                    {{else if value=='智能锁'}}
                                        lock
                                    {{else}}
                                        chair
                                    {{/if}}
                                "></span>{{value}}
                            </li>

                        {{/each}}
                    </ul>
                    <div class="item-info">
                        <img src="images/map-sample.png" width="100%">
                    </div>
                </div>
            </div>
        </div>
        <!--基础信息-->
        <div class="content-block">
            <div class="content-inner">
                <div class="content-block-title">推荐房源</div>
                <div class="recommand-house-wrap">

                </div>
            </div>
        </div>
        <div class="content-block">
            <div class="content-inner">

            </div>
        </div>
    </div>
</script>