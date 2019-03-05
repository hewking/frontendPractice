	function changeP2Style(argument) {
	    var e = document.getElementById("p2")
	    e.style.color = "red"
	}

	function write(text) {
	    document.write(text)
	    wrap()
	}

	function wrap() {
	    document.write("<br/>")
	}

	function writeP(argument) {
	    document.write("<p>" + argument + "</p>")
	}

	function windowSpec() {
	    var height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
	    var width = window.innerWidth || document.bocy.clientWidth || document.documentElement.clientWidth
	    return new Array(width, height)
	}

	function newDoc(doc) {
	    window.location.assign(doc)
	}

	function back(argument) {
	    window.history.back()
	}

	function forward(argument) {
	    window.history.forward()
	}

	function setCookie(c_name, value, expire) {
	    var date = new Date()
	    date.setDate(date.getDate() + expire)
	    document.cookie = c_name +
	        "=" + escape(value) +
	        ((expire == null) ? "" : ";expire=" + date.toGMTString())
	}

	function getCookie(c_name) {
	    var cookie = document.cookie
	    console.log(cookie)
	    if (cookie != null && cookie.length > 0) {
	        var start = cookie.indexOf(c_name + "=")
	        if (start != -1) {
	            start = start + c_name.length
	            var end = cookie.indexOf(";", start)
	            if (end == -1) {
	                end = cookie.length
	            }
	            return unescape(cookie.substring(start, end))
	        }
	    }
	    return ""
	}