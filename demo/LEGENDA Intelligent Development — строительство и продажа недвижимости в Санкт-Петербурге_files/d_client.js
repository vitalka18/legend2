function setCall_Cookie_4(name, value, props) {props = props || {};var exp = props.expires; if (typeof exp == "number" && exp) {var d = new Date(); d.setTime(d.getTime() + exp * 1000);exp = props.expires = d; } if (exp && exp.toUTCString) { props.expires = exp.toUTCString(); } value = encodeURIComponent(value); var updatedCookie = name + "=" + value; for (var propName in props) { updatedCookie += "; " + propName; var propValue = props[propName]; if (propValue !== true) { updatedCookie += "=" + propValue; } } updatedCookie += "; path=/"; document.cookie = updatedCookie;}

                    
                        jQuery(function(){ jQuery('.call_phone_2').html('812 677-00-00');  });
                        
                    
                    
                    
                        jQuery(function(){ jQuery('.call_phone_3').html('<span>812</span> 677-00-00');  });
                        
                    
                    
                    
                        jQuery(function(){ jQuery('.call_phone_1').html('677 00 00');  });
                        
                    
                    setCall_Cookie_4('call_s_4', '1441133874'+','+'482632503'+','+'15302', {expires : 60*30});
                    var calltouch_phone_4 = "78126770000_3";     var call_value_4 = '482632503';
     if(window.onSessionCallValue) {
        onSessionCallValue('482632503', '4');
     }

     

