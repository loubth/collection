function myAlert() {
    alert("              这你都能瞅见，缘分啊                     <(＾－＾)>");
    //渐变背景
    (function () {
        var article = document.getElementsByTagName("article")[0];
        if (article.style.boxShadow == "") {
            setInterval(function () {
                article.style.boxShadow = "0 0 500px inset rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + ")";
            }, 400);
        }
    })();
    //背景音乐
    (function () {
        if (document.getElementById("bgAudio") == null) {
            var body = document.getElementsByTagName("body")[0];
            var audio = document.createElement("audio");
            audio.id = "bgAudio";
            body.appendChild(audio);
            audio.src = "http://music.163.com/song/media/outer/url?id=33527135.mp3";
            audio.autoplay = "autoplay";
            audio.loop = "loop";
        }
    })();
    //添加编辑
    (function () {
        var date = document.getElementById("time");
        var currentHref = window.location.href;
        var targetHref = currentHref.replace("https://loubth.github.io/collection/", "https://github.com/loubth/collection/edit/master/");
        date.onclick = function () {
            window.location.href = targetHref;
        }
        date.style.cursor = "pointer";
    })();
}

//文档加载后运行
$(function () {
    //优化作者标签
    (function () {
        var authorName = $("#author").html();
        var authorElement = "作者：<span><a href=\"javascript:myAlert();\">" + authorName + "</a></span>";
        $("#author").html(authorElement);
    })();
    //添加代码高亮库css文件
    (function () {
        if ($(".syntaxhighlighter").length != 0) {
            var titleElement = $("head title").eq(0);
            var highlightCssElement = $("<link rel='stylesheet' type='text/css' href='/collection/css/Syntaxhighlighter/shCoreMDUltra.css'/>");
            titleElement.after(highlightCssElement);
        }
    })();
    //添加“返回目录”
    (function () {
        var returnCatalog = document.createElement("div");
        returnCatalog.id = "returnCatalog";
        returnCatalog.style.width = "60px";
        returnCatalog.style.margin = "0 auto";
        returnCatalog.innerHTML = "<a href='/collection/index.html' target='_blank'>返回目录</a>";
        var info = document.getElementById("info");
        info.appendChild(returnCatalog);
    })();
    //添加收藏夹图标
    (function () {
        $("html>head>title").next("link").after($("<link rel='shortcut icon' href='/collection/image/common/favicon.ico'>"));
    })();
    //目录插件
    (function () {
        //如果文章中没有标题则不生生成目录
        if ($("article .content h1,article .content h2,article .content h3").length == 0) {
            return;
        }
        //将文章所在元素标识为目录生成源
        $("article .content").eq(0).attr("id", "k-catelog");
        //将aside元素标识为目录
        $("aside").eq(0).attr("class", "k-catelog-list").attr("id", "catelog-list");
        //设置目录显示效果
        $("#catelog-list").mouseenter(function () {
            $("#catelog-list>ul").css("display", "block");
            $("#catelog-list").css("overflow-x", "auto");
            $("#catelog-list").css("overflow-y", "auto");
            $("#catelog-list").css("background-color", "#00ff00a6");
            $("#catelog-list").animate({
                "width": "300px",
                "height": "500px",
            }, 100);
        });

        $("#catelog-list").mouseleave(function () {
            $("#catelog-list>ul").css("display", "none");
            $("#catelog-list").css("overflow-x", "hidden");
            $("#catelog-list").css("overflow-y", "hidden");
            $("#catelog-list").css("background-color", "#00ff00a6");
            $("#catelog-list").animate({
                "width": "2px",
                "height": "500px",
            }, 100);
        });

        //目录插件业务
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        !function (e, t) {
            "function" == typeof define && define.amd ? define(function () {
                return t
            }) : "object" === ("undefined" == typeof exports ? "undefined" : h(exports)) ? module.exports = t : e.katelog = t
        }(window, function (e) {
            function f(e, t) {
                return !!e.className && e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
            }

            function d(e, t) {
                if (f(e, t)) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ")
                }
            }

            function t(e) {
                for (var t, n = void 0, o = [], l = {}, a = {id: -1}, r = null, i = void 0, c = 0; c < e.length; c++) i = "heading-" + c, l = {
                    name: e[c].innerText || e[c].textContent,
                    tagName: n = e[c].tagName,
                    id: e[c].id = i,
                    level: (t = n, t ? t.slice(1) : 0),
                    parent: a
                }, r && (u(l.tagName) < u(r.tagName) ? l.parent = r : l.parent = s(l, r)), r = l, o.push(l);
                return o
            }

            function s(e, t) {
                for (var n = t.parent; n && u(e.tagName) >= u(n.tagName);) n = n.parent;
                return n || {id: -1}
            }

            function u(e) {
                var t = 0;
                if (e) switch (e.toLowerCase()) {
                    case"h1":
                        t = 6;
                        break;
                    case"h2":
                        t = 5;
                        break;
                    case"h3":
                        t = 4;
                        break;
                    case"h4":
                        t = 3;
                        break;
                    case"h5":
                        t = 2;
                        break;
                    case"h6":
                        t = 1
                }
                return t
            }

            function n(e, t, n) {
                e && (e.attachEvent ? (e["e" + t + n] = n, e[t + n] = function () {
                    e["e" + t + n](window.event)
                }, e.attachEvent("on" + t, e[t + n])) : e.addEventListener(t, n, !1))
            }

            function i(e, t) {
                var n, o, l = void 0, a = !1;
                if (e) {
                    l = "<ul>";
                    for (var r = 0; r < e.length; r++) n = e[r].parent, o = t, n && o && "object" === (void 0 === n ? "undefined" : h(n)) && "object" === (void 0 === o ? "undefined" : h(o)) && n.id === o.id && (a = !0, l += '<li><div class="' + p.linkClass + " k-catelog-level-" + e[r].level + '" data-target="' + e[r].id + '">' + e[r].name + "</div>", l += i(e, e[r]), l += "</li>");
                    l += "</ul>"
                }
                return a ? l : ""
            }

            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function (e, t) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var n = Object(e), o = 1; o < arguments.length; o++) {
                        var l = arguments[o];
                        if (null != l) for (var a in l) Object.prototype.hasOwnProperty.call(l, a) && (n[a] = l[a])
                    }
                    return n
                }, writable: !0, configurable: !0
            });
            var p = Object.assign({}, {
                    linkClass: "k-catelog-link",
                    linkActiveClass: "k-catelog-link-active",
                    supplyTop: 0,
                    selector: ["h1", "h2", "h3", "h4", "h5", "h6"],
                    active: null
                }, e),
                o = this.contentEl = p.contentEl instanceof HTMLElement ? p.contentEl : document.getElementById(p.contentEl),
                v = p.catelogEl instanceof HTMLElement ? p.catelogEl : document.getElementById(p.catelogEl),
                l = o.querySelectorAll(p.selector.join()), a = t(l), r = !1;
            v.innerHTML = i(a, {id: -1});
            var c = "\n    .k-catelog-list > ul { position: relative; }    \n  ", m = document.createElement("style");

            function g(e) {
                var t, n = v.querySelectorAll("[data-target]");
                t = n, n = Array.prototype.slice.call(t);
                for (var o, l, a, r, i = null, c = void 0, s = 0; s < n.length; s++) if (c = n[s], r = "target", ((a = c).dataset ? a.dataset[r] : a.getAttribute("data-" + r)) === e) {
                    o = c, l = p.linkActiveClass, f(o, l) || (o.className += " " + l);
                    var u = y(i = c, v);
                    v.scrollTop = u - v.offsetHeight / 2
                } else d(c, p.linkActiveClass);
                "function" == typeof p.active && p.active.call(this, i)
            }

            function y(e) {
                for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, n = e.offsetTop; (e = e.offsetParent) && t !== e;) n += e.offsetTop;
                return n
            }

            m.type = "text/css", m.styleSheet ? m.styleSheet.cssText = c : m.innerHTML = c, document.getElementsByTagName("head")[0].appendChild(m), n(v, "click", function (e) {
                var t = (e.target || e.srcElement).getAttribute("data-target");
                if (t) {
                    var n = document.getElementById(t);
                    r = !0;
                    var o = y(n);
                    window.scrollTo(0, o - p.supplyTop), g(t)
                }
            }), n(window, "scroll", function (e) {
                if (!r) {
                    for (var t = (document.documentElement.scrollTop || document.body.scrollTop) + p.supplyTop, n = null, o = l.length - 1; 0 <= o; o--) if (y(l[o]) <= t) {
                        n = l[o];
                        break
                    }
                    g(n ? n.id : null)
                }
                r = !1
            }), this.rebuild = function () {
                var e = t(l = o.querySelectorAll(p.selector.join()));
                v.innerHTML = i(e, {id: -1})
            }
        });
        var katelogIns = new katelog({
            contentEl: 'k-catelog',
            catelogEl: 'catelog-list',
            linkClass: 'k-catelog-link',
            linkActiveClass: 'k-catelog-link-active',
            selector: ['h2', 'h3'],
            supplyTop: 20,
            active: function (el) {
            }
        })
    })();
    //QQ联系
    (function () {
        $("footer:eq(0)").after("<div style='position: fixed;right: 10px;bottom: 20px;'><a target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin=973927314&site=qq&menu=yes'><img border='0' src='/collection/image/common/communication.jpg' alt='点此交谈' title='点此交谈'/></a><div style='text-align: center;cursor:pointer;background-color: rgba(33, 150, 243, 0.53);font-weight:900;' onclick='$(this).parent().css(\"display\",\"none\");'>关闭</div></div>");
    }());
    //圆角背景
    (function () {
        //使body与窗口高度相同（防止html背景色全漏出来太难看）
        window.onload = function () {
            if ($("body:eq(0)").height() < $(window).height()) {
                $("body:eq(0)").height($(window).height());
            }
        };
        if ($(window).width() > 1200) {
            $("html:eq(0)").css("background-color", "rgba(33, 150, 243, 0.53)");
            $("body:eq(0)").css("border-top-left-radius", "100px");
            $("body:eq(0)").css("border-top-right-radius", "100px");
        }
    })();
});




