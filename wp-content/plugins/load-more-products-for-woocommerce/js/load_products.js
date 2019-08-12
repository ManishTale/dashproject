var lmp_update_state, load_next_page, lmp_ajax_instance = false, lmp_update_lazyload;
(function ($){
    $('body').append( $( '<div class="berocket_load_more_preload">'
    + the_lmp_js_data.load_image
    + the_lmp_js_data.br_lmp_button_settings_load_image 
    + the_lmp_js_data.br_lmp_button_settings_use_image 
    + the_lmp_js_data.br_lmp_prev_settings_load_image 
    + the_lmp_js_data.br_lmp_prev_settings_use_image 
    + '</div>' ) );
    $(document).ready( function () {
        $( '.berocket_load_more_preload' ).remove();
        $( the_lmp_js_data.products ).find( the_lmp_js_data.item ).first().addClass('berocket_lmp_first_on_page').attr('data-url', location.href);
        var lmp_is_loading = false,
            lmp_loading_style;
        var lmp_count_start = 0, lmp_count_end = 0, lmp_count_laststart = 0, lmp_count_lastend = 0, lmp_count_text = '';
        if( $('.br_product_result_count').length ) {
            lmp_count_start = $('.br_product_result_count').data('start');
            lmp_count_end = $('.br_product_result_count').data('end');
            lmp_count_text = $('.br_product_result_count').data('text');
            lmp_count_laststart = lmp_count_start;
            lmp_count_lastend = lmp_count_end;
        }
        if ( $( the_lmp_js_data.products ).length > 0 ) {
            $( the_lmp_js_data.products ).after( $( the_lmp_js_data.load_more ) );
            if( the_lmp_js_data.use_prev_btn ) {
                $( the_lmp_js_data.products ).before( $( the_lmp_js_data.load_prev ) );
            }
            current_style();
            if ( lmp_loading_style != 'none' ) {
                $(window).resize( function () {
                    current_style();
                });
                $(window).on('popstate', function () {
                    if(lmp_loading_style !== 'pagination') {
                        if( ! lmp_is_loading ) {
                            lmp_is_loading = true;
                            if( $('.berocket_lmp_first_on_page[data-url="'+location.href+'"]').length ) {
                                $('html, body').animate({
                                    scrollTop: $('.berocket_lmp_first_on_page[data-url="'+location.href+'"]').offset().top
                                }, 500, function(){lmp_is_loading = false;});
                            }
                        }
                    } else {
                        if( lmp_ajax_instance != false ) {
                            lmp_ajax_instance.abort();
                            end_ajax_loading();
                        }
                        load_next_page(true, location.href);
                    }
                });
                function br_load_more_html5() {
                    if ( typeof the_lmp_js_data.update_url != "undefined" && the_lmp_js_data.update_url == 1 ) {
                        if( ! lmp_is_loading ) {
                            if(lmp_loading_style !== 'pagination') {
                                var next_page = '';
                                $('.berocket_lmp_first_on_page').each(function(i, o) {
                                    if( $(o).offset().top > $(window).scrollTop()+($(window).height()/2) ) {
                                        return false;
                                    }
                                    next_page = $(o).attr('data-url');
                                });
                                if( ! next_page ) {
                                    next_page = $('.berocket_lmp_first_on_page').first().attr('data-url');
                                }
                                if( next_page && location.href != next_page ) {
                                    history.pushState('br_lmp_popstate', $('.woocommerce-breadcrumb').text(), next_page);
                                }
                            }
                        }
                    }
                }
                $(document).on('berocket_ajax_filtering_start', function() {
                    lmp_is_loading = true;
                });
                $(document).on('berocket_ajax_filtering_end', function() {
                    lmp_is_loading = false;
                });
                $(window).scroll ( function () {
                    if( ! lmp_is_loading ) {
                        br_load_more_html5();
                        if ( lmp_loading_style == 'infinity_scroll' ) {
                            var products_bottom = $( the_lmp_js_data.products ).offset().top + $( the_lmp_js_data.products ).height() - the_lmp_js_data.buffer;
                            var bottom_position = $(window).scrollTop() + $(window).height();
                            if ( products_bottom < bottom_position && ! lmp_is_loading ) {
                                load_next_page();
                            }
                        }
                    }
                });
                $(document).on( 'click', '.br_lmp_button_settings .lmp_button', function (event) {
                    event.preventDefault();
                    load_next_page();
                });
                $(document).on( 'click', '.br_lmp_prev_settings .lmp_button', function (event) {
                    event.preventDefault();
                    load_next_page(2, $(this).attr('href'));
                });
                if ( ! the_lmp_js_data.is_AAPF || typeof the_ajax_script == 'undefined' ) {
                    $(document).on( 'click', the_lmp_js_data.pagination+' a', function (event) {
                        event.preventDefault();
                        var next_page = $(this).attr('href');
                        if ( typeof the_lmp_js_data.update_url != "undefined" && the_lmp_js_data.update_url == 1 ) {
                            history.pushState('br_lmp_popstate', $('.woocommerce-breadcrumb').text(), next_page);
                        }
                        load_next_page( true, next_page );
                    });
                }
            }
        }

        load_next_page = function ( replace, user_next_page ) {
            if( ! lmp_is_loading ) {
                if ( typeof( replace ) == 'undefined' ) {
                    user_next_page = false;
                }
                if ( typeof( user_next_page ) == 'undefined' ) {
                    user_next_page = false;
                }
                var $next_page = jquery_get_next_page();
                if ( $next_page.length > 0 || user_next_page !== false ) {
                    start_ajax_loading(replace);
                    var next_page;
                    if( user_next_page !== false ) {
                        next_page = user_next_page;
                    } else {
                        next_page = $next_page.attr('href');
                    }
                    lmp_ajax_instance = $.get( next_page, function( data ) {
                        lmp_ajax_instance = false;
                        var $data = $('<div>'+data+'</div>');
                        if( the_lmp_js_data.lazy_load_m && $(window).width() <= the_lmp_js_data.mobile_width || the_lmp_js_data.lazy_load && $(window).width() > the_lmp_js_data.mobile_width ) {
                            $data.find( the_lmp_js_data.products+' .lazy,'+the_lmp_js_data.item+', .berocket_lgv_additional_data' ).find( 'img' ).each( function ( i, o ) {
                                $(o).attr( 'data-src', $(o).attr( 'src' ) ).removeAttr( 'src' );
                                $(o).attr( 'data-srcset', $(o).attr( 'srcset' ) ).removeAttr( 'srcset' );
                            });
                            $data.find(the_lmp_js_data.item+', .berocket_lgv_additional_data').addClass('lazy');
                        }
                        $data.find( the_lmp_js_data.products ).find(the_lmp_js_data.item).first().addClass('berocket_lmp_first_on_page').attr('data-url', next_page);
                        var $products = $data.find( the_lmp_js_data.products ).html();
                        if ( replace == 1 ) {
                            $( the_lmp_js_data.products ).html( $products );
                        } else if( replace == 2 ) {
                            $products = $data.find( the_lmp_js_data.products );
                            $products.find(the_lmp_js_data.item).addClass('berocket_lmp_hidden');
                            var count_images = $products.find(the_lmp_js_data.item).find('img').length;
                            $products = $products.html();
                            $( the_lmp_js_data.products ).prepend( $products );
                            berocket_show_berocket_lmp_hidden_executed = false;
                            function berocket_show_berocket_lmp_hidden() {
                                if( ! berocket_show_berocket_lmp_hidden_executed ) {
                                    berocket_show_berocket_lmp_hidden_executed = true;
                                    var object = $( the_lmp_js_data.products ).find(the_lmp_js_data.item+':not(".berocket_lmp_hidden")').first();
                                    var positionOld = object.offset().top;
                                    var scrollTop = $(window).scrollTop();
                                    $('.berocket_lmp_hidden').removeClass('berocket_lmp_hidden');
                                    end_ajax_loading();
                                    var positionNew = object.offset().top;
                                    $(window).scrollTop(positionNew - (positionOld - scrollTop));
                                }
                            }
                            $( the_lmp_js_data.products ).find('.berocket_lmp_hidden').find('img').on('load error', function() {
                                count_images--;
                                if( count_images <= 1 ) {
                                    berocket_show_berocket_lmp_hidden();
                                }
                            });
                            setTimeout(berocket_show_berocket_lmp_hidden, 2500);
                        } else {
                            $( the_lmp_js_data.products ).append( $products );
                        }
                        lmp_update_lazyload();
                        if(lmp_loading_style !== 'pagination')
                        {
                            if( $data.find('.br_product_result_count').length && (lmp_count_start || lmp_count_end) ) {
                                lmp_count_text = $data.find('.br_product_result_count').data('text');
                                if( replace == 2 ) {
                                    lmp_count_start = $data.find('.br_product_result_count').data('start');
                                } else {
                                    lmp_count_end = $data.find('.br_product_result_count').data('end');
                                }
                                lmp_count_lastend = $data.find('.br_product_result_count').data('end');
                                lmp_count_laststart = $data.find('.br_product_result_count').data('start');
                                text_count = lmp_count_text;
                                text_count = text_count.replace('-1', lmp_count_start);
                                text_count = text_count.replace('-2', lmp_count_end);
                                $('.woocommerce-result-count').text(text_count);
                            } else {
                                $('.woocommerce-result-count').text($data.find('.woocommerce-result-count:first').text());
                            }
                        }
                        else
                        {
                            $('.woocommerce-result-count').text($data.find('.woocommerce-result-count:first').text());
                        }
                                                
                        var $pagination = $data.find( the_lmp_js_data.pagination );
                        if( replace == 1 ) {
                            $( the_lmp_js_data.pagination ).html( $pagination.html() );
                        } else if( replace == 2 ) {
                            var $prev_page = jquery_get_prev_page();
                            var $new_prev_page = jquery_get_prev_page($data);
                            if( $new_prev_page.length ) {
                                $prev_page.replaceWith($new_prev_page);
                            } else {
                                $prev_page.remove();
                            }
                        } else {
                            var $next_page = jquery_get_next_page();
                            var $new_next_page = jquery_get_next_page($data);
                            if( $new_next_page.length ) {
                                $next_page.replaceWith($new_next_page);
                            } else {
                                $next_page.remove();
                            }
                        }
                        current_style();
                        if( replace != 2 ) {
                            end_ajax_loading();
                        }
                    });
                }
            }
        }
        function woocommerce_result_count_update() {
            if(lmp_loading_style !== 'pagination') {
                if( $('.br_product_result_count').length ) {
                    lmp_count_start = $('.br_product_result_count').data('start');
                    lmp_count_end = $('.br_product_result_count').data('end');
                    lmp_count_text = $('.br_product_result_count').data('text');
                    lmp_count_lastend = lmp_count_end;
                    lmp_count_laststart = lmp_count_start;
                    text_count = lmp_count_text;
                    text_count = text_count.replace('-1', lmp_count_start);
                    text_count = text_count.replace('-2', lmp_count_end);
                    $('.woocommerce-result-count').text(text_count);
                }
            }
        }
        function start_ajax_loading(replace) {
            lmp_is_loading = true;
            jQuery('body').addClass('berocket_lmp_ajax_loading');
            lmp_execute_func( the_lmp_js_data.javascript.before_update );
            $(document).trigger('berocket_lmp_start');
            if( replace == 2 ) {
                $( the_lmp_js_data.products ).before( $( the_lmp_js_data.load_image ) );
                $(document).trigger('berocket_lmp_start_prev');
            } else {
                $( the_lmp_js_data.products ).after( $( the_lmp_js_data.load_image ) );
                $(document).trigger('berocket_lmp_start_next');
            }
        }
        function end_ajax_loading() {
            if( typeof($(the_lmp_js_data.products).isotope) == 'function' && $(the_lmp_js_data.products).data('isotope') ) {
                $(the_lmp_js_data.products).isotope( 'reloadItems' );
                $(the_lmp_js_data.products).isotope();
            }
            $( the_lmp_js_data.load_img_class ).remove();
            $(document).trigger('berocket_ajax_products_infinite_loaded');
            $(document).trigger('berocket_lmp_end');
            lmp_execute_func( the_lmp_js_data.javascript.after_update );
            jQuery('body').removeClass('berocket_lmp_ajax_loading');
            lmp_is_loading = false;
            var $next_page = jquery_get_next_page();
            if( ( lmp_loading_style == 'infinity_scroll' || lmp_loading_style == 'more_button' ) && $next_page.length <= 0 ) {
                $( the_lmp_js_data.products ).append( $( the_lmp_js_data.end_text ) );
            }
            br_load_more_html5();
        }
        function current_style() {
            var $next_page = jquery_get_next_page();
            if( $next_page.length > 0 ) {
                $('.br_lmp_button_settings .lmp_button').attr('href', $next_page.attr('href'));
            }
            var $prev_page = jquery_get_prev_page();
            if( $prev_page.length > 0 ) {
                $('.br_lmp_prev_settings .lmp_button').attr('href', $prev_page.attr('href'));
            }
            if ( the_lmp_js_data.use_mobile && $(window).width() <= the_lmp_js_data.mobile_width ) {
                set_style( the_lmp_js_data.mobile_type );
            } else {
                set_style( the_lmp_js_data.type );
            }
        }
        function set_style( style ) {
            $( '.lmp_load_more_button' ).hide();
            if( style != 'none' ) {
                var $next_page = jquery_get_next_page();
                $( the_lmp_js_data.pagination ).hide();
                if ( style == 'more_button' ) {
                    if ( $next_page.length > 0 ) {
                        $( '.lmp_load_more_button.br_lmp_button_settings' ).show();
                    } else {
                        setTimeout( test_next_page, 4000 );
                    }
                } else if ( style == 'pagination' ) {
                    $( the_lmp_js_data.pagination ).show();
                }
                var $prev_page = jquery_get_prev_page();
                if ( $prev_page.length > 0 ) {
                    $( '.lmp_load_more_button.br_lmp_prev_settings' ).show();
                } else {
                    setTimeout( test_prev_page, 4000 );
                }
            }
            lmp_loading_style = style;
        }
        function test_next_page() {
            var $next_page = jquery_get_next_page();
            if ( $next_page.length > 0 ) {
                current_style();
            } else {
                setTimeout( test_next_page, 4000 );
            }
        }
        function test_prev_page() {
            var $prev_page = jquery_get_prev_page();
            if ( $prev_page.length > 0 ) {
                current_style();
            } else {
                setTimeout( test_prev_page, 4000 );
            }
        }
        function jquery_get_next_page($parent) {
            if( typeof($parent) == 'undefined' ) {
                $parent = $(document);
            }
            var $pagination = $parent.find(the_lmp_js_data.pagination);
            if( $pagination.find(the_lmp_js_data.next_page).length > 0 ) {
                $next_page = $pagination.find(the_lmp_js_data.next_page);
            } else {
                $next_page = $parent.find( the_lmp_js_data.next_page );
            }
            return $next_page;
        }
        function jquery_get_prev_page($parent) {
            if( typeof($parent) == 'undefined' ) {
                $parent = $(document);
            }
            var $pagination = $parent.find(the_lmp_js_data.pagination);
            if( $pagination.find(the_lmp_js_data.prev_page).length > 0 ) {
                $prev_page = $pagination.find(the_lmp_js_data.prev_page);
            } else {
                $prev_page = $parent.find( the_lmp_js_data.prev_page );
            }
            return $prev_page;
        }
        lmp_update_state = function(reset_count) {
            if( typeof reset_count == 'undefined' ) {
                reset_count = false;
            }
            if( ! $( the_lmp_js_data.products ).find( the_lmp_js_data.item ).first().is('.berocket_lmp_first_on_page') ) {
                $( the_lmp_js_data.products ).find( the_lmp_js_data.item ).first().addClass('berocket_lmp_first_on_page').attr('data-url', location.href);
            }
            current_style();
            if( reset_count ) {
                woocommerce_result_count_update();
            }
        }
        $(document).on('berocket_ajax_products_loaded', function(){
            lmp_update_state(true);
            if( typeof $(window).lazyLoadXT != 'undefined' ) {
                if( the_lmp_js_data.lazy_load_m && $(window).width() <= the_lmp_js_data.mobile_width || the_lmp_js_data.lazy_load && $(window).width() > the_lmp_js_data.mobile_width ) {
                    jQuery(the_lmp_js_data.item+', .berocket_lgv_additional_data').addClass('lazy').find( 'img' ).each( 
                        function ( i, o ) {
                            jQuery(o)
                                .attr( 'data-src', jQuery(o).attr( 'src' ) ).removeAttr( 'src' )
                                .attr( 'data-srcset', jQuery(o).attr( 'srcset' ) ).removeAttr( 'srcset' );
                        }
                    ).lazyLoadXT();
                }
            }
            lmp_update_lazyload();
        });
        lmp_update_lazyload = function() {
            if( typeof $(window).lazyLoadXT != 'undefined' ) {
                if( the_lmp_js_data.lazy_load_m && $(window).width() <= the_lmp_js_data.mobile_width || the_lmp_js_data.lazy_load && $(window).width() > the_lmp_js_data.mobile_width ) {
                    $( the_lmp_js_data.products+' .lazy' ).find( 'img' ).lazyLoadXT();
                    $( the_lmp_js_data.products ).find('.lazy').on( 'lazyshow', function () {
                        $(this).removeClass('lazy').addClass('animated').addClass(the_lmp_js_data.LLanimation);
                        if( $(this).is('img') ) {
                            $(this).attr('srcset', $(this).data('srcset'));
                        } else {
                            $(this).find('img').each( function ( i, o ) {
                                $(o).attr('srcset', $(o).data('srcset'));
                            });
                        }
                        if( ! $(this).is('.berocket_lgv_additional_data') ) {
                            $(this).next( '.berocket_lgv_additional_data' ).removeClass('lazy').addClass('animated').addClass(the_lmp_js_data.LLanimation);
                        }
                    });
                }
            }
        }
    });
})(jQuery);
function lmp_execute_func ( func ) {
    if( the_lmp_js_data.javascript != 'undefined'
        && the_lmp_js_data.javascript != null
        && typeof func != 'undefined' 
        && func.length > 0 ) {
        try{
            eval( func );
        } catch(err){
            alert('You have some incorrect JavaScript code (Load More Products)');
        }
    }
}

