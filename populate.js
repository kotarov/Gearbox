/** http://kotarov.github.io/Gearbox/ */
$.fn.populate = function(dat, opts, cb) {
    var defs =  {
	reset:	true,
	errorClass: "uk-form-danger"
    }

    if(typeof dat == "string"){
    	var par = this
    	$.getJSON(dat).done(function(ret){
	    if(typeof cb=="undefined" && typeof opts=="function"){cb=opts; opts={}}
    	    
    	    if(ret.data) _populate(par, ret.data, $.extend(defs,opts))
    	    else console.log(ret)

            if(typeof cb=="function") cb() 
        });   
    }else if(typeof dat == 'object'){
	_populate(this, dat, $.extend(defs,opts));
    }
    return this;
////////////////////////////////
    function _populate(par, dat, opts){
	    $(par).find("[name]").each(function(){
		var name = $(this).attr("name")
	        if(typeof dat[name] !== "undefined")
	            _setValue( this, dat[name], opts );
	        else if(opts.reset)
	            _setValue( this, false, opts );
	    }) 
    }
    function _setValue(obj, val, opts){
    	$(obj).removeClass(opts.errorClass);
	switch( $(obj).prop("tagName") ){
	    case "INPUT":
	        switch( $(obj).attr("type") ){
	            case "checkbox":
	            case "radio":
	               if($(obj).val() == val) $(obj).prop('checked', true)
	               else $(obj).prop('checked',false)
	               break;
                    case "text":
	            default:
	                $(obj).val(val);
	                break;
	        }
	        break;
	    default:
	        $(obj).html(val);
	}   
    }
};
