//MOLITOR SCRIPTS

this.molitorscripts = function () {


    ////////////////
    //VARIABLES
    ////////////////
    var view = jQuery(window),
        html = jQuery('html'),
        body = jQuery('body'),
        continueOn = jQuery('.continueOn'),
        wrapper = jQuery('#wrapper'),
        headerContainer = jQuery('#headerContainer'),
        header = jQuery('#header'),
        topPanel = jQuery('#topPanel'),
        innerTopPanel = jQuery('.innerTopPanel'),
        footer = jQuery("#footer"),
        mainPanel = jQuery("#mainPanel"),
        innerSection = jQuery('.innerSection, #mainPanel > #main'),
        bottomPanel = jQuery('#bottomPanel'),
        sidebar = jQuery('#sidebar'),
        headerSearch = jQuery("#headerSearch"),
        searchInput = jQuery('#headerSearch input[type="text"]'),
        navigation = jQuery('#navigation'),
        loadingContainer = jQuery('#loadingContainer');
    //TABS VARS
    var tabs = jQuery("#tabs"),
        tab = jQuery('.tab'),
        tabNav = jQuery('#tabNav'),
        tabNavLi = jQuery('#tabNav > li'),
        tabNavLia = jQuery('#tabNav > li a'),
        tabNavSpan = jQuery('#tabNav span'),
        tabNavLength = tabNavLi.length,
        tabNavWidth = 100/tabNavLength;
        tabNext = jQuery('#nextTab'),
        tabPrev = jQuery('#prevTab'),
        tabControls = jQuery('.tabControls');
    //SLIDER VARS
    var sliderContainer = jQuery('#sliderContainer'),
        homeSlider = jQuery('#homeSlider'),
        homeSlideLi = jQuery('#homeSlideNav > li'),
        homeSlide = jQuery('.homeSlide'),
        slideNext = jQuery('#nextSlide'),
        slidePrev = jQuery('#prevSlide'),
        slideControls = jQuery('.slideControls'),
        slideDetails = jQuery('.slideDetails');
    //DEVICE VARS
    var deviceAgent = navigator.userAgent.toLowerCase(),
        iPadiPhone = deviceAgent.match(/(iphone|ipod|ipad)/);


    ////////////////
    //APPLE PRODUCTS
    ////////////////
    if (iPadiPhone) {
        body.addClass('iDivice');
    }

    ////////////////
    //RELATED POSTS
    ////////////////
    jQuery('#relatedPost .thumbLink').hover(function(){
        jQuery(this).next('h3').stop(true,true).fadeIn(200);
    },function(){
        jQuery(this).next('h3').stop(true,true).hide();
    });


    ////////////////
    //HEADER SEARCH
    ////////////////
    if (iPadiPhone) {
        headerSearch.addClass('mobileOs');
    } else {
        headerSearch.hover(function(){
            searchInput.stop(true,true).fadeIn(100);
            navigation.stop(true,true).animate({opacity:.1},100);
        },function(){
            searchInput.stop(true,true).fadeOut(100);
            navigation.stop(true,true).animate({opacity:1},100);
        });
    }



    ////////////////
    //TABS WIDTH
    ////////////////
    tabNavLi.css({width:tabNavWidth+"%"});

    ////////////////
    //REMOVE TITLE ATTRIBUTE
    ////////////////
    jQuery("#dropmenu a").removeAttr("title");

    ////////////////
    //RESPONSIVE MENU
    ////////////////
    // Create the dropdown base
    jQuery("<select id='selectMenu'><select />").appendTo("#navigation");

    // Create default option "Go to..."
    jQuery("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Menu"
    }).appendTo("#navigation select");

    // Populate dropdown with menu items
    jQuery("#dropmenu a").removeAttr("title").each(function() {
        var el = jQuery(this);

        el.parents('.sub-menu').each(function(){
            el.prepend('<span class="navDash">-</span>');
        });

        jQuery("<option />", {
           "value"   : el.attr("href"),
            "text"    : el.text()
        }).appendTo("#navigation select");
    });

    ////////////////
    //DROP DOWN MENU
    ////////////////
    jQuery("#selectMenu").change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });

    ////////////////
    //HIDE TABS
    ////////////////
    tab.not('.activeTab').hide();

    ////////////////
    //SLIDER STUFF
    ////////////////
    homeSlide.first().addClass('activeTab');
    homeSlide.not('.activeTab').hide();

    ////////////////
    //CONTINUE CLICK
    ////////////////
    continueOn.click(function(){
        var topPos = view.height();
        body.add(html).stop(true,true).animate({scrollTop : topPos},2000);
        return false;
    });

    ////////////////
    //PADDING HEIGHT
    ////////////////
    function paddingHeight(){

    if(body.is('.page-template-page-static-php, .page-template-page-static-wide-php, .search-no-results')){

        continueOn.css({display:"none"});
        topPanel.css({padding:"200px 0 100px"});
        innerSection.css({padding:"100px 0"});
        sidebar.css({padding:"100px 0"});

    }else{

        //RESETS
        topPanel.css({padding:"0"});
        innerSection.css({padding:"0"});
        tabs.css({padding:"0"});
        tabControls.css({top:"0"});
        sidebar.css({padding:"0"});

        //STANDARD VARS
        var windowHeight = view.height();

        //PADDING VARS
        var paddingMin = 130,
            containHeight = topPanel.outerHeight(),
            containPadding = (windowHeight - containHeight) / 2,
            //INNERSECTION
            innerSectionHeight = innerSection.outerHeight(),
            innerSectionPadding = (windowHeight - innerSectionHeight) / 2,
            //TABS
            tabsHeight = tabs.outerHeight(),
            tabsPadding = ((windowHeight - tabsHeight) / 2) - 30,
            //SIDEBAR
            sidebarHeight = sidebar.outerHeight(),
            footerHeight = footer.outerHeight(),
            sidebarPadding = (windowHeight - sidebarHeight - footerHeight) / 2;

        //PADDING CHECK
        if(containPadding < paddingMin){
            containPadding = paddingMin;
            continueOn.css({display:"none"});
        } else {
            continueOn.css({display:"block"});
        }
        if(innerSectionPadding < paddingMin){
            var innerSectionPadding = paddingMin;
        }
        //PADDING CHECK
        if(tabsPadding < paddingMin){
            var tabsPadding = paddingMin,
                tabControlsTop = "20%";
        }
        if(sidebarPadding < paddingMin){
            var sidebarPadding = paddingMin;
        }

        //TABS CONTROL CHECK
        if((tabsHeight+60) > windowHeight){
            var tabControlsTop = "265px",
                tabControlsMargin = "0";
        }else {
            var tabControlsTop = ((windowHeight/2)-30)+"px",
                tabControlsMargin = "-38px";
        }

        //APPLY NEW VARS
        topPanel.css({padding:containPadding+"px 0"});
        innerSection.css({padding:innerSectionPadding+"px 0"});
        tabs.css({padding:tabsPadding+"px 0"});
        sidebar.css({padding:sidebarPadding+"px 0"});

        //APPLY TAB CONTROL VARS
        tabControls.css({top:tabControlsTop,marginTop:tabControlsMargin},1000);

    }
    }

    ////////////////
    //TAB ONLY HEIGHT
    ////////////////
    function tabHeight(){
        //RESETS
        tabs.css({padding:"0"});

        //STANDARD VARS
        var paddingMin = 130,
            windowHeight = view.height();

        //PADDING VARS
        var tabsHeight = tabs.outerHeight(),
            tabsPadding = ((windowHeight - tabsHeight) / 2) - 30;

        //PADDING CHECK
        if(tabsPadding < paddingMin){
            var tabsPadding = paddingMin;
        }
        //APPLY NEW VARS
        tabs.css({padding:tabsPadding+"px 0"});
    }

    ////////////////
    //CREDIT ROLL FUNCTION
    ////////////////
    function creditRoll(){
        var creditRoll = jQuery('#creditRoll'),
            creditRollHeight = creditRoll.outerHeight(),
            creditRollSpeed = creditRollHeight /.03;
        creditRoll.animate({marginTop:"-"+ creditRollHeight +"px"},creditRollSpeed,'linear',function(){
            jQuery(this).css({marginTop:"300px"});
        });
    }

    ////////////////
    //TABS CLICK
    ////////////////
    tabNavLia.live('click',function(){

        if(view.width() > 900){
            html.add(body).stop(true,true).animate({scrollTop:topPanel.outerHeight()},1000);
        } else {
            html.add(body).stop(true,true).animate({scrollTop:(topPanel.outerHeight() + headerContainer.outerHeight())},1000);
        }

        jQuery('#creditRoll').stop(true,true).css({marginTop:"300px"});

        var newNav = jQuery(this),
            navIndex = newNav.parent().index(),
            activeNav = jQuery('.activeNav'),
            activeTab = jQuery('.activeTab');

        //HIDE AND REMOVE ACTIVE
        activeNav.removeClass('activeNav');
        activeTab.css({display:'none'});

        //SHOW AND CREATE ACTIVE
        newNav.parent().addClass('activeNav');
        jQuery('.tab:eq('+navIndex+')').addClass('activeTab').stop(true,true).fadeIn(500,function(){

            if(jQuery('#creditsList').hasClass('activeTab')){

                creditRoll();

                setInterval(function(){
                    creditRoll();
                },(jQuery('#creditRoll').outerHeight()) / .04);
            }
        });
        tabHeight();
        return false;
    });

    ////////////////
    //NEXT TAB CLICK
    ////////////////
    tabNext.live('click',function(){
        activeNav = jQuery('.activeNav');

        if(activeNav.index() == tabNavLi.last().index()){
            tabNavLi.first().children('a').click();
        }else{
            activeNav.next().children('a').click();
        }
        return false;
    });

    ////////////////
    //PREV TAB CLICK
    ////////////////
    tabPrev.live('click',function(){
        activeNav = jQuery('.activeNav');

        if(activeNav.index() == tabNavLi.first().index()){
            tabNavLi.last().children('a').click();
        }else{
            activeNav.prev().children('a').click();
        }
        return false;
    });

    ////////////////
    //CREATE SLIDE NAV ITEMS
    ////////////////
    homeSlide.each(function(){
        if(jQuery('.activeSlide').length){
            jQuery('<li></li>').appendTo('#homeSlideNav');
        }else{
            jQuery('<li class="activeSlide"></li>').appendTo('#homeSlideNav');
        }
    });

    ////////////////
    //SLIDER CLICK
    ////////////////
    homeSlideLi.live('click',function(){

        if(view.width() > 900){
            html.add(body).stop(true,true).animate({scrollTop:topPanel.outerHeight()},1000);
        } else {
            html.add(body).stop(true,true).animate({scrollTop:(topPanel.outerHeight() + headerContainer.outerHeight())},1000);
        }

        //REMOVE OLD IMAGES
        jQuery(".backstretch").not(":last").fadeOut(500,function(){
            jQuery(this).remove();
        });

        var newNav = jQuery(this),
            navIndex = newNav.index(),
            activeNav = jQuery('.activeSlide'),
            activeTab = jQuery('.activeTab');

        //HIDE AND REMOVE ACTIVE
        activeNav.removeClass('activeSlide');
        activeTab.css({display:'none'}).removeClass('activeTab');
        slideDetails.css({left:"-30px",display:'none'})

        //SHOW AND CREATE ACTIVE
        newNav.addClass('activeSlide');
        jQuery('.homeSlide:eq('+navIndex+')').addClass('activeTab').stop(true,true).fadeIn(300,function(){
            var customBg = jQuery(this).children('span').text();
            sliderContainer.backstretch(customBg,{speed:1000});
            slideDetails.stop(true,true).animate({left:"0px"},{duration: 1000, queue: false}).fadeIn({ duration: 300, queue: false });
        });
        return false;
    });

    ////////////////
    //NEXT SlIDE CLICK
    ////////////////
    slideNext.live('click',function(){
        var activeNav = jQuery('.activeSlide'),
            homeSlideLi = jQuery('#homeSlideNav > li');

        if(activeNav.index() == homeSlideLi.last().index()){
            homeSlideLi.first().click();
        }else{
            activeNav.next().click();
        }
        return false;
    });

    ////////////////
    //PREV SLIDE CLICK
    ////////////////
    slidePrev.live('click',function(){
        var activeNav = jQuery('.activeSlide'),
            homeSlideLi = jQuery('#homeSlideNav > li');

        if(activeNav.index() == homeSlideLi.first().index()){
            homeSlideLi.last().click();
        }else{
            activeNav.prev().click();
        }
        return false;
    });

    ////////////////
    //KEYS PRESS
    ////////////////
    jQuery(document).keydown(function(e){
        //LEFT KEY
        if (e.keyCode == 37) {
            slidePrev.click();
            tabPrev.click();
        }
        //RIGHT KEY
        if (e.keyCode == 39) {
            slideNext.click();
            tabNext.click();
        }
    });

    ////////////////
    //AUTO-ROTATE SLIDER FUNCTION
    ////////////////
    function autoRotate(){
    if(jQuery('body.home').length){

        //REMOVE OLD IMAGES
        jQuery(".backstretch").not(":last").fadeOut(500,function(){
            jQuery(this).remove();
        });

        var activeNav = jQuery('.activeSlide'),
            activeTab = jQuery('.activeTab'),
            homeSlideLi = jQuery('#homeSlideNav > li');

        //HIDE AND REMOVE ACTIVE
        activeNav.removeClass('activeSlide');
        activeTab.css({display:'none'}).removeClass('activeTab');
        slideDetails.css({left:"-30px",display:'none'})

        if(activeNav.index() == homeSlideLi.last().index()){
            var newNav = homeSlideLi.first(),
                navIndex = newNav.index(),
                newSlide = jQuery('.homeSlide:eq('+navIndex+')');

            //LOAD BACKGROUND
            var customBg = newSlide.children('span').text();
                sliderContainer.backstretch(customBg);

            //SHOW AND CREATE ACTIVE
            newNav.addClass('activeSlide');
            newSlide.addClass('activeTab').stop(true,true).fadeIn(300);
            slideDetails.stop(true,true).animate({left:"0px"},{duration: 1000, queue: false}).fadeIn({ duration: 300, queue: false });

            return false;

        }else{
            var newNav = activeNav.next(),
                navIndex = newNav.index(),
                newSlide = jQuery('.homeSlide:eq('+navIndex+')');

            //LOAD BACKGROUND
            var customBg = newSlide.children('span').text();
                sliderContainer.backstretch(customBg);

            //SHOW AND CREATE ACTIVE
            newNav.addClass('activeSlide');
            jQuery('.homeSlide:eq('+navIndex+')').addClass('activeTab').stop(true,true).fadeIn(300);
            slideDetails.stop(true,true).animate({left:"0px"},{duration: 1000, queue: false}).fadeIn({ duration: 300, queue: false });

            return false;
        }
    }
    }

    ////////////////
    //WINDOW SCROLL
    ////////////////
    view.bind("scroll", function(){
    if (!iPadiPhone && (view.width() > 900) && !body.is('.page-template-page-static-php, .page-template-page-static-wide-php, .search-no-results')){
        var windowHeight = view.height(),
            scrollPos = view.scrollTop(),
            topPanelHeight = topPanel.outerHeight(),
            mainPanelHeight = mainPanel.outerHeight(),
            bottomPos = mainPanelHeight + topPanelHeight,
            stopIt = windowHeight + scrollPos;

            if(bottomPos < stopIt){
                mainPanel.addClass('bottomsUp');
                bottomPanel.css({"marginTop":mainPanelHeight + "px"});
            } else {
                mainPanel.removeClass('bottomsUp');
                bottomPanel.css({"marginTop":"0"});
            }
    }
    });

    ////////////////
    //WINDOW RESIZE
    ///////////////
    view.resize(function(){

        if (!iPadiPhone && (view.width() > 900) && !body.is('.page-template-page-static-php, .page-template-page-static-wide-php, .search-no-results')){
            var windowHeight = view.height();
            body.css({paddingTop:windowHeight+"px"});
            paddingHeight();
        } else if(view.width() > 900){
            paddingHeight();
        } else if(view.width() < 900) {
            body.css({paddingTop:"0"});
            topPanel.css({padding:"0 0 30px"});
        }

    });

    ////////////////
    //WINDOW LOAD
    ////////////////
    view.load(function(){//WHEN PAGE FINISHES LOADING

        if (!iPadiPhone && (view.width() > 900) && !body.is('.page-template-page-static-php, .page-template-page-static-wide-php, .search-no-results')) {
            var windowHeight = view.height();
            body.css({paddingTop:windowHeight+"px"});
            paddingHeight();
        } else if(view.width() > 900){
            paddingHeight();
        } else if(view.width() < 900) {
            body.css({paddingTop:"0"});
            topPanel.css({padding:"0 0 30px"});
        }

        loadingContainer.stop(true,true).fadeOut(1000,function(){
            slideDetails.stop(true,true).animate({left:"0px"},{duration: 1000, queue: false}).fadeIn({ duration: 300, queue: false });
            continueOn.animate({bottom:"45px"},1200);
            headerContainer.addClass('afterLoad');
        });

        //AUTO-ROTATE SLIDER -- UNCOMMENT BELOW TO ACTIVE
        /*
        if(jQuery('body.home').length){
            //AUTO SLIDE ROTATION
            var sliderTime = setInterval(function(){
                autoRotate();
            },10000);

            //STOP AUTO ROTATION
            jQuery('#homeSlideNav > li').live('click',function(){
                clearInterval(sliderTime);
            });
        }
        */
    });

}
////////////////
//END MYSCRIPTS
////////////////
//jQuery.noConflict();
jQuery(document).ready(function(){
	
	molitorscripts();
	
	jQuery(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'fade'
	});
	
});