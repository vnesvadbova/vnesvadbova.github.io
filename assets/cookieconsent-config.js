CookieConsent.run({
    onConsentChange: function (cookieConsent) {
        var adConsent = cookieConsent.allowedCategory('marketing') ? 'granted' : 'denied';
        var analyticsConsent = cookieConsent.allowedCategory('analytics') ? 'granted' : 'denied';
        var adPersonalizationConsent = cookieConsent.allowedCategory('marketing') ? 'granted' : 'denied';
        var adUserDataConsent = cookieConsent.allowedCategory('marketing') ? 'granted' : 'denied';

        // Dynamically update consent for Google tags
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('consent', 'update', {
            'ad_storage': adConsent,
            'analytics_storage': analyticsConsent,
            'ad_personalization': adPersonalizationConsent,
            'ad_user_data': adUserDataConsent,
        });
    },
    guiOptions: {
        consentModal: {
            layout: "cloud inline",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true,
            wanted: true // Sets necessary cookies to be accepted by default
        },
        analytics: {
            wanted: false // Initial state set to not wanted, requiring user action to enable
        },
        marketing: {
            wanted: false // Initial state set to not wanted, requiring user action to enable
        }
    },
    language: {
        default: "en",
        autoDetect: true, // Changed to true for automatic detection
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "Like your EV, our website also runs better with a bit of energy! 🍪 We use cookies to supercharge your experience, just like our charging stations do for your ride. By continuing, you're giving us the 'green light' for cookies. Happy browsing!",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: ""
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Welcome to easyCharging! 🚗 Just like a well-tuned EV, our website uses cookies to run smoothly. We've got the essentials for functionality, plus some extras for Google Analytics and marketing, helping us gear up for a better user experience. By continuing, you're agreeing to our use of these cookies. Drive through our website with ease!"
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "We use essential cookies to ensure our website functions properly and securely. By using our site, you agree to our use of these necessary cookies. They cannot be switched off in our systems.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Our website uses analytics cookies to understand how visitors interact with our site and to enhance your experience. By continuing to browse, you consent to our use of analytics cookies.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Advertisement Cookies",
                            description: "To provide you with relevant and personalized advertising, we use advertisement cookies. By continuing on our site, you agree to our use of these cookies to tailor content and ads to your interests.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            },
            de: {
                consentModal: {
                    title: "Hallo Reisende, es ist Kekszeit!",
                    description: "Wie Ihr E-Auto braucht auch unsere Webseite etwas Energie! 🍪 Wir verwenden Cookies, um Ihr Erlebnis aufzuladen, genau wie unsere Ladestationen es mit Ihrem Fahrzeug tun. Mit Ihrer Fortsetzung geben Sie uns das 'grüne Licht' für Cookies. Viel Spaß beim Surfen!",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: ""
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    closeIconLabel: "Modal schließen",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Willkommen bei easyCharging! 🚗 Wie ein gut abgestimmtes Elektroauto verwendet unsere Webseite Cookies, um reibungslos zu laufen. Wir nutzen die notwendigen Cookies für die Funktionalität, sowie zusätzliche für Google Analytics und Marketing, um Ihr Nutzererlebnis zu verbessern. Mit Ihrem Fortfahren stimmen Sie der Verwendung dieser Cookies zu. Surfen Sie mühelos auf unserer Webseite!"
                        },
                        {
                            title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Wir verwenden notwendige Cookies, um unsere Website ordnungsgemäß und sicher funktionieren zu lassen. Durch die Nutzung unserer Website stimmen Sie der Verwendung dieser notwendigen Cookies zu. Sie können in unseren Systemen nicht deaktiviert werden.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytische Cookies",
                            description: "Unsere Website verwendet Analyse-Cookies, um zu verstehen, wie Besucher mit unserer Seite interagieren und um Ihre Erfahrung zu verbessern. Durch das Weitersurfen stimmen Sie der Verwendung von Analyse-Cookies zu.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Werbung Cookies",
                            description: "Um Ihnen relevante und personalisierte Werbung zu bieten, verwenden wir Werbe-Cookies. Durch das Weiterverwenden unserer Website stimmen Sie der Verwendung dieser Cookies zu, um Inhalte und Anzeigen auf Ihre Interessen zuzuschneiden.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            },
            es: {
                consentModal: {
                    title: "Hola viajero, es la hora de las galletas!",
                    description: "¡Como tu EV, nuestro sitio web también necesita energía! 🍪 Usamos cookies para\npotenciar tu experiencia, al igual que nuestras estaciones de carga con tu coche. Al continuar, nos das la 'luz verde' para usar cookies. ¡Disfruta navegando!",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: ""
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    closeIconLabel: "Cerrar modal",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "¡Bienvenido a easyCharging! 🚗 Al igual que un VE bien afinado, nuestro sitio web utiliza cookies para funcionar sin problemas. Tenemos cookies estrictamente necesarias para la funcionalidad, además de otras para Google Analytics y fines de marketing, ayudándonos a mejorar tu experiencia de usuario. Al continuar, estás aceptando el uso de estas cookies. ¡Navega con facilidad por nuestro sitio!"
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Utilizamos cookies estrictamente necesarias para que nuestro sitio web funcione correctamente y de manera segura. Al usar nuestro sitio, acepta el uso de estas cookies necesarias. No pueden desactivarse en nuestros sistemas.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analíticas",
                            description: "Nuestro sitio web utiliza cookies de análisis para entender cómo interactúan los visitantes con nuestro sitio y mejorar su experiencia. Al continuar navegando, usted acepta nuestro uso de cookies de análisis.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookies Publicitarias",
                            description: "Para proporcionarle publicidad relevante y personalizada, utilizamos cookies de publicidad. Al continuar en nuestro sitio, acepta el uso de estas cookies para personalizar contenido y anuncios según sus intereses.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            },
            fr: {
                consentModal: {
                    title: "Bonjour voyageur, c'est l'heure des cookies!",
                    description: "Comme votre VE, notre site a aussi besoin d'énergie ! 🍪 Nous utilisons des cookies pour booster votre expérience, tout comme nos stations de recharge pour votre voiture. En continuant, vous nous donnez le 'feu vert' pour les cookies. Bonne navigation !",
                    acceptAllBtn: "Accepter tout",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: ""
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    closeIconLabel: "Fermer la modale",
                    acceptAllBtn: "Accepter tout",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauver les préférences",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation de Cookies",
                            description: "Bienvenue chez easyCharging ! 🚗 Tout comme une voiture électrique bien réglée, notre site utilise des cookies pour fonctionner de manière optimale. Nous avons les cookies strictement nécessaires, ainsi que ceux pour Google Analytics et le marketing, afin d'améliorer votre expérience utilisateur. En continuant, vous acceptez l'utilisation de ces cookies. Naviguez facilement sur notre site !"
                        },
                        {
                            title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "Nous utilisons des cookies strictement nécessaires pour assurer le bon fonctionnement et la sécurité de notre site. En utilisant notre site, vous acceptez l'utilisation de ces cookies indispensables. Ils ne peuvent pas être désactivés dans nos systèmes.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analytiques",
                            description: "Notre site utilise des cookies d'analyse pour comprendre comment les visiteurs interagissent avec notre site et améliorer votre expérience. En continuant à naviguer, vous consentez à notre utilisation des cookies d'analyse.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Cookies Publicitaires",
                            description: "Pour vous fournir des publicités pertinentes et personnalisées, nous utilisons des cookies publicitaires. En continuant sur notre site, vous acceptez notre utilisation de ces cookies pour adapter le contenu et les publicités à vos intérêts.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            }
        }

    },
// Initial Consent State - Required for Compliance with Consent V2
    initialConsentState: {
        necessary: true,
        analytics: false,
        marketing: false
    }
});