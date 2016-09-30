/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(a) {
	String.prototype.trim === a && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "")
	}),
	Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
		if (this === void 0 || this === null) throw new TypeError;
		var c = Object(this),
			d = c.length >>> 0,
			e = 0,
			f;
		if (typeof b != "function") throw new TypeError;
		if (d == 0 && arguments.length == 1) throw new TypeError;
		if (arguments.length >= 2) f = arguments[1];
		else do {
			if (e in c) {
				f = c[e++];
				break
			}
			if (++e >= d) throw new TypeError
		} while (! 0 );
		while (e < d) e in c && (f = b.call(a, f, c[e], e, c)),
			e++;
		return f
	})
})();/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(a) {
	String.prototype.trim === a && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "")
	}),
	Array.prototype.reduce === a && (Array.prototype.reduce = function(b) {
		if (this === void 0 || this === null) throw new TypeError;
		var c = Object(this),
			d = c.length >>> 0,
			e = 0,
			f;
		if (typeof b != "function") throw new TypeError;
		if (d == 0 && arguments.length == 1) throw new TypeError;
		if (arguments.length >= 2) f = arguments[1];
		else do {
			if (e in c) {
				f = c[e++];
				break
			}
			if (++e >= d) throw new TypeError
		} while (! 0 );
		while (e < d) e in c && (f = b.call(a, f, c[e], e, c)),
			e++;
		return f
	})
})();
var Zepto = function() {
	function E(a) {
		return a == null ? String(a) : y[z.call(a)] || "object"
	}
	function F(a) {
		return E(a) == "function"
	}
	function G(a) {
		return a != null && a == a.window
	}
	function H(a) {
		return a != null && a.nodeType == a.DOCUMENT_NODE
	}
	function I(a) {
		return E(a) == "object"
	}
	function J(a) {
		return I(a) && !G(a) && a.__proto__ == Object.prototype
	}
	function K(a) {
		return a instanceof Array
	}
	function L(a) {
		return typeof a.length == "number"
	}
	function M(a) {
		return g.call(a,
			function(a) {
				return a != null
			})
	}
	function N(a) {
		return a.length > 0 ? c.fn.concat.apply([], a) : a
	}
	function O(a) {
		return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}
	function P(a) {
		return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
	}
	function Q(a, b) {
		return typeof b == "number" && !l[O(a)] ? b + "px": b
	}
	function R(a) {
		var b, c;
		return i[a] || (b = h.createElement(a), h.body.appendChild(b), c = k(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), c == "none" && (c = "block"), i[a] = c),
			i[a]
	}
	function S(a) {
		return "children" in a ? f.call(a.children) : c.map(a.childNodes,
			function(a) {
				if (a.nodeType == 1) return a
			})
	}
	function T(c, d, e) {
		for (b in d) e && (J(d[b]) || K(d[b])) ? (J(d[b]) && !J(c[b]) && (c[b] = {}), K(d[b]) && !K(c[b]) && (c[b] = []), T(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b])
	}
	function U(b, d) {
		return d === a ? c(b) : c(b).filter(d)
	}
	function V(a, b, c, d) {
		return F(b) ? b.call(a, c, d) : b
	}
	function W(a, b, c) {
		c == null ? a.removeAttribute(b) : a.setAttribute(b, c)
	}
	function X(b, c) {
		var d = b.className,
			e = d && d.baseVal !== a;
		if (c === a) return e ? d.baseVal: d;
		e ? d.baseVal = c: b.className = c
	}
	function Y(a) {
		var b;
		try {
			return a ? a == "true" || (a == "false" ? !1 : a == "null" ? null: isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? c.parseJSON(a) : a: b) : a
		} catch(d) {
			return a
		}
	}
	function Z(a, b) {
		b(a);
		for (var c in a.childNodes) Z(a.childNodes[c], b)
	}
	var a, b, c, d, e = [],
		f = e.slice,
		g = e.filter,
		h = window.document,
		i = {},
		j = {},
		k = h.defaultView.getComputedStyle,
		l = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		m = /^\s*<(\w+|!)[^>]*>/,
		n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		o = /^(?:body|html)$/i,
		p = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		q = ["after", "prepend", "before", "append"],
		r = h.createElement("table"),
		s = h.createElement("tr"),
		t = {
			tr: h.createElement("tbody"),
			tbody: r,
			thead: r,
			tfoot: r,
			td: s,
			th: s,
			"*": h.createElement("div")
		},
		u = /complete|loaded|interactive/,
		v = /^\.([\w-]+)$/,
		w = /^#([\w-]*)$/,
		x = /^[\w-]+$/,
		y = {},
		z = y.toString,
		A = {},
		B,
		C,
		D = h.createElement("div");
	return A.matches = function(a, b) {
		if (!a || a.nodeType !== 1) return ! 1;
		var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
		if (c) return c.call(a, b);
		var d, e = a.parentNode,
			f = !e;
		return f && (e = D).appendChild(a),
			d = ~A.qsa(e, b).indexOf(a),
		f && D.removeChild(a),
			d
	},
		B = function(a) {
			return a.replace(/-+(.)?/g,
				function(a, b) {
					return b ? b.toUpperCase() : ""
				})
		},
		C = function(a) {
			return g.call(a,
				function(b, c) {
					return a.indexOf(b) == c
				})
		},
		A.fragment = function(b, d, e) {
			b.replace && (b = b.replace(n, "<$1></$2>")),
			d === a && (d = m.test(b) && RegExp.$1),
			d in t || (d = "*");
			var g, h, i = t[d];
			return i.innerHTML = "" + b,
				h = c.each(f.call(i.childNodes),
					function() {
						i.removeChild(this)
					}),
			J(e) && (g = c(h), c.each(e,
				function(a, b) {
					p.indexOf(a) > -1 ? g[a](b) : g.attr(a, b)
				})),
				h
		},
		A.Z = function(a, b) {
			return a = a || [],
				a.__proto__ = c.fn,
				a.selector = b || "",
				a
		},
		A.isZ = function(a) {
			return a instanceof A.Z
		},
		A.init = function(b, d) {
			if (!b) return A.Z();
			if (F(b)) return c(h).ready(b);
			if (A.isZ(b)) return b;
			var e;
			if (K(b)) e = M(b);
			else if (I(b)) e = [J(b) ? c.extend({},
				b) : b],
				b = null;
			else if (m.test(b)) e = A.fragment(b.trim(), RegExp.$1, d),
				b = null;
			else {
				if (d !== a) return c(d).find(b);
				e = A.qsa(h, b)
			}
			return A.Z(e, b)
		},
		c = function(a, b) {
			return A.init(a, b)
		},
		c.extend = function(a) {
			var b, c = f.call(arguments, 1);
			return typeof a == "boolean" && (b = a, a = c.shift()),
				c.forEach(function(c) {
					T(a, c, b)
				}),
				a
		},
		A.qsa = function(a, b) {
			var c;
			return H(a) && w.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : a.nodeType !== 1 && a.nodeType !== 9 ? [] : f.call(v.test(b) ? a.getElementsByClassName(RegExp.$1) : x.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
		},
		c.contains = function(a, b) {
			return a !== b && a.contains(b)
		},
		c.type = E,
		c.isFunction = F,
		c.isWindow = G,
		c.isArray = K,
		c.isPlainObject = J,
		c.isEmptyObject = function(a) {
			var b;
			for (b in a) return ! 1;
			return ! 0
		},
		c.inArray = function(a, b, c) {
			return e.indexOf.call(b, a, c)
		},
		c.camelCase = B,
		c.trim = function(a) {
			return a.trim()
		},
		c.uuid = 0,
		c.support = {},
		c.expr = {},
		c.map = function(a, b) {
			var c, d = [],
				e,
				f;
			if (L(a)) for (e = 0; e < a.length; e++) c = b(a[e], e),
			c != null && d.push(c);
			else for (f in a) c = b(a[f], f),
			c != null && d.push(c);
			return N(d)
		},
		c.each = function(a, b) {
			var c, d;
			if (L(a)) {
				for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a
			} else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
			return a
		},
		c.grep = function(a, b) {
			return g.call(a, b)
		},
	window.JSON && (c.parseJSON = JSON.parse),
		c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
			function(a, b) {
				y["[object " + b + "]"] = b.toLowerCase()
			}),
		c.fn = {
			forEach: e.forEach,
			reduce: e.reduce,
			push: e.push,
			sort: e.sort,
			indexOf: e.indexOf,
			concat: e.concat,
			map: function(a) {
				return c(c.map(this,
					function(b, c) {
						return a.call(b, c, b)
					}))
			},
			slice: function() {
				return c(f.apply(this, arguments))
			},
			ready: function(a) {
				return u.test(h.readyState) ? a(c) : h.addEventListener("DOMContentLoaded",
					function() {
						a(c)
					},
					!1),
					this
			},
			get: function(b) {
				return b === a ? f.call(this) : this[b >= 0 ? b: b + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					this.parentNode != null && this.parentNode.removeChild(this)
				})
			},
			each: function(a) {
				return e.every.call(this,
					function(b, c) {
						return a.call(b, c, b) !== !1
					}),
					this
			},
			filter: function(a) {
				return F(a) ? this.not(this.not(a)) : c(g.call(this,
					function(b) {
						return A.matches(b, a)
					}))
			},
			add: function(a, b) {
				return c(C(this.concat(c(a, b))))
			},
			is: function(a) {
				return this.length > 0 && A.matches(this[0], a)
			},
			not: function(b) {
				var d = [];
				if (F(b) && b.call !== a) this.each(function(a) {
					b.call(this, a) || d.push(this)
				});
				else {
					var e = typeof b == "string" ? this.filter(b) : L(b) && F(b.item) ? f.call(b) : c(b);
					this.forEach(function(a) {
						e.indexOf(a) < 0 && d.push(a)
					})
				}
				return c(d)
			},
			has: function(a) {
				return this.filter(function() {
					return I(a) ? c.contains(this, a) : c(this).find(a).size()
				})
			},
			eq: function(a) {
				return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
			},
			first: function() {
				var a = this[0];
				return a && !I(a) ? a: c(a)
			},
			last: function() {
				var a = this[this.length - 1];
				return a && !I(a) ? a: c(a)
			},
			find: function(a) {
				var b, d = this;
				return typeof a == "object" ? b = c(a).filter(function() {
					var a = this;
					return e.some.call(d,
						function(b) {
							return c.contains(b, a)
						})
				}) : this.length == 1 ? b = c(A.qsa(this[0], a)) : b = this.map(function() {
					return A.qsa(this, a)
				}),
					b
			},
			closest: function(a, b) {
				var d = this[0],
					e = !1;
				typeof a == "object" && (e = c(a));
				while (d && !(e ? e.indexOf(d) >= 0 : A.matches(d, a))) d = d !== b && !H(d) && d.parentNode;
				return c(d)
			},
			parents: function(a) {
				var b = [],
					d = this;
				while (d.length > 0) d = c.map(d,
					function(a) {
						if ((a = a.parentNode) && !H(a) && b.indexOf(a) < 0) return b.push(a),
							a
					});
				return U(b, a)
			},
			parent: function(a) {
				return U(C(this.pluck("parentNode")), a)
			},
			children: function(a) {
				return U(this.map(function() {
					return S(this)
				}), a)
			},
			contents: function() {
				return this.map(function() {
					return f.call(this.childNodes)
				})
			},
			siblings: function(a) {
				return U(this.map(function(a, b) {
					return g.call(S(b.parentNode),
						function(a) {
							return a !== b
						})
				}), a)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(a) {
				return c.map(this,
					function(b) {
						return b[a]
					})
			},
			show: function() {
				return this.each(function() {
					this.style.display == "none" && (this.style.display = null),
					k(this, "").getPropertyValue("display") == "none" && (this.style.display = R(this.nodeName))
				})
			},
			replaceWith: function(a) {
				return this.before(a).remove()
			},
			wrap: function(a) {
				var b = F(a);
				if (this[0] && !b) var d = c(a).get(0),
					e = d.parentNode || this.length > 1;
				return this.each(function(f) {
					c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d)
				})
			},
			wrapAll: function(a) {
				if (this[0]) {
					c(this[0]).before(a = c(a));
					var b;
					while ((b = a.children()).length) a = b.first();
					c(a).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				var b = F(a);
				return this.each(function(d) {
					var e = c(this),
						f = e.contents(),
						g = b ? a.call(this, d) : a;
					f.length ? f.wrapAll(g) : e.append(g)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					c(this).replaceWith(c(this).children())
				}),
					this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(b) {
				return this.each(function() {
					var d = c(this); (b === a ? d.css("display") == "none": b) ? d.show() : d.hide()
				})
			},
			prev: function(a) {
				return c(this.pluck("previousElementSibling")).filter(a || "*")
			},
			next: function(a) {
				return c(this.pluck("nextElementSibling")).filter(a || "*")
			},
			html: function(b) {
				return b === a ? this.length > 0 ? this[0].innerHTML: null: this.each(function(a) {
					var d = this.innerHTML;
					c(this).empty().append(V(this, b, a, d))
				})
			},
			text: function(b) {
				return b === a ? this.length > 0 ? this[0].textContent: null: this.each(function() {
					this.textContent = b
				})
			},
			attr: function(c, d) {
				var e;
				return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a: c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e: this.each(function(a) {
					if (this.nodeType !== 1) return;
					if (I(c)) for (b in c) W(this, b, c[b]);
					else W(this, c, V(this, d, a, this.getAttribute(c)))
				})
			},
			removeAttr: function(a) {
				return this.each(function() {
					this.nodeType === 1 && W(this, a)
				})
			},
			prop: function(b, c) {
				return c === a ? this[0] && this[0][b] : this.each(function(a) {
					this[b] = V(this, c, a, this[b])
				})
			},
			data: function(b, c) {
				var d = this.attr("data-" + O(b), c);
				return d !== null ? Y(d) : a
			},
			val: function(b) {
				return b === a ? this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function(a) {
					return this.selected
				}).pluck("value") : this[0].value) : this.each(function(a) {
					this.value = V(this, b, a, this.value)
				})
			},
			offset: function(a) {
				if (a) return this.each(function(b) {
					var d = c(this),
						e = V(this, a, b, d.offset()),
						f = d.offsetParent().offset(),
						g = {
							top: e.top - f.top,
							left: e.left - f.left
						};
					d.css("position") == "static" && (g.position = "relative"),
						d.css(g)
				});
				if (this.length == 0) return null;
				var b = this[0].getBoundingClientRect();
				return {
					left: b.left + window.pageXOffset,
					top: b.top + window.pageYOffset,
					width: Math.round(b.width),
					height: Math.round(b.height)
				}
			},
			css: function(a, c) {
				if (arguments.length < 2 && typeof a == "string") return this[0] && (this[0].style[B(a)] || k(this[0], "").getPropertyValue(a));
				var d = "";
				if (E(a) == "string") ! c && c !== 0 ? this.each(function() {
					this.style.removeProperty(O(a))
				}) : d = O(a) + ":" + Q(a, c);
				else for (b in a) ! a[b] && a[b] !== 0 ? this.each(function() {
					this.style.removeProperty(O(b))
				}) : d += O(b) + ":" + Q(b, a[b]) + ";";
				return this.each(function() {
					this.style.cssText += ";" + d
				})
			},
			index: function(a) {
				return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(a) {
				return e.some.call(this,
					function(a) {
						return this.test(X(a))
					},
					P(a))
			},
			addClass: function(a) {
				return this.each(function(b) {
					d = [];
					var e = X(this),
						f = V(this, a, b, e);
					f.split(/\s+/g).forEach(function(a) {
							c(this).hasClass(a) || d.push(a)
						},
						this),
					d.length && X(this, e + (e ? " ": "") + d.join(" "))
				})
			},
			removeClass: function(b) {
				return this.each(function(c) {
					if (b === a) return X(this, "");
					d = X(this),
						V(this, b, c, d).split(/\s+/g).forEach(function(a) {
							d = d.replace(P(a), " ")
						}),
						X(this, d.trim())
				})
			},
			toggleClass: function(b, d) {
				return this.each(function(e) {
					var f = c(this),
						g = V(this, b, e, X(this));
					g.split(/\s+/g).forEach(function(b) { (d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b)
					})
				})
			},
			scrollTop: function() {
				if (!this.length) return;
				return "scrollTop" in this[0] ? this[0].scrollTop: this[0].scrollY
			},
			position: function() {
				if (!this.length) return;
				var a = this[0],
					b = this.offsetParent(),
					d = this.offset(),
					e = o.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					}: b.offset();
				return d.top -= parseFloat(c(a).css("margin-top")) || 0,
					d.left -= parseFloat(c(a).css("margin-left")) || 0,
					e.top += parseFloat(c(b[0]).css("border-top-width")) || 0,
					e.left += parseFloat(c(b[0]).css("border-left-width")) || 0,
				{
					top: d.top - e.top,
					left: d.left - e.left
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var a = this.offsetParent || h.body;
					while (a && !o.test(a.nodeName) && c(a).css("position") == "static") a = a.offsetParent;
					return a
				})
			}
		},
		c.fn.detach = c.fn.remove,
		["width", "height"].forEach(function(b) {
			c.fn[b] = function(d) {
				var e, f = this[0],
					g = b.replace(/./,
						function(a) {
							return a[0].toUpperCase()
						});
				return d === a ? G(f) ? f["inner" + g] : H(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[b] : this.each(function(a) {
					f = c(this),
						f.css(b, V(this, d, a, f[b]()))
				})
			}
		}),
		q.forEach(function(a, b) {
			var d = b % 2;
			c.fn[a] = function() {
				var a, e = c.map(arguments,
						function(b) {
							return a = E(b),
								a == "object" || a == "array" || b == null ? b: A.fragment(b)
						}),
					f,
					g = this.length > 1;
				return e.length < 1 ? this: this.each(function(a, h) {
					f = d ? h: h.parentNode,
						h = b == 0 ? h.nextSibling: b == 1 ? h.firstChild: b == 2 ? h: null,
						e.forEach(function(a) {
							if (g) a = a.cloneNode(!0);
							else if (!f) return c(a).remove();
							Z(f.insertBefore(a, h),
								function(a) {
									a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && !a.src && window.eval.call(window, a.innerHTML)
								})
						})
				})
			},
				c.fn[d ? a + "To": "insert" + (b ? "Before": "After")] = function(b) {
					return c(b)[a](this),
						this
				}
		}),
		A.Z.prototype = c.fn,
		A.uniq = C,
		A.deserializeValue = Y,
		c.zepto = A,
		c
} ();
window.Zepto = Zepto,
"$" in window || (window.$ = Zepto),
	function(a) {
		function b(a) {
			var b = this.os = {},
				c = this.browser = {},
				d = a.match(/WebKit\/([\d.]+)/),
				e = a.match(/(Android)\s+([\d.]+)/),
				f = a.match(/(iPad).*OS\s([\d_]+)/),
				g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/),
				h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
				i = h && a.match(/TouchPad/),
				j = a.match(/Kindle\/([\d.]+)/),
				k = a.match(/Silk\/([\d._]+)/),
				l = a.match(/(BlackBerry).*Version\/([\d.]+)/),
				m = a.match(/(BB10).*Version\/([\d.]+)/),
				n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
				o = a.match(/PlayBook/),
				p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
				q = a.match(/Firefox\/([\d.]+)/);
			if (c.webkit = !!d) c.version = d[1];
			e && (b.android = !0, b.version = e[2]),
			g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")),
			f && (b.ios = b.ipad = !0, b.version = f[2].replace(/_/g, ".")),
			h && (b.webos = !0, b.version = h[2]),
			i && (b.touchpad = !0),
			l && (b.blackberry = !0, b.version = l[2]),
			m && (b.bb10 = !0, b.version = m[2]),
			n && (b.rimtabletos = !0, b.version = n[2]),
			o && (c.playbook = !0),
			j && (b.kindle = !0, b.version = j[1]),
			k && (c.silk = !0, c.version = k[1]),
			!k && b.android && a.match(/Kindle Fire/) && (c.silk = !0),
			p && (c.chrome = !0, c.version = p[1]),
			q && (c.firefox = !0, c.version = q[1]),
				b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)),
				b.phone = !b.tablet && !!(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/))
		}
		b.call(a, navigator.userAgent),
			a.__detect = b
	} (Zepto),
	function(a) {
		function g(a) {
			return a._zid || (a._zid = d++)
		}
		function h(a, b, d, e) {
			b = i(b);
			if (b.ns) var f = j(b.ns);
			return (c[g(a)] || []).filter(function(a) {
				return a && (!b.e || a.e == b.e) && (!b.ns || f.test(a.ns)) && (!d || g(a.fn) === g(d)) && (!e || a.sel == e)
			})
		}
		function i(a) {
			var b = ("" + a).split(".");
			return {
				e: b[0],
				ns: b.slice(1).sort().join(" ")
			}
		}
		function j(a) {
			return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
		}
		function k(b, c, d) {
			a.type(b) != "string" ? a.each(b, d) : b.split(/\s/).forEach(function(a) {
				d(a, c)
			})
		}
		function l(a, b) {
			return a.del && (a.e == "focus" || a.e == "blur") || !!b
		}
		function m(a) {
			return f[a] || a
		}
		function n(b, d, e, h, j, n) {
			var o = g(b),
				p = c[o] || (c[o] = []);
			k(d, e,
				function(c, d) {
					var e = i(c);
					e.fn = d,
						e.sel = h,
					e.e in f && (d = function(b) {
						var c = b.relatedTarget;
						if (!c || c !== this && !a.contains(this, c)) return e.fn.apply(this, arguments)
					}),
						e.del = j && j(d, c);
					var g = e.del || d;
					e.proxy = function(a) {
						var c = g.apply(b, [a].concat(a.data));
						return c === !1 && (a.preventDefault(), a.stopPropagation()),
							c
					},
						e.i = p.length,
						p.push(e),
						b.addEventListener(m(e.e), e.proxy, l(e, n))
				})
		}
		function o(a, b, d, e, f) {
			var i = g(a);
			k(b || "", d,
				function(b, d) {
					h(a, b, d, e).forEach(function(b) {
						delete c[i][b.i],
							a.removeEventListener(m(b.e), b.proxy, l(b, f))
					})
				})
		}
		function t(b) {
			var c, d = {
				originalEvent: b
			};
			for (c in b) ! r.test(c) && b[c] !== undefined && (d[c] = b[c]);
			return a.each(s,
				function(a, c) {
					d[a] = function() {
						return this[c] = p,
							b[a].apply(b, arguments)
					},
						d[c] = q
				}),
				d
		}
		function u(a) {
			if (! ("defaultPrevented" in a)) {
				a.defaultPrevented = !1;
				var b = a.preventDefault;
				a.preventDefault = function() {
					this.defaultPrevented = !0,
						b.call(this)
				}
			}
		}
		var b = a.zepto.qsa,
			c = {},
			d = 1,
			e = {},
			f = {
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			};
		e.click = e.mousedown = e.mouseup = e.mousemove = "MouseEvents",
			a.event = {
				add: n,
				remove: o
			},
			a.proxy = function(b, c) {
				if (a.isFunction(b)) {
					var d = function() {
						return b.apply(c, arguments)
					};
					return d._zid = g(b),
						d
				}
				if (typeof c == "string") return a.proxy(b[c], b);
				throw new TypeError("expected function")
			},
			a.fn.bind = function(a, b) {
				return this.each(function() {
					n(this, a, b)
				})
			},
			a.fn.unbind = function(a, b) {
				return this.each(function() {
					o(this, a, b)
				})
			},
			a.fn.one = function(a, b) {
				return this.each(function(c, d) {
					n(this, a, b, null,
						function(a, b) {
							return function() {
								var c = a.apply(d, arguments);
								return o(d, b, a),
									c
							}
						})
				})
			};
		var p = function() {
				return ! 0
			},
			q = function() {
				return ! 1
			},
			r = /^([A-Z]|layer[XY]$)/,
			s = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		a.fn.delegate = function(b, c, d) {
			return this.each(function(e, f) {
				n(f, c, d, b,
					function(c) {
						return function(d) {
							var e, g = a(d.target).closest(b, f).get(0);
							if (g) return e = a.extend(t(d), {
								currentTarget: g,
								liveFired: f
							}),
								c.apply(g, [e].concat([].slice.call(arguments, 1)))
						}
					})
			})
		},
			a.fn.undelegate = function(a, b, c) {
				return this.each(function() {
					o(this, b, c, a)
				})
			},
			a.fn.live = function(b, c) {
				return a(document.body).delegate(this.selector, b, c),
					this
			},
			a.fn.die = function(b, c) {
				return a(document.body).undelegate(this.selector, b, c),
					this
			},
			a.fn.on = function(b, c, d) {
				return ! c || a.isFunction(c) ? this.bind(b, c || d) : this.delegate(c, b, d)
			},
			a.fn.off = function(b, c, d) {
				return ! c || a.isFunction(c) ? this.unbind(b, c || d) : this.undelegate(c, b, d)
			},
			a.fn.trigger = function(b, c) {
				if (typeof b == "string" || a.isPlainObject(b)) b = a.Event(b);
				return u(b),
					b.data = c,
					this.each(function() {
						"dispatchEvent" in this && this.dispatchEvent(b)
					})
			},
			a.fn.triggerHandler = function(b, c) {
				var d, e;
				return this.each(function(f, g) {
					d = t(typeof b == "string" ? a.Event(b) : b),
						d.data = c,
						d.target = g,
						a.each(h(g, b.type || b),
							function(a, b) {
								e = b.proxy(d);
								if (d.isImmediatePropagationStopped()) return ! 1
							})
				}),
					e
			},
			"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
				a.fn[b] = function(a) {
					return a ? this.bind(b, a) : this.trigger(b)
				}
			}),
			["focus", "blur"].forEach(function(b) {
				a.fn[b] = function(a) {
					return a ? this.bind(b, a) : this.each(function() {
						try {
							this[b]()
						} catch(a) {}
					}),
						this
				}
			}),
			a.Event = function(a, b) {
				typeof a != "string" && (b = a, a = b.type);
				var c = document.createEvent(e[a] || "Events"),
					d = !0;
				if (b) for (var f in b) f == "bubbles" ? d = !!b[f] : c[f] = b[f];
				return c.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null),
					c.isDefaultPrevented = function() {
						return this.defaultPrevented
					},
					c
			}
	} (Zepto),
	function($) {
		function triggerAndReturn(a, b, c) {
			var d = $.Event(b);
			return $(a).trigger(d, c),
				!d.defaultPrevented
		}
		function triggerGlobal(a, b, c, d) {
			if (a.global) return triggerAndReturn(b || document, c, d)
		}
		function ajaxStart(a) {
			a.global && $.active++===0 && triggerGlobal(a, null, "ajaxStart")
		}
		function ajaxStop(a) {
			a.global && !--$.active && triggerGlobal(a, null, "ajaxStop")
		}
		function ajaxBeforeSend(a, b) {
			var c = b.context;
			if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1) return ! 1;
			triggerGlobal(b, c, "ajaxSend", [a, b])
		}
		function ajaxSuccess(a, b, c) {
			var d = c.context,
				e = "success";
			c.success.call(d, a, e, b),
				triggerGlobal(c, d, "ajaxSuccess", [b, c, a]),
				ajaxComplete(e, b, c)
		}
		function ajaxError(a, b, c, d) {
			var e = d.context;
			d.error.call(e, c, b, a),
				triggerGlobal(d, e, "ajaxError", [c, d, a]),
				ajaxComplete(b, c, d)
		}
		function ajaxComplete(a, b, c) {
			var d = c.context;
			c.complete.call(d, b, a),
				triggerGlobal(c, d, "ajaxComplete", [b, c]),
				ajaxStop(c)
		}
		function empty() {}
		function mimeToDataType(a) {
			return a && (a = a.split(";", 2)[0]),
			a && (a == htmlType ? "html": a == jsonType ? "json": scriptTypeRE.test(a) ? "script": xmlTypeRE.test(a) && "xml") || "text"
		}
		function appendQuery(a, b) {
			return (a + "&" + b).replace(/[&?]{1,2}/, "?")
		}
		function serializeData(a) {
			a.processData && a.data && $.type(a.data) != "string" && (a.data = $.param(a.data, a.traditional)),
			a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data))
		}
		function parseArguments(a, b, c, d) {
			var e = !$.isFunction(b);
			return {
				url: a,
				data: e ? b: undefined,
				success: e ? $.isFunction(c) ? c: undefined: b,
				dataType: e ? d || c: c
			}
		}
		function serialize(a, b, c, d) {
			var e, f = $.isArray(b);
			$.each(b,
				function(b, g) {
					e = $.type(g),
					d && (b = c ? d: d + "[" + (f ? "": b) + "]"),
						!d && f ? a.add(g.name, g.value) : e == "array" || !c && e == "object" ? serialize(a, g, c, b) : a.add(b, g)
				})
		}
		var jsonpID = 0,
			document = window.document,
			key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			scriptTypeRE = /^(?:text|application)\/javascript/i,
			xmlTypeRE = /^(?:text|application)\/xml/i,
			jsonType = "application/json",
			htmlType = "text/html",
			blankRE = /^\s*$/;
		$.active = 0,
			$.ajaxJSONP = function(a) {
				if ("type" in a) {
					var b = "jsonp" + ++jsonpID,
						c = document.createElement("script"),
						d = function() {
							clearTimeout(g),
								$(c).remove(),
								delete window[b]
						},
						e = function(c) {
							d();
							if (!c || c == "timeout") window[b] = empty;
							ajaxError(null, c || "abort", f, a)
						},
						f = {
							abort: e
						},
						g;
					return ajaxBeforeSend(f, a) === !1 ? (e("abort"), !1) : (window[b] = function(b) {
						d(),
							ajaxSuccess(b, f, a)
					},
						c.onerror = function() {
							e("error")
						},
						c.src = a.url.replace(/=\?/, "=" + b), $("head").append(c), a.timeout > 0 && (g = setTimeout(function() {
							e("timeout")
						},
						a.timeout)), f)
				}
				return $.ajax(a)
			},
			$.ajaxSettings = {
				type: "GET",
				beforeSend: empty,
				success: empty,
				error: empty,
				complete: empty,
				context: null,
				global: !0,
				xhr: function() {
					return new window.XMLHttpRequest
				},
				accepts: {
					script: "text/javascript, application/javascript",
					json: jsonType,
					xml: "application/xml, text/xml",
					html: htmlType,
					text: "text/plain"
				},
				crossDomain: !1,
				timeout: 0,
				processData: !0,
				cache: !0
			},
			$.ajax = function(options) {
				var settings = $.extend({},
					options || {});
				for (key in $.ajaxSettings) settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
				ajaxStart(settings),
				settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host),
				settings.url || (settings.url = window.location.toString()),
					serializeData(settings),
				settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
				var dataType = settings.dataType,
					hasPlaceholder = /=\?/.test(settings.url);
				if (dataType == "jsonp" || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")),
					$.ajaxJSONP(settings);
				var mime = settings.accepts[dataType],
					baseHeaders = {},
					protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1: window.location.protocol,
					xhr = settings.xhr(),
					abortTimeout;
				settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"),
				mime && (baseHeaders.Accept = mime, mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime));
				if (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
				settings.headers = $.extend(baseHeaders, settings.headers || {}),
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4) {
							xhr.onreadystatechange = empty,
								clearTimeout(abortTimeout);
							var result, error = !1;
							if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
								dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")),
									result = xhr.responseText;
								try {
									dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML: dataType == "json" && (result = blankRE.test(result) ? null: $.parseJSON(result))
								} catch(e) {
									error = e
								}
								error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
							} else ajaxError(null, xhr.status ? "error": "abort", xhr, settings)
						}
					};
				var async = "async" in settings ? settings.async: !0;
				xhr.open(settings.type, settings.url, async);
				for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name]);
				return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(), !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function() {
						xhr.onreadystatechange = empty,
							xhr.abort(),
							ajaxError(null, "timeout", xhr, settings)
					},
					settings.timeout)), xhr.send(settings.data ? settings.data: null), xhr)
			},
			$.get = function(a, b, c, d) {
				return $.ajax(parseArguments.apply(null, arguments))
			},
			$.post = function(a, b, c, d) {
				var e = parseArguments.apply(null, arguments);
				return e.type = "POST",
					$.ajax(e)
			},
			$.getJSON = function(a, b, c) {
				var d = parseArguments.apply(null, arguments);
				return d.dataType = "json",
					$.ajax(d)
			},
			$.fn.load = function(a, b, c) {
				if (!this.length) return this;
				var d = this,
					e = a.split(/\s/),
					f,
					g = parseArguments(a, b, c),
					h = g.success;
				return e.length > 1 && (g.url = e[0], f = e[1]),
					g.success = function(a) {
						d.html(f ? $("<div>").html(a.replace(rscript, "")).find(f) : a),
						h && h.apply(d, arguments)
					},
					$.ajax(g),
					this
			};
		var escape = encodeURIComponent;
		$.param = function(a, b) {
			var c = [];
			return c.add = function(a, b) {
				this.push(escape(a) + "=" + escape(b))
			},
				serialize(c, a, b),
				c.join("&").replace(/%20/g, "+")
		}
	} (Zepto),
	function(a) {
		a.fn.serializeArray = function() {
			var b = [],
				c;
			return a(Array.prototype.slice.call(this.get(0).elements)).each(function() {
				c = a(this);
				var d = c.attr("type");
				this.nodeName.toLowerCase() != "fieldset" && !this.disabled && d != "submit" && d != "reset" && d != "button" && (d != "radio" && d != "checkbox" || this.checked) && b.push({
					name: c.attr("name"),
					value: c.val()
				})
			}),
				b
		},
			a.fn.serialize = function() {
				var a = [];
				return this.serializeArray().forEach(function(b) {
					a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
				}),
					a.join("&")
			},
			a.fn.submit = function(b) {
				if (b) this.bind("submit", b);
				else if (this.length) {
					var c = a.Event("submit");
					this.eq(0).trigger(c),
					c.defaultPrevented || this.get(0).submit()
				}
				return this
			}
	} (Zepto),
	function(a, b) {
		function s(a) {
			return t(a.replace(/([a-z])([A-Z])/, "$1-$2"))
		}
		function t(a) {
			return a.toLowerCase()
		}
		function u(a) {
			return d ? d + a: t(a)
		}
		var c = "",
			d, e, f, g = {
				Webkit: "webkit",
				Moz: "",
				O: "o",
				ms: "MS"
			},
			h = window.document,
			i = h.createElement("div"),
			j = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
			k,
			l,
			m,
			n,
			o,
			p,
			q,
			r = {};
		a.each(g,
			function(a, e) {
				if (i.style[a + "TransitionProperty"] !== b) return c = "-" + t(a) + "-",
					d = e,
					!1
			}),
			k = c + "transform",
			r[l = c + "transition-property"] = r[m = c + "transition-duration"] = r[n = c + "transition-timing-function"] = r[o = c + "animation-name"] = r[p = c + "animation-duration"] = r[q = c + "animation-timing-function"] = "",
			a.fx = {
				off: d === b && i.style.transitionProperty === b,
				speeds: {
					_default: 400,
					fast: 200,
					slow: 600
				},
				cssPrefix: c,
				transitionEnd: u("TransitionEnd"),
				animationEnd: u("AnimationEnd")
			},
			a.fn.animate = function(b, c, d, e) {
				return a.isPlainObject(c) && (d = c.easing, e = c.complete, c = c.duration),
				c && (c = (typeof c == "number" ? c: a.fx.speeds[c] || a.fx.speeds._default) / 1e3),
					this.anim(b, c, d, e)
			},
			a.fn.anim = function(c, d, e, f) {
				var g, h = {},
					i, t = "",
					u = this,
					v, w = a.fx.transitionEnd;
				d === b && (d = .4),
				a.fx.off && (d = 0);
				if (typeof c == "string") h[o] = c,
					h[p] = d + "s",
					h[q] = e || "linear",
					w = a.fx.animationEnd;
				else {
					i = [];
					for (g in c) j.test(g) ? t += g + "(" + c[g] + ") ": (h[g] = c[g], i.push(s(g)));
					t && (h[k] = t, i.push(k)),
					d > 0 && typeof c == "object" && (h[l] = i.join(", "), h[m] = d + "s", h[n] = e || "linear")
				}
				return v = function(b) {
					if (typeof b != "undefined") {
						if (b.target !== b.currentTarget) return;
						a(b.target).unbind(w, v)
					}
					a(this).css(r),
					f && f.call(this)
				},
				d > 0 && this.bind(w, v),
				this.size() && this.get(0).clientLeft,
					this.css(h),
				d <= 0 && setTimeout(function() {
						u.each(function() {
							v.call(this)
						})
					},
					0),
					this
			},
			i = null
	} (Zepto); (function($) {
	$.getScript = function(src, func) {
		var script = document.createElement('script');
		script.async = "async";
		script.src = src;
		if (func) {
			script.onload = func;
		}
		document.getElementsByTagName("head")[0].appendChild(script);
	}
})(Zepto);

