<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

?>

  <?php
  echo do_shortcode('[widget id="custom_html-4"]');
  
  ?>
	
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/js/popper.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>

    <!-- Swiper JS -->
    <script src="<?php echo get_template_directory_uri(); ?>/js/swiper.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/animation/wow.min.js"></script>        
    <script src="<?php echo get_template_directory_uri(); ?>/js/animation/wow.init.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/custom.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/socialCircle.js"></script> 

    <script src="<?php echo get_template_directory_uri(); ?>/js/animation/wow.min.js"></script>        
    <script src="<?php echo get_template_directory_uri(); ?>/js/animation/wow.init.js"></script>
    

    
<?php
global $wp;
$current_url = home_url( add_query_arg( array(), $wp->request ) );

if($current_url == get_home_url())
{
?>
    <script>
      wow = new WOW(
        {
        mobile:false,
      }
      )
      wow.init();
      var swiper = new Swiper('.swiper-container', {
        speed: 1000,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });

      var mySwiper = document.querySelector('.swiper-container').swiper
      $(".swiper-container").mouseenter(function() {
        mySwiper.autoplay.stop();
      });

      $(".swiper-container").mouseleave(function() {
        mySwiper.autoplay.start();
      });
    </script>
<?php }else{?>
    <script>
          var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
     
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
       </script>
       
    <script>

      var x = document.getElementsByClassName("productslider");

      for(var i = 0; i < x.length; i++) {

        var el = x[i];
        
        var swiper = el.getElementsByClassName("swiper-container")[0];
        var nx = el.getElementsByClassName("swiper-button-next")[0];
        var pr = el.getElementsByClassName("swiper-button-prev")[0];

        new Swiper(swiper, {
              slidesPerView: 4,
              spaceBetween: 30,
              navigation: {
                nextEl: nx,
                prevEl: pr
              },
              breakpoints: {
                991: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                575: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                }
              }
        });
      }
    </script>
<?php }?>
<script type="text/javascript">
      $('input').on('focus', function() {
        $(this).parent().addClass('is-focused');
      });
      $('input').on('input', function() {
        if($(this).val() == '') {
          $(this).parent().removeClass('is-active');
        } else {
          $(this).parent().addClass('is-active');
        }
      });

      $('input').on('blur', function() {
        $(this).parent().removeClass('is-focused');
        
        if($(this).val() == '') {
          $(this).parent().removeClass('is-active');
        }
      });
      $(document).ready(function() {

/*        var fullurl = "trends";
  var tagvalue = $(this).text();
  alert(fullurl);
  alert(tagvalue);
if(fullurl==tagvalue){
  
    $('.tag-cloud-link').addClass('chosen');
}*/
  
        $('input').each(function () {
          if($(this).val() == '') {
            $(this).parent().removeClass('is-active');
          } else {
            $(this).parent().addClass('is-active');
          }
        });
      });
    </script>

    <!-- <script type="text/javascript">
      $(window).scroll(function() {
        var sticky = $('.navbar'),
          scroll = $(window).scrollTop();
         
        if (scroll >= 40) { 
          sticky.addClass('navbar-fixed'); }
        else { 
         sticky.removeClass('navbar-fixed');

      }
      });
    </script> -->

           
    <script type="text/javascript">
      $('.qty-input i').click(function() {
          val = parseInt($('.qty-input input').val());

          if ($(this).hasClass('less')) {
              val = val - 1;
          } else if ($(this).hasClass('more')) {
              val = val + 1;
          }

          if (val < 1) {
              val = 1;
          }

          $('.qty-input input').val(val);
      });

// $( ".less" ).click(function() {
//   var priceunit = $('.product-price .amount').text();
//   var qty = $('.qty').val();
//   var removecurrency  = priceunit.replace('$','');
//    $('.product-subtotal .amount').text(removecurrency * qty);
//    $('.cart-subtotal .amount').text(removecurrency * qty);
//    $('.order-total .amount').text(removecurrency * qty);

  
// });    
// $( ".more" ).click(function() {
//   var priceunit = $('.product-price .amount').text();
//   var qty = $('.qty').val();
//   var removecurrency  = priceunit.replace('$','');
//    $('.product-subtotal .amount').text(removecurrency * qty);
//    $('.cart-subtotal .amount').text(removecurrency * qty);
//    $('.order-total .amount').text(removecurrency * qty);

//    $('.finalprice').val(removecurrency * qty);
   
