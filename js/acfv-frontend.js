$j=jQuery.noConflict();
$j(document).ready(function(){

	$j('#acfv-options-viewer').hide();
	$j('#acfv-custom-viewer').hide();
	$j('.acfv-btn-col .acfv-btn:nth-child(3)').addClass("acfv-active");

	if ($j("#acfv-btn-custom").hasClass("acfv-active")) {
		$j('#acfv-custom-custom').show();
		$j('#acfv-current-viewer').hide();
		$j('#acfv-options-viewer').hide();
	}

	// open viewer
	$j('#acfv-toggle').on("click", function(){
		$j('#acfv-wrap, #acfv-click-layer').addClass('acfv-open');
		$j('html').addClass('acfv-active');
		$j(this).hide();
	});

	// menu clicks
	$j('#acfv-btn-custom').on("click", function(){
		$j('.acfv-btn').removeClass('acfv-active');
		$j(this).addClass('acfv-active');
		$j('#acfv-custom-viewer').show();
		$j('#acfv-current-viewer').hide();
		$j('#acfv-options-viewer').hide();
	});
	$j('#acfv-btn-current').on("click", function(){
		$j('.acfv-btn').removeClass('acfv-active');
		$j(this).addClass('acfv-active');
		$j('#acfv-custom-viewer').hide();
		$j('#acfv-current-viewer').show();
		$j('#acfv-options-viewer').hide();
	});
	$j('#acfv-btn-options').on("click", function(){
		$j('.acfv-btn').removeClass('acfv-active');
		$j(this).addClass('acfv-active');
		$j('#acfv-custom-viewer').hide();
		$j('#acfv-current-viewer').hide();
		$j('#acfv-options-viewer').show();
	});


	// close viewer
	$j('#acfv-btn-close').on("click", function(){
		$j('#acfv-wrap, #acfv-click-layer').removeClass('acfv-open');
		$j('html').removeClass('acfv-active');
		$j('#acfv-toggle').show();
	});
	$j('#acfv-click-layer').click(function() {
		$j('#acfv-wrap, #acfv-click-layer').removeClass('acfv-open');
		$j('html').removeClass('acfv-active');
		$j('#acfv-toggle').show();
	});

    // keyboard shortcuts
    var down = {};
    $j(document).keydown(function(e) {
        down[e.keyCode] = true;
    }).keyup(function(e) {
        // "shift" + "v"
        if (down[16] && down[86]) {
            if( $j('html').hasClass('acfv-active') ){
                $j('#acfv-btn-close').trigger( "click" );
            } else {
                $j('#acfv-toggle').trigger( "click" );
            }
        }
        // "esc"
        if (down[27]) {
            $j('#acfv-btn-close').trigger( "click" );
        }
        down[e.keyCode] = false;
    });

    $j('#acfv-custom-viewer button').click( function(e) {
    	e.preventDefault();
    	$j('#postidcontent').html(  'trying to fetch postid\'s fields...'  );

    } );
	function get_postid_fields() {
	    $j.ajax( {
								url: ajaxurl + '?action=get_my_custom_postid&p=' + $j('#postid').val(),
								dataType: 'json',
							} ).done( function ( response ) {
								$j('#postidcontent').html(  response  );

							});

	}

    $j('#postid').keypress( function(e){
	    if(e.keyCode === 13){
			//write your specific code from here
	    	get_postid_fields();
	    }
	});


});
