define(["jquery"], function ($) {

	var dlg = {

		backBlock: function () {
			var background = $("<div />")
				.addClass("backBlock")
				.width($(document).width())
				.height($(document).height())
				.attr("id", "backBlock")
				.appendTo("body");
		},

		backUnblock: function () {
			$("body").find("#backBlock").remove();
		},

		position: function (wnd) {

			var top = ($(window).height() / 2) - (wnd.height() / 1.5);
			var left = ($(window).width() / 2) - (wnd.width() / 2);

			wnd.css({
				top: top + "px",
				left: left + "px"
			});
		},

		question: function (yesCallback, noCallback) {

			var back = this;
			var dlg = $("#dialog-question").show();

			back.position(dlg);

			back.backBlock();

			dlg.find(".btn-cancel-yes").click(function () {
				dlg.hide();
				back.backUnblock();
				yesCallback();
			});

			dlg.find(".btn-cancel-no").click(function () {
				dlg.hide();
				back.backUnblock();
				noCallback();
			});
		},

		confirm: function (yesCallback, noCallback) {

			var back = this;
			var dlg = $("#dialog-order-confirm").show();

			back.position(dlg);

			back.backBlock();

			dlg.find(".btn-order-yes").click(function () {
				dlg.hide();
				back.backUnblock();
				yesCallback();
			});

			dlg.find(".btn-order-no").click(function () {
				dlg.hide();
				back.backUnblock();
				noCallback();
			});
		},

		result: function () {

			var back = this;
			var dlg = $("#dialog-result").show();

			back.position(dlg);

			back.backBlock();

			dlg.find(".btn-result-ok").click(function () {
				dlg.hide();
				back.backUnblock();
			});
		}
	}

	return dlg;
});