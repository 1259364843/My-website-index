
$(function () {

        $("#demo-nav li a").click(function (e) {
            var href = $(this).attr("href");
            $(document).scrollTop($("#demo-tab").offset().top - 100);
            $("#demo-list li a[href=" + href + "]").tab("show");
            e.preventDefault();
        })


        $('.carousel').carousel({
            interval: 3000,
            pause: null,
            wrap: true
        })

        $(".demo-pause").click(function () {
            $('.carousel').carousel('pause');
        })
        $(".demo-start").click(function () {
            $('.carousel').carousel('cycle');
        })

        //代表每次轮播执行的执行触发
        $('.carousel').on("slide.bs.carousel", function () {
            //			     	console.log("carousel1");
        })
        //代表轮播每次过渡完成的时候触发
        $('.carousel').on("slid.bs.carousel", function () {
            //			     	console.log("carousel2");
        })
    }) 