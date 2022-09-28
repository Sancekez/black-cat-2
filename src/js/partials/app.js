
var uikit = {
	lg: '1450',
	md: '1200',
	sm: '992',
	xs: '640',
	xxs: '480',
	ww: function () {
		return $(window).width();
	},

	wh: function () {
		return $(window).height();
	},

	mask: function () {
		$("input[type='tel']").mask('+7 (999) 999-9999', { placeholder: '+7 (___) ___-____' });
	},

	niceSelect: function () {
		$('select').niceSelect();
		// $('.nice-select .list').mCustomScrollbar();
	},

	/* niceSelectUpdate: function () {
		$('select').niceSelect('update');
		$('.nice-select .list').mCustomScrollbar();
	}, */

	validation: function () {
		var
			classValidate = 'is-validate',
			classParent = '.form-group',
			classError = 'is-error';
		function error(el) {
			$(el)
				.addClass(classError)
				.removeClass(classValidate)
				.closest(classParent)
				.addClass(classError)
				.removeClass(classValidate);
		}
		function validate(el) {
			$(el)
				.removeClass(classError)
				.addClass(classValidate)
				.closest(classParent)
				.removeClass(classError)
				.addClass(classValidate);
		}
		function reset(el) {
			$(el)
				.removeClass(classValidate + ' ' + classError)
				.closest(classParent)
				.removeClass(classError)
				.removeClass(classValidate + ' ' + classError)
		}
		$('.form-control').focus(function () {
			reset($(this))
		});
		$('select').change(function () {
			reset($(this))
		});
		$('input[type="checkbox"], input[type="radio"]').change(function () {
			reset($(this))
		});
		function checkInput(el) {
			var $form = $(el);

			$form.find('.is-error').removeClass('is-error');//.each(function(){
			//$(this).removeClass('is-error');
			//console.log("!"+$form.find('.is-error').length+"!");
			//});

			$form.find('select.js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=tel].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=email].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=text].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=password].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			if ($('.js-pass1', $form).length != 0) {
				var pass01 = $form.find('.js-pass1').val();
				var pass02 = $form.find('.js-pass2').val();
				if (pass01 == pass02) {
					validate($('.js-pass1, .js-pass2', $form));
				} else {
					error($('.js-pass1, .js-pass2', $form));
				}
			}
			$form.find('textarea.js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=email]').each(function () {
				var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
				var $this = $(this);
				if ($this.hasClass('js-required')) {
					if (regexp.test($this.val())) {
						validate($this);
					} else {
						error($this);
					}
				} else {
					if ($this.val() != '') {
						if (regexp.test($this.val())) {
							validate($this);
						} else {
							error($this);
						}
					} else {
						reset($this)
					}
				}
			});

			$form.find('input[type=checkbox].js-required').each(function () {

				if ($(this).is(':checked')) {
					validate($(this));
				} else {
					error($(this));
					//$(this).addClass('is-error');
				}
			});

			var radios = [];
			$form.find('input[type=radio]:required').each(function () {
				var name = $(this).attr('name');

				if (radios.indexOf(name) == -1) {

					radios.push(name);
					var result = false;
					$form.find('input[name=' + name + '].js-required').each(function () {

						if ($(this).is(':checked')) {
							result = true;
						}
					});
					if (result == true) {
						validate($(this));
						return false;
					} else {
						//console.log(radios);
						$form.find('input[name=' + name + '].js-required').addClass(classError);
						error($(this));
					}
				}
			});
		}

		$('.js-submit').click(function () {
			var $form = $(this).closest('form');
			checkInput($form);
			var errors = $form.find('.is-error:visible').length;
			//console.log(errors);
			if (errors) {
				return false;
			} else if ($(this).data('href') != "" && $(this).data('href') != undefined) {

				// Открытие попапа после отправки формы.

				if ($(this).attr("href") != "" && $(this).attr("href") != undefined) {
					var href = $(this).attr("href");
				} else {
					var href = $(this).data("href");
				}
				if ($(this).data('media') == "lg" && uikit.ww() <= uikit.md) {
					return false;
				}

				var bodyWidth = $('body').width();

				$("body, html").addClass("overflow");

				if (bodyWidth - uikit.ww() < 0) {
					//$('body').css('padding-right',((bodyWidth - uikit.ww())* -1)+'px');
				}

				//$(".mobile-menu").removeClass("active");

				$(".popup").removeClass("active");
				$(href).addClass("active");

				return false;
			}
		});
	},
	// mainMenu: function() {
	// 	// $("").click((e)=>{
	// 	// 	let target = e.target;
	// 	// 	if(target.classList.contains(".is-active")) {
	// 	// 		target.classList.remove("is-active")
	// 	// 	} else {
	// 	// 		target.classList.add("is-active")
	// 	// 	}
	// 	// });

	// 	let location = window.location.href;
	// 	let cur_url = '/' + location.split('/').pop();
	
	// 	$('.menu-block .menu-block__item').each(function () {
	// 		 let link = $(this).find('a').attr('href');
	
	// 		 if (cur_url == link) {
	// 			  $(this).addClass('is-active');
	// 		 }
	// 	});
	// },
	calendar: function () {
		$(".calendar-js").each(function () {
			$(this).ionDatePicker({
				lang: "ru",
				sundayFirst: false,
				years: "2022 - 2050",
				format: "DD.MM.YYYY",
				hideArrows: true,
				disableLast: true,
				onClick: function (date) {
					$(".calendar-js").html("onClick: " + date);
				},
			});
		});
	},

	popups: function () {
		$(document).on("click", ".js-popup-show", function () {
			if ($(this).attr("href") != "" && $(this).attr("href") != undefined) {
				var href = $(this).attr("href");
			} else {
				var href = $(this).data("href");
			}
			if ($(this).data('media') == "lg" && uikit.ww() <= uikit.md) {
				return false;
			}

			var bodyWidth = $('body').width();

			$("body, html").addClass("overflow");

			if (bodyWidth - uikit.ww() < 0) {
				//$('body').css('padding-right',((bodyWidth - uikit.ww())* -1)+'px');
			}

			//$(".mobile-menu").removeClass("active");

			$(".popup").removeClass("is-active");
			$(href).addClass("is-active");

			return false;
		});

		$(".js-popup-hide").click(function () {
			$(".popup").removeClass("is-active");
			$("body, html").css('padding-right', 0).removeClass("overflow");
			return false;
		});
	},

	lazy: function () {

		function logElementEvent(eventName, element) {
		}
		var callback_enter = function (element) {
		};
		var callback_exit = function (element) {
		};
		var callback_loading = function (element) {
		};
		var callback_loaded = function (element) {
		};
		var callback_error = function (element) {
		};
		var callback_finish = function () {
		};
		var callback_cancel = function (element) {

		};

		var lazyLoadOb = new LazyLoad({
			class_applied: "lz-applied",
			class_loading: "lz-loading",
			class_loaded: "lz-loaded",
			class_error: "lz-error",
			class_entered: "lz-entered",
			class_exited: "lz-exited",
			// Assign the callbacks defined above
			callback_enter: callback_enter,
			callback_exit: callback_exit,
			callback_cancel: callback_cancel,
			callback_loading: callback_loading,
			callback_loaded: callback_loaded,
			callback_error: callback_error,
			callback_finish: callback_finish
		});
		lazyLoadOb.update();
	},

	sliders: function () {
		var ww = this.ww();
		var wh = this.wh();
		var lg = this.lg;
		var md = this.md;
		var sm = this.sm;
		var xs = this.xs;
		var xxs = this.xxs;

		if ($('.js-apparts-slider').length) {
			$('.js-apparts-slider').each(function () {
				var $this = $(this);

				$this.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
					arrows: true,
					dots: false,
					infinite: true,
					adaptiveHeight: true,
					autoplay: false,
					autoplaySpeed: 2000,
					lazyLoad: 'progressive',
					prevArrow: '<a href="#" class="appart-block__prev slick-arrow slick-prev" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',
					nextArrow: '<a href="#" class="appart-block__next slick-arrow slick-next" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',
					responsive: [
						{
							breakpoint: xs,
							settings: {
								arrows: false,
								dots: true,
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});

			});

			$('.js-team-slider-prev').click(function () {
				$('.js-team-slider').slick('slickPrev');
				return false;
			});
			$('.js-team-slider-next').click(function () {
				$('.js-team-slider').slick('slickNext');
				return false;
			});

		}

		if ($('.js-team-slider').length) {
			$('.js-team-slider').each(function () {
				var $this = $(this);

				$this.slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
					arrows: true,
					dots: false,
					infinite: true,
					adaptiveHeight: true,
					autoplay: false,
					autoplaySpeed: 2000,
					lazyLoad: 'progressive',
					prevArrow: '<a href="#" class="team-section__prev slick-arrow slick-prev" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',
					nextArrow: '<a href="#" class="team-section__next slick-arrow slick-next" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',
					responsive: [
						{
							breakpoint: md,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: sm,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: xs,
							settings: {
								arrows: false,
								dots: true,
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});

			});

			$('.js-team-slider-prev').click(function () {
				$('.js-team-slider').slick('slickPrev');
				return false;
			});
			$('.js-team-slider-next').click(function () {
				$('.js-team-slider').slick('slickNext');
				return false;
			});

		}


		if ($('.js-review-slider').length) {
			$('.js-review-slider').each(function () {
				var $this = $(this);

				$this.slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: false,
					arrows: true,
					dots: false,
					infinite: true,
					adaptiveHeight: true,
					autoplay: false,
					autoplaySpeed: 2000,
					lazyLoad: 'progressive',
					prevArrow: '<a href="#" class="reviews-section__prev slick-arrow slick-prev" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',
					nextArrow: '<a href="#" class="reviews-section__next slick-arrow slick-next" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',
					responsive: [
						{
							breakpoint: md,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: sm,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: xs,
							settings: {
								arrows: false,
								dots: true,
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});

			});

			$('.js-comments-slider-prev').click(function () {
				$('.js-comments-slider').slick('slickPrev');
				return false;
			});
			$('.js-comments-slider-next').click(function () {
				$('.js-comments-slider').slick('slickNext');
				return false;
			});

		}

	},

	fancybox: function () {
		$(".js-fancybox, .fancybox").fancybox({
			// Options will go here
			iframe: {
				preload: false
			}
		});
	},

	/* accardion: function () {
		$('.js-accardion-toggle').click(function () {
			$(this).toggleClass('is-active').next().toggleClass('is-active');
			return false;
		});
	}, */

	mobile: function () {

		$('.js-menu-toggle').click(function () {
			$(this).toggleClass('is-active');
			$('body').toggleClass('overflow');
			$('html').toggleClass('overflow');

			$('.js-main-menu').toggleClass('is-active');

			$(document).mouseup(function (e) { // событие клика по веб-документу
				var div = $('.js-menu-toggle').parent(); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					div.removeClass('is-active'); // скрываем его
					$('.js-main-menu').removeClass('is-active'); // скрываем его
					$('body').removeClass('overflow');
				}
			});

			return false;
		});

	},

	form: function () {
		/* $('.js-btn-send-zamer').click(function () {
			$('input#subject').val('ВЫЗВОВ ЗАМЕРЩИКА');
		});
		$('.js-btn-send-call').click(function () {
			$('input#subject').val('Заказ обратного звонка');
		}); */

		$('.js-contact-form').submit(function () {
			var $form = $(this);
			var url = $(this).attr('action');
			console.log($form.serialize());
			$.ajax({
				url: url,
				dataType: "json",
				type: "POST",
				data: $form.serialize(),
				success: function (response) {

					if (response.result == 'ok') {

						/* var bodyWidth = $('body').width();

						$("body, html").addClass("overflow");

						if (bodyWidth - uikit.ww() < 0) {
							//$('body').css('padding-right',((bodyWidth - uikit.ww())* -1)+'px');
						}

						//$(".mobile-menu").removeClass("active");
						 */

						$("body, html").addClass("overflow");
						$(".popup").removeClass("is-active");
						$("#popup-message").addClass("is-active");

						//$form.hide().next('.js-form-finish').addClass('is-active');
					} else {
						alert(response.data);
					}
				}
			});

			return false;
		});
	},

	scrollTo: function () {
		$(".js-scroll-to").click(function () {
			var href = $(this).attr("href");
			$('html, body').animate({ scrollTop: $(href).offset().top }, 400);
			return false;
		});
	},

	mainInit: function () {

		this.sliders();

		this.lazy();
		this.validation();

		this.calendar();
		// this.tabs();
		// this.mainMenu();

		this.niceSelect();

		this.fancybox();
		this.popups();
		this.mask();

		this.mobile();

		this.scrollTo();

		this.form();

	}
};
$(document).ready(function () {

	uikit.mainInit();

	// Разворот текстового описания
	/* $(".js-more-text").click(function () {
		if ($(this).hasClass('hide') == false) {
			$(this).addClass('hide');
			$(this).parent().parent().find(".js-wrap-text").removeClass("d-none");
		} else {
			$(this).removeClass('hide');
			$(this).parent().parent().find(".js-wrap-text").addClass("d-none");
		}
		return false;
	}); */

});
var clrTimeOut;
$(window).on('load', function (e) {
	clearTimeout(clrTimeOut);
	clrTimeOut = setTimeout(function () {

	}, 200);
});

$(window).resize(function () {
	clearTimeout(clrTimeOut);
	clrTimeOut = setTimeout(function () {

	}, 200);

});

$(window).scroll(function () {
	//uikit.headerFixed();
});
