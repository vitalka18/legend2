function setCall_Cookie_1(name, value, props) {props = props || {};var exp = props.expires; if (typeof exp == "number" && exp) {var d = new Date(); d.setTime(d.getTime() + exp * 1000);exp = props.expires = d; } if (exp && exp.toUTCString) { props.expires = exp.toUTCString(); } value = encodeURIComponent(value); var updatedCookie = name + "=" + value; for (var propName in props) { updatedCookie += "; " + propName; var propValue = props[propName]; if (propValue !== true) { updatedCookie += "=" + propValue; } } updatedCookie += "; path=/"; document.cookie = updatedCookie;}

                    
                        jQuery(function(){ jQuery('.call_phone_2').html('406-11-29');  });
                        
                    
                    
                    
                        jQuery(function(){ jQuery('.call_phone_1').html('406 11 29');  });
                        
                    
                    
                    
                        jQuery(function(){ jQuery('.call_phone_3').html('812 406-11-29');  });
                        
                    
                    setCall_Cookie_1('call_s_1', '1441302045'+','+'485161141'+','+'16237', {expires : 60*30, domain : ".optikov.legenda-dom.ru"});
                    var calltouch_phone_1 = "78124061129";     var call_value_1 = '485161141';
     if(window.onSessionCallValue) {
        onSessionCallValue('485161141', '1');
     }

     

