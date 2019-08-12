(function ($){
    $(document).ready( function () {
        $(document).on('change', '.lmp_hide_element', function(){
            var value = $(this).val();
            var hide = $(this).data('hide');
            if( $(this).attr('type') == 'checkbox' ) {
                if( ! $(this).prop('checked')) {
                    value = 'false';
                }
            }
            var $hide = $(hide);
            $hide.each(function() {
                $(this).parents('tr').first().hide();
            });
            var $hide = $(hide+value);
            $hide.each(function() {
                $(this).parents('tr').first().show();
            })
        });
        $('.lmp_hide_element').trigger('change');
        $(document).on( 'click', '#lmp_use_mobile_show', function() {
            if( $(this).prop('checked') ) {
                $('.lmp_use_mobile').show();
            } else {
                $('.lmp_use_mobile').hide();
            }
        });
        $(document).on( 'click', '#lmp_use_mobile_hide', function() {
            if( $(this).prop('checked') ) {
                $('.hide_selectors').hide();
            } else {
                $('.hide_selectors').show();
            }
        });
        $(document).on( 'change', '.btn_border_color', function(){
            var $button = $(this).parents('.framework-form-table').first().find( '.lmp_load_more_button .lmp_button' );
            $button.css('border-color', $(this).parents('.framework-form-table').first().find('.btn_border_color').val());
            $button.trigger('lmp_button_changed');
        });
        
        $(document).on( 'change', '.framework-form-table .lmp_button_settings', function () {
            var $field = $(this).data('field');
            var $style = $(this).data('style');
            var $type = $(this).data('type');
            var $button = $(this).parents('.framework-form-table').first().find( '.lmp_load_more_button .lmp_button' );
            if($style != 'custom_css') {
                if ( $field == 'border' ) {
                    if($(this).val() == '' || $(this).val() == ' ')
                    {
                        var value = 0;
                    }
                    else
                    {
                        var value = $(this).val();
                    }
                    $button.css($style, value + 'px solid ' + $(this).parents('.framework-form-table').first().find('.btn_border_color').val());
                } else {
                    if($style == 'text') {
                        $button.text($(this).val());
                    } else {
                        if( $(this).val() == '' ) {
                            $button.css($style, $(this).val());
                        } else {
                            $button.css($style, $(this).val() + $type);
                        }
                    }
                }
            }
            $button.trigger('lmp_button_changed');
        });
        $(document).on( 'change', '.bg_btn_color, .txt_btn_color', function() {
            $button = $(this).parents('.framework-form-table').first().find( '.lmp_load_more_button .lmp_button' );
            $button.css('background-color', $(this).parents('.framework-form-table').first().find('.bg_btn_color').val());
            $button.css('color', $(this).parents('.framework-form-table').first().find('.txt_btn_color').val());
            $button.trigger('lmp_button_changed');
        });
        $(document).on( 'mouseenter', '.lmp_load_more_button .lmp_button', function () {
            $button = $(this).parents('.framework-form-table').first().find( '.lmp_load_more_button .lmp_button' );
            $button.css('background-color', $(this).parents('.framework-form-table').first().find('.bg_btn_color_hover').val());
            $button.css('color', $(this).parents('.framework-form-table').first().find('.txt_btn_color_hover').val());
            $button.trigger('lmp_button_changed');
        });
        $(document).on( 'mouseleave', '.lmp_load_more_button .lmp_button', function () {
            $button = $(this).parents('.framework-form-table').first().find( '.lmp_load_more_button .lmp_button' );
            $button.css('background-color', $(this).parents('.framework-form-table').first().find('.bg_btn_color').val());
            $button.css('color', $(this).parents('.framework-form-table').first().find('.txt_btn_color').val());
            $button.trigger('lmp_button_changed');
        });
        $(window).on('scroll', function () {
            if( $(window).height() > 600 && $(window).width() > 900 && $(window).scrollTop() > $('.btn-preview-td').offset().top + 10 ) {
                if( ! $('.btn-preview-td .btn-preview-block').is('.btn-fixed-position') ) {
                    var width = $('.btn-preview-td .btn-preview-block').outerWidth(true);
                    $('.btn-preview-td .btn-preview-block').width(width).addClass('btn-fixed-position');
                }
            } else {
                $('.btn-preview-td .btn-preview-block').css('width', '').removeClass('btn-fixed-position');
            }
            if( $(window).height() > 600 && $(window).width() > 900 && $(window).scrollTop() > $('.btn-prev-preview-td').offset().top + 10 ) {
                if( ! $('.btn-prev-preview-td .btn-preview-block').is('.btn-fixed-position') ) {
                    var width = $('.btn-prev-preview-td .btn-preview-block').outerWidth(true);
                    $('.btn-prev-preview-td .btn-preview-block').width(width).addClass('btn-fixed-position');
                }
            } else {
                $('.btn-prev-preview-td .btn-preview-block').css('width', '').removeClass('btn-fixed-position');
            }
        });
        $(document).on( 'click', '.all_theme_default_lmp', function ( event ) {
            event.preventDefault();
            $( '.framework-form-table .lmp_button_settings, .framework-form-table .lmp_button_settings_hover' ).each( function ( i, o ) {
                $(o).val( $(o).data( 'default' ) ).trigger( 'change' );
            });
            $( '.framework-form-table .button-settings' ).trigger( 'change' );
            $('.br_colorpicker_default').click();
            from_block_to_input_loading_position();
        });
    });
})(jQuery);
