import { useEffect } from "react";
import Cookies from "js-cookie";
const GoogleTranslate = () => {
	useEffect (() => {
		const url = new URL(window.location.href);
		const lang = url.searchParams.get("lang");

		if (lang) {
			Cookies.set("googtrans", `/en/${lang}`, { path: "/" });
			Cookie.set("googtrans", `/en/${lang}`);
			Cookies.set("googtrans", `/en/${lang}`, {
				path: "/",
				domain: window.location.host,
			});
		} else {
			Cookie.erase("googtrans");
			Cookies.remove("googtrans", { path: "/" });
		}

		const existingScript = document.getElementById("google-translate-script");
		if (existingScript) existingScript.remove();

		window.googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{ pageLanguage: "en" },
				"translate"
			);

			const langSelector = document.querySelector(".goog-te-combo");
			if (langSelector) {
				langSelector.addEventListener("change", function () {
					const selectedLang = langSelector.value;
					const newUrl =
						window.location.protocol +
						"//" +
						window.location.host +
						window.location.pathname +
						"?lang=" +
						selectedLang;
					window.history.pushState({ path: newUrl }, "", newUrl);
				});
			}
		};

		const script = document.createElement("script");
		script.id = "google-translate-script";
		script.src =
			"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			window.googleTranslateElementInit = undefined;
		};
	}, []);

	return (
		<div id="translate" className="mt-4 mb-4 p-4 bg-gray-100 rounded shadow">
			<p className="text-gray-700 text-sm mb-2">
				Select your language using the dropdown below:
			</p>
		</div>
	);
};

export default GoogleTranslate;