// });
//window.localStorage.clear();


$('.woocommerce-cart .remove').on('click', function(){
  setTimeout(function(){  window.location.href = "<?php echo get_home_url(); ?>/cart/"; }, 1000);
 
});
<?php
if($_GET['remove_from_wishlist'])
{
  ?>
window.location.href = "<?php echo get_home_url();?>/wishlist";
  <?php
}

?>


  </script>

<!-- <script type="text/javascript">
function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return min; 
    else if(parseInt(value) > max) 
        return max; 
    else return value;
}

function checkPasswordStrength() {
var number = /([0-9])/;
var alphabets = /([a-zA-Z])/;
var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
if($('#password_1').val().length < 12) {
$('#password-strength-status').removeClass();
$('#password-strength-status').addClass('weak-password');
$('#password-strength-status').html("Weak (should be atleast 12 characters.)");
} else {  	
if($('#password_1').val().match(number) && $('#password_1').val().match(alphabets) && $('#password_1').val().match(special_characters)) {            
$('#password-strength-status').removeClass();
$('#password-strength-status').addClass('strong-password');
$('#password-strength-status').html("Strong");
} else {
$('#password-strength-status').removeClass();
$('#password-strength-status').addClass('medium-password');
$('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
}}}


function conformpassword() {
var newpassword = $('#password_1').val();
var conformpassword = $('#password_2').val();

    if(newpassword != conformpassword)
    {
      $('#password-conform').html("Password doesn't Match with new password");
    }
    else{
      $('#password-conform').html("");
    }

}


</script> -->

<script type="text/javascript">
function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return min; 
    else if(parseInt(value) > max) 
        return max; 
    else return value;
}

function checkPasswordStrength() {
  var number = /([0-9])/;
  var alphabets = /([a-zA-Z])/;
  var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

  if($('#password_1').val().length < 12) {
    $('#password-strength-status').removeClass();
    $('#password-strength-status').addClass('weak-password');
    $('#password-strength-status').html("Weak (should be atleast 12 characters.)");
    }
  else {
    if($('#password_1').val().match(number) && $('#password_1').val().match(alphabets) && $('#password_1').val().match(special_characters)) {            
        $('#password-strength-status').removeClass();
        $('#password-strength-status').addClass('strong-password');
        $('#password-strength-status').html("Strong");
        } 
        else {
      $('#password-strength-status').removeClass();
      $('#password-strength-status').addClass('medium-password');
      $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
      }
  }
}
function conformpassword() {
  var newpassword = $('#password_1').val();
  var conformpassword = $('#password_2').val();
  
  if(newpassword != conformpassword)
    {
      $('#password-conform').html("Password doesn't Match with new password");
    }
    else{
      $('#password-conform').html("");
    }
}



function validatePassword(){
  var password = document.getElementById("password_current"); 
  var confirm_password = document.getElementById("password_1");
  if(password.value != confirm_password.value) {
    document.getElementById("password-match").innerHTML = '';
  } else {
    document.getElementById("password-match").innerHTML = 'Current And New Password is same! Please Use another password';
  }
}




// function currentpassword() {
//   var currentpasssword = $('#password_current').val();
//   var newpassword = $('#password_1').val();

// if(currentpassword == newpassword)
// {
//   $('#current-password').html("Old Password And New Password Are Same Please Enter Different Password");
// }
// else
// {
//   $('#current-password').html("");
// }
// }
</script>

<script>

jQuery(document).ready(function(){

//  $('html')[0].lang;
jQuery('input[type="file"]').change(function(e){
var fileName = e.target.files[0].name;
jQuery('#contactfilename').html(fileName);
});

// $(".dropdown").click(function(){
//             $(this).find(".dropdown-menu").slideToggle("fast");
//         });


        $(".glink").click(function(){
          var glink = $(this).text();
          if(glink == 'Arabic')
          {
            $('body').addClass('Arabicrtl');
          }
          else{
            $('body').removeClass('Arabicrtl');
          }
        }); 

    });
    
        $('#billing_country, #billing_state, #shipping_country, #shipping_state').addClass('form-control');
   
    function noBack() { window.history.forward(); }
    noBack();
    window.onload = noBack;
    window.onpageshow = function (evt) { if (evt.persisted) noBack(); }
    window.onunload = function () { void (0);
      localStorage.clear(); }
</script>
<?php wp_footer(); ?>