(function(window, document, Math) {
	var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60)
		};
	var utils = (function() {
		var me = {};
		var _elementStyle = document.createElement('div').style;
		var _vendor = (function() {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
			for (; i < l; i++) {
				transform = vendors[i] + 'ransform';
				if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1)
			}
			return false
		})();
		function _prefixStyle(style) {
			if (_vendor === false) return false;
			if (_vendor === '') return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1)
		}
		me.getTime = Date.now ||
			function getTime() {
				return new Date().getTime()
			};
		me.extend = function(target, obj) {
			for (var i in obj) {
				target[i] = obj[i]
			}
		};
		me.addEvent = function(el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture)
		};
		me.removeEvent = function(el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture)
		};
		me.prefixPointerEvent = function(pointerEvent) {
			return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent
		};
		me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
			destination = current + (speed * speed) / (2 * deceleration) * (distance < 0 ? -1 : 1);
			duration = speed / deceleration;
			if (destination < lowerMargin) {
				destination = wrapperSize ? lowerMargin - (wrapperSize / 2.5 * (speed / 8)) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed
			} else if (destination > 0) {
				destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed
			}
			return {
				destination: Math.round(destination),
				duration: duration
			}
		};
		var _transform = _prefixStyle('transform');
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: window.PointerEvent || window.MSPointerEvent,
			hasTransition: _prefixStyle('transition') in _elementStyle
		});
		me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));
		me.extend(me.style = {},
			{
				transform: _transform,
				transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
				transitionDuration: _prefixStyle('transitionDuration'),
				transitionDelay: _prefixStyle('transitionDelay'),
				transformOrigin: _prefixStyle('transformOrigin')
			});
		me.hasClass = function(e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className)
		};
		me.addClass = function(e, c) {
			if (me.hasClass(e, c)) {
				return
			}
			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ')
		};
		me.removeClass = function(e, c) {
			if (!me.hasClass(e, c)) {
				return
			}
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ')
		};
		me.offset = function(el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop
			}
			return {
				left: left,
				top: top
			}
		};
		me.preventDefaultException = function(el, exceptions) {
			for (var i in exceptions) {
				if (exceptions[i].test(el[i])) {
					return true
				}
			}
			return false
		};
		me.extend(me.eventType = {},
			{
				touchstart: 1,
				touchmove: 1,
				touchend: 1,
				mousedown: 2,
				mousemove: 2,
				mouseup: 2,
				pointerdown: 3,
				pointermove: 3,
				pointerup: 3,
				MSPointerDown: 3,
				MSPointerMove: 3,
				MSPointerUp: 3
			});
		me.extend(me.ease = {},
			{
				quadratic: {
					style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
					fn: function(k) {
						return k * (2 - k)
					}
				},
				circular: {
					style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
					fn: function(k) {
						return Math.sqrt(1 - (--k * k))
					}
				},
				back: {
					style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
					fn: function(k) {
						var b = 4;
						return (k = k - 1) * k * ((b + 1) * k + b) + 1
					}
				},
				bounce: {
					style: '',
					fn: function(k) {
						if ((k /= 1) < (1 / 2.75)) {
							return 7.5625 * k * k
						} else if (k < (2 / 2.75)) {
							return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75
						} else if (k < (2.5 / 2.75)) {
							return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375
						} else {
							return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375
						}
					}
				},
				elastic: {
					style: '',
					fn: function(k) {
						var f = 0.22,
							e = 0.4;
						if (k === 0) {
							return 0
						}
						if (k == 1) {
							return 1
						}
						return (e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1)
					}
				}
			});
		me.tap = function(e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev)
		};
		me.click = function(e) {
			var target = e.target,
				ev;
			if (! (/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName)) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
				ev._constructed = true;
				target.dispatchEvent(ev)
			}
		};
		return me
	})();
	function IScroll(el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;
		this.options = {
			resizeScrollbars: true,
			mouseWheelSpeed: 20,
			snapThreshold: 0.334,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
			bounce: true,
			bounceTime: 600,
			bounceEasing: '',
			preventDefault: true,
			preventDefaultException: {
				tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
			},
			HWCompositing: true,
			useTransition: true,
			useTransform: true
		};
		for (var i in options) {
			this.options[i] = options[i]
		}
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)': '';
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical': this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false: this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false: this.options.scrollX;
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular: this.options.bounceEasing;
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
		if (this.options.tap === true) {
			this.options.tap = 'tap'
		}
		if (this.options.shrinkScrollbars == 'scale') {
			this.options.useTransition = false
		}
		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
		this._init();
		this.refresh();
		this.scrollTo(this.options.startX, this.options.startY);

		this.enable()
	}
	IScroll.prototype = {
		version: '5.1.3',
		_init: function() {
			this._initEvents();
			if (this.options.scrollbars || this.options.indicators) {
				this._initIndicators()
			}
			if (this.options.mouseWheel) {
				this._initWheel()
			}
			if (this.options.snap) {
				this._initSnap()
			}
			if (this.options.keyBindings) {
				this._initKeys()
			}
		},
		destroy: function() {
			this._initEvents(true);
			this._execEvent('destroy')
		},
		_transitionEnd: function(e) {
			if (e.target != this.scroller || !this.isInTransition) {
				return
			}
			this._transitionTime();
			if (!this.resetPosition(this.options.bounceTime)) {
				this.isInTransition = false;
				this._execEvent('scrollEnd')
			}
		},
		_start: function(e) {
			if (utils.eventType[e.type] != 1) {
				if (e.button !== 0) {
					return
				}
			}
			if (!this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated)) {
				return
			}
			if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault()
			}
			var point = e.touches ? e.touches[0] : e,
				pos;
			this.initiated = utils.eventType[e.type];
			this.moved = false;
			this.distX = 0;
			this.distY = 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
			this._transitionTime();
			this.startTime = utils.getTime();
			if (this.options.useTransition && this.isInTransition) {
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd')
			} else if (!this.options.useTransition && this.isAnimating) {
				this.isAnimating = false;
				this._execEvent('scrollEnd')
			}
			this.startX = this.x;
			this.startY = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX = point.pageX;
			this.pointY = point.pageY;
			this._execEvent('beforeScrollStart')
		},
		_move: function(e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return
			}
			if (this.options.preventDefault) {
				e.preventDefault()
			}
			var point = e.touches ? e.touches[0] : e,
				deltaX = point.pageX - this.pointX,
				deltaY = point.pageY - this.pointY,
				timestamp = utils.getTime(),
				newX,
				newY,
				absDistX,
				absDistY;
			this.pointX = point.pageX;
			this.pointY = point.pageY;
			this.distX += deltaX;
			this.distY += deltaY;
			absDistX = Math.abs(this.distX);
			absDistY = Math.abs(this.distY);
			if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
				return
			}
			if (!this.directionLocked && !this.options.freeScroll) {
				if (absDistX > absDistY + this.options.directionLockThreshold) {
					this.directionLocked = 'h'
				} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
					this.directionLocked = 'v'
				} else {
					this.directionLocked = 'n'
				}
			}
			if (this.directionLocked == 'h') {
				if (this.options.eventPassthrough == 'vertical') {
					e.preventDefault()
				} else if (this.options.eventPassthrough == 'horizontal') {
					this.initiated = false;
					return
				}
				deltaY = 0
			} else if (this.directionLocked == 'v') {
				if (this.options.eventPassthrough == 'horizontal') {
					e.preventDefault()
				} else if (this.options.eventPassthrough == 'vertical') {
					this.initiated = false;
					return
				}
				deltaX = 0
			}
			deltaX = this.hasHorizontalScroll ? deltaX: 0;
			deltaY = this.hasVerticalScroll ? deltaY: 0;
			newX = this.x + deltaX;
			newY = this.y + deltaY;
			if (newX > 0 || newX < this.maxScrollX) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX
			}
			if (newY > 0 || newY < this.maxScrollY) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY
			}
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
			if (!this.moved) {
				this._execEvent('scrollStart')
			}
			this.moved = true;
			this._translate(newX, newY);
			if (timestamp - this.startTime > 300) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y
			}
		},
		_end: function(e) {
			if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
				return
			}
			if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
				e.preventDefault()
			}
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
			if (this.resetPosition(this.options.bounceTime)) {
				return
			}
			this.scrollTo(newX, newY);
			if (!this.moved) {
				if (this.options.tap) {
					utils.tap(e, this.options.tap)
				}
				if (this.options.click) {
					utils.click(e)
				}
				this._execEvent('scrollCancel');
				return
			}
			if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
				this._execEvent('flick');
				return
			}
			if (this.options.momentum && duration < 300) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
					destination: newX,
					duration: 0
				};
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
					destination: newY,
					duration: 0
				};
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1
			}
			if (this.options.snap) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
				newX = snap.x;
				newY = snap.y;
				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing
			}
			if (newX != this.x || newY != this.y) {
				if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
					easing = utils.ease.quadratic
				}
				this.scrollTo(newX, newY, time, easing);
				return
			}
			this._execEvent('scrollEnd')
		},
		_resize: function() {
			var that = this;
			clearTimeout(this.resizeTimeout);
			this.resizeTimeout = setTimeout(function() {
					that.refresh()
				},
				this.options.resizePolling)
		},
		resetPosition: function(time) {
			var x = this.x,
				y = this.y;
			time = time || 0;
			if (!this.hasHorizontalScroll || this.x > 0) {
				x = 0
			} else if (this.x < this.maxScrollX) {
				x = this.maxScrollX
			}
			if (!this.hasVerticalScroll || this.y > 0) {
				y = 0
			} else if (this.y < this.maxScrollY) {
				y = this.maxScrollY
			}
			if (x == this.x && y == this.y) {
				return false
			}
			this.scrollTo(x, y, time, this.options.bounceEasing);
			return true
		},
		disable: function() {
			this.enabled = false
		},
		enable: function() {
			this.enabled = true
		},
		refresh: function() {
			var rf = this.wrapper.offsetHeight;
			this.wrapperWidth = this.wrapper.clientWidth;
			this.wrapperHeight = this.wrapper.clientHeight;
			this.scrollerWidth = this.scroller.offsetWidth;
			this.scrollerHeight = this.scroller.offsetHeight;
			this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
			this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
			if (!this.hasHorizontalScroll) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth
			}
			if (!this.hasVerticalScroll) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight
			}
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
			this.wrapperOffset = utils.offset(this.wrapper);
			this._execEvent('refresh');
			this.resetPosition()
		},
		on: function(type, fn) {
			if (!this._events[type]) {
				this._events[type] = []
			}
			this._events[type].push(fn)
		},
		off: function(type, fn) {
			if (!this._events[type]) {
				return
			}
			var index = this._events[type].indexOf(fn);
			if (index > -1) {
				this._events[type].splice(index, 1)
			}
		},
		_execEvent: function(type) {
			if (!this._events[type]) {
				return
			}
			var i = 0,
				l = this._events[type].length;
			if (!l) {
				return
			}
			for (; i < l; i++) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1))
			}
		},
		scrollBy: function(x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
			this.scrollTo(x, y, time, easing)
		},
		scrollTo: function(x, y, time, easing) {
			easing = easing || utils.ease.circular;
			this.isInTransition = this.options.useTransition && time > 0;
			if (!time || (this.options.useTransition && easing.style)) {
				this._transitionTimingFunction(easing.style);
				this._transitionTime(time);
				this._translate(x, y)
			} else {
				this._animate(x, y, time, easing.fn)
			}
		},
		scrollToElement: function(el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el: this.scroller.querySelector(el);
			if (!el) {
				return
			}
			var pos = utils.offset(el);
			pos.left -= this.wrapperOffset.left;
			pos.top -= this.wrapperOffset.top;
			if (offsetX === true) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2)
			}
			if (offsetY === true) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2)
			}
			pos.left -= offsetX || 0;
			pos.top -= offsetY || 0;
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX: pos.left;
			pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY: pos.top;
			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
			this.scrollTo(pos.left, pos.top, time, easing)
		},
		_transitionTime: function(time) {
			time = time || 0;
			this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';
			if (!time && utils.isBadAndroid) {
				this.scrollerStyle[utils.style.transitionDuration] = '0.001s'
			}
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTime(time)
				}
			}
		},
		_transitionTimingFunction: function(easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].transitionTimingFunction(easing)
				}
			}
		},
		_translate: function(x, y) {
			if (this.options.useTransform) {
				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px'
			}
			this.x = x;
			this.y = y;
			if (this.indicators) {
				for (var i = this.indicators.length; i--;) {
					this.indicators[i].updatePosition()
				}
			}
		},
		_initEvents: function(remove) {
			var eventType = remove ? utils.removeEvent: utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper: window;
			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);
			if (this.options.click) {
				eventType(this.wrapper, 'click', this, true)
			}
			if (!this.options.disableMouse) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this)
			}
			if (utils.hasPointer && !this.options.disablePointer) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this)
			}
			if (utils.hasTouch && !this.options.disableTouch) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this)
			}
			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this)
		},
		getComputedPosition: function() {
			var matrix = window.getComputedStyle(this.scroller, null),
				x,
				y;
			if (this.options.useTransform) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5])
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '')
			}
			return {
				x: x,
				y: y
			}
		},
		_initIndicators: function() {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;
			var that = this;
			this.indicators = [];
			if (this.options.scrollbars) {
				if (this.options.scrollY) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator)
				}
				if (this.options.scrollX) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator)
				}
			}
			if (this.options.indicators) {
				indicators = indicators.concat(this.options.indicators)
			}
			for (var i = indicators.length; i--;) {
				this.indicators.push(new Indicator(this, indicators[i]))
			}
			function _indicatorsMap(fn) {
				for (var i = that.indicators.length; i--;) {
					fn.call(that.indicators[i])
				}
			}
			if (this.options.fadeScrollbars) {
				this.on('scrollEnd',
					function() {
						_indicatorsMap(function() {
							this.fade()
						})
					});
				this.on('scrollCancel',
					function() {
						_indicatorsMap(function() {
							this.fade()
						})
					});
				this.on('scrollStart',
					function() {
						_indicatorsMap(function() {
							this.fade(1)
						})
					});
				this.on('beforeScrollStart',
					function() {
						_indicatorsMap(function() {
							this.fade(1, true)
						})
					})
			}
			this.on('refresh',
				function() {
					_indicatorsMap(function() {
						this.refresh()
					})
				});
			this.on('destroy',
				function() {
					_indicatorsMap(function() {
						this.destroy()
					});
					delete this.indicators
				})
		},
		_initWheel: function() {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
			this.on('destroy',
				function() {
					utils.removeEvent(this.wrapper, 'wheel', this);
					utils.removeEvent(this.wrapper, 'mousewheel', this);
					utils.removeEvent(this.wrapper, 'DOMMouseScroll', this)
				})
		},
		_wheel: function(e) {
			if (!this.enabled) {
				return
			}
			e.preventDefault();
			e.stopPropagation();
			var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
			if (this.wheelTimeout === undefined) {
				that._execEvent('scrollStart')
			}
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function() {
					that._execEvent('scrollEnd');
					that.wheelTimeout = undefined
				},
				400);
			if ('deltaX' in e) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY
				}
			} else if ('wheelDeltaX' in e) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed
			} else if ('wheelDelta' in e) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed
			} else if ('detail' in e) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed
			} else {
				return
			}
			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;
			if (!this.hasVerticalScroll) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0
			}
			if (this.options.snap) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;
				if (wheelDeltaX > 0) {
					newX--
				} else if (wheelDeltaX < 0) {
					newX++
				}
				if (wheelDeltaY > 0) {
					newY--
				} else if (wheelDeltaY < 0) {
					newY++
				}
				this.goToPage(newX, newY);
				return
			}
			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX: 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY: 0);
			if (newX > 0) {
				newX = 0
			} else if (newX < this.maxScrollX) {
				newX = this.maxScrollX
			}
			if (newY > 0) {
				newY = 0
			} else if (newY < this.maxScrollY) {
				newY = this.maxScrollY
			}
			this.scrollTo(newX, newY, 0)
		},
		_initSnap: function() {
			this.currentPage = {};
			if (typeof this.options.snap == 'string') {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap)
			}
			this.on('refresh',
				function() {
					var i = 0,
						l, m = 0,
						n, cx, cy, x = 0,
						y, stepX = this.options.snapStepX || this.wrapperWidth,
						stepY = this.options.snapStepY || this.wrapperHeight,
						el;
					this.pages = [];
					if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
						return
					}
					if (this.options.snap === true) {
						cx = Math.round(stepX / 2);
						cy = Math.round(stepY / 2);
						while (x > -this.scrollerWidth) {
							this.pages[i] = [];
							l = 0;
							y = 0;
							while (y > -this.scrollerHeight) {
								this.pages[i][l] = {
									x: Math.max(x, this.maxScrollX),
									y: Math.max(y, this.maxScrollY),
									width: stepX,
									height: stepY,
									cx: x - cx,
									cy: y - cy
								};
								y -= stepY;
								l++
							}
							x -= stepX;
							i++
						}
					} else {
						el = this.options.snap;
						l = el.length;
						n = -1;
						for (; i < l; i++) {
							if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
								m = 0;
								n++
							}
							if (!this.pages[m]) {
								this.pages[m] = []
							}
							x = Math.max( - el[i].offsetLeft, this.maxScrollX);
							y = Math.max( - el[i].offsetTop, this.maxScrollY);
							cx = x - Math.round(el[i].offsetWidth / 2);
							cy = y - Math.round(el[i].offsetHeight / 2);
							this.pages[m][n] = {
								x: x,
								y: y,
								width: el[i].offsetWidth,
								height: el[i].offsetHeight,
								cx: cx,
								cy: cy
							};
							if (x > this.maxScrollX) {
								m++
							}
						}
					}
					this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
					if (this.options.snapThreshold % 1 === 0) {
						this.snapThresholdX = this.options.snapThreshold;
						this.snapThresholdY = this.options.snapThreshold
					} else {
						this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
						this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
					}
				});
			this.on('flick',
				function() {
					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
					this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time)
				})
		},
		_nearestSnap: function(x, y) {
			if (!this.pages.length) {
				return {
					x: 0,
					y: 0,
					pageX: 0,
					pageY: 0
				}
			}
			var i = 0,
				l = this.pages.length,
				m = 0;
			if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
				return this.currentPage
			}
			if (x > 0) {
				x = 0
			} else if (x < this.maxScrollX) {
				x = this.maxScrollX
			}
			if (y > 0) {
				y = 0
			} else if (y < this.maxScrollY) {
				y = this.maxScrollY
			}
			for (; i < l; i++) {
				if (x >= this.pages[i][0].cx) {
					x = this.pages[i][0].x;
					break
				}
			}
			l = this.pages[i].length;
			for (; m < l; m++) {
				if (y >= this.pages[0][m].cy) {
					y = this.pages[0][m].y;
					break
				}
			}
			if (i == this.currentPage.pageX) {
				i += this.directionX;
				if (i < 0) {
					i = 0
				} else if (i >= this.pages.length) {
					i = this.pages.length - 1
				}
				x = this.pages[i][0].x
			}
			if (m == this.currentPage.pageY) {
				m += this.directionY;
				if (m < 0) {
					m = 0
				} else if (m >= this.pages[0].length) {
					m = this.pages[0].length - 1
				}
				y = this.pages[0][m].y
			}
			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			}
		},
		goToPage: function(x, y, time, easing) {
			easing = easing || this.options.bounceEasing;
			if (x >= this.pages.length) {
				x = this.pages.length - 1
			} else if (x < 0) {
				x = 0
			}
			if (y >= this.pages[x].length) {
				y = this.pages[x].length - 1
			} else if (y < 0) {
				y = 0
			}
			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;
			time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};
			this.scrollTo(posX, posY, time, easing)
		},
		next: function(time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
			x++;
			if (x >= this.pages.length && this.hasVerticalScroll) {
				x = 0;
				y++
			}
			this.goToPage(x, y, time, easing)
		},
		prev: function(time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
			x--;
			if (x < 0 && this.hasVerticalScroll) {
				x = 0;
				y--
			}
			this.goToPage(x, y, time, easing)
		},
		_initKeys: function(e) {
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;
			if (typeof this.options.keyBindings == 'object') {
				for (i in this.options.keyBindings) {
					if (typeof this.options.keyBindings[i] == 'string') {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0)
					}
				}
			} else {
				this.options.keyBindings = {}
			}
			for (i in keys) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i]
			}
			utils.addEvent(window, 'keydown', this);
			this.on('destroy',
				function() {
					utils.removeEvent(window, 'keydown', this)
				})
		},
		_key: function(e) {
			if (!this.enabled) {
				return
			}
			var snap = this.options.snap,
				newX = snap ? this.currentPage.pageX: this.x,
				newY = snap ? this.currentPage.pageY: this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;
			if (this.options.useTransition && this.isInTransition) {
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false
			}
			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
			switch (e.keyCode) {
				case this.options.keyBindings.pageUp:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX += snap ? 1 : this.wrapperWidth
					} else {
						newY += snap ? 1 : this.wrapperHeight
					}
					break;
				case this.options.keyBindings.pageDown:
					if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
						newX -= snap ? 1 : this.wrapperWidth
					} else {
						newY -= snap ? 1 : this.wrapperHeight
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length - 1 : this.maxScrollX;
					newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
					break;
				default:
					return
			}
			if (snap) {
				this.goToPage(newX, newY);
				return
			}
			if (newX > 0) {
				newX = 0;
				this.keyAcceleration = 0
			} else if (newX < this.maxScrollX) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0
			}
			if (newY > 0) {
				newY = 0;
				this.keyAcceleration = 0
			} else if (newY < this.maxScrollY) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0
			}
			this.scrollTo(newX, newY, 0);
			this.keyTime = now
		},
		_animate: function(destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;
			function step() {
				var now = utils.getTime(),
					newX,
					newY,
					easing;
				if (now >= destTime) {
					that.isAnimating = false;
					that._translate(destX, destY);
					if (!that.resetPosition(that.options.bounceTime)) {
						that._execEvent('scrollEnd')
					}
					return
				}
				now = (now - startTime) / duration;
				easing = easingFn(now);
				newX = (destX - startX) * easing + startX;
				newY = (destY - startY) * easing + startY;
				that._translate(newX, newY);
				if (that.isAnimating) {
					rAF(step)
				}
			}
			this.isAnimating = true;
			step()
		},
		handleEvent: function(e) {
			switch (e.type) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if (!e._constructed) {
						e.preventDefault();
						e.stopPropagation()
					}
					break
			}
		}
	};
	function createDefaultScrollbar(direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');
		if (type === true) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px'
		}
		indicator.className = 'iScrollIndicator';
		if (direction == 'h') {
			if (type === true) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%'
			}
			scrollbar.className = 'iScrollHorizontalScrollbar'
		} else {
			if (type === true) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%'
			}
			scrollbar.className = 'iScrollVerticalScrollbar'
		}
		scrollbar.style.cssText += ';overflow:hidden';
		if (!interactive) {
			scrollbar.style.pointerEvents = 'none'
		}
		scrollbar.appendChild(indicator);
		return scrollbar
	}
	function Indicator(scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;
		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};
		for (var i in options) {
			this.options[i] = options[i]
		}
		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;
		if (this.options.interactive) {
			if (!this.options.disableTouch) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this)
			}
			if (!this.options.disablePointer) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this)
			}
			if (!this.options.disableMouse) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this)
			}
		}
		if (this.options.fade) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s': '0ms';
			this.wrapperStyle.opacity = '0'
		}
	}
	Indicator.prototype = {
		handleEvent: function(e) {
			switch (e.type) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break
			}
		},
		destroy: function() {
			if (this.options.interactive) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);
				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);
				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this)
			}
			if (this.options.defaultScrollbars) {
				this.wrapper.parentNode.removeChild(this.wrapper)
			}
		},
		_start: function(e) {
			var point = e.touches ? e.touches[0] : e;
			e.preventDefault();
			e.stopPropagation();
			this.transitionTime();
			this.initiated = true;
			this.moved = false;
			this.lastPointX = point.pageX;
			this.lastPointY = point.pageY;
			this.startTime = utils.getTime();
			if (!this.options.disableTouch) {
				utils.addEvent(window, 'touchmove', this)
			}
			if (!this.options.disablePointer) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this)
			}
			if (!this.options.disableMouse) {
				utils.addEvent(window, 'mousemove', this)
			}
			this.scroller._execEvent('beforeScrollStart')
		},
		_move: function(e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX,
				deltaY,
				newX,
				newY,
				timestamp = utils.getTime();
			if (!this.moved) {
				this.scroller._execEvent('scrollStart')
			}
			this.moved = true;
			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;
			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;
			newX = this.x + deltaX;
			newY = this.y + deltaY;
			this._pos(newX, newY);
			e.preventDefault();
			e.stopPropagation()
		},
		_end: function(e) {
			if (!this.initiated) {
				return
			}
			this.initiated = false;
			e.preventDefault();
			e.stopPropagation();
			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);
			if (this.scroller.options.snap) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
				var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
				if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing)
				}
			}
			if (this.moved) {
				this.scroller._execEvent('scrollEnd')
			}
		},
		transitionTime: function(time) {
			time = time || 0;
			this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';
			if (!time && utils.isBadAndroid) {
				this.indicatorStyle[utils.style.transitionDuration] = '0.001s'
			}
		},
		transitionTimingFunction: function(easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing
		},
		refresh: function() {
			this.transitionTime();
			if (this.options.listenX && !this.options.listenY) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block': 'none'
			} else if (this.options.listenY && !this.options.listenX) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block': 'none'
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block': 'none'
			}
			if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = '8px'
					} else {
						this.wrapper.style.bottom = '8px'
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
				if (this.options.defaultScrollbars && this.options.customStyle) {
					if (this.options.listenX) {
						this.wrapper.style.right = '2px'
					} else {
						this.wrapper.style.bottom = '2px'
					}
				}
			}
			var r = this.wrapper.offsetHeight;
			if (this.options.listenX) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if (this.options.resize) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px'
				} else {
					this.indicatorWidth = this.indicator.clientWidth
				}
				this.maxPosX = this.wrapperWidth - this.indicatorWidth;
				if (this.options.shrink == 'clip') {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX
				}
				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
			}
			if (this.options.listenY) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if (this.options.resize) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px'
				} else {
					this.indicatorHeight = this.indicator.clientHeight
				}
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				if (this.options.shrink == 'clip') {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY
				}
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
			}
			this.updatePosition()
		},
		updatePosition: function() {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
			if (!this.options.ignoreBoundaries) {
				if (x < this.minBoundaryX) {
					if (this.options.shrink == 'scale') {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px'
					}
					x = this.minBoundaryX
				} else if (x > this.maxBoundaryX) {
					if (this.options.shrink == 'scale') {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width
					} else {
						x = this.maxBoundaryX
					}
				} else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px'
				}
				if (y < this.minBoundaryY) {
					if (this.options.shrink == 'scale') {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px'
					}
					y = this.minBoundaryY
				} else if (y > this.maxBoundaryY) {
					if (this.options.shrink == 'scale') {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height
					} else {
						y = this.maxBoundaryY
					}
				} else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px'
				}
			}
			this.x = x;
			this.y = y;
			if (this.scroller.options.useTransform) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px'
			}
		},
		_pos: function(x, y) {
			if (x < 0) {
				x = 0
			} else if (x > this.maxPosX) {
				x = this.maxPosX
			}
			if (y < 0) {
				y = 0
			} else if (y > this.maxPosY) {
				y = this.maxPosY
			}
			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
			this.scroller.scrollTo(x, y)
		},
		fade: function(val, hold) {
			if (hold && !this.visible) {
				return
			}
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
			var time = val ? 250 : 500,
				delay = val ? 0 : 300;
			val = val ? '1': '0';
			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
			this.fadeTimeout = setTimeout((function(val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val
			}).bind(this, val), delay)
		}
	};
	IScroll.utils = utils;
	if (typeof module != 'undefined' && module.exports) {
		module.exports = IScroll
	} else {
		window.IScroll = IScroll
	}
})(window, document, Math);


