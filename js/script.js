
        // Словарь для транслитерации
        const translitMap = {
            "Москва": "Moskwa",
            "Макарова": "Makarova",
            "Елизавета": "Elizaveta",
            "Михайловна": "Mickhailovna",
            "Ж": "ZH",
            "г. Москва": "g. Moskva",
            "Выдан ОУФС РФ по Московской области": "OUFMS RF po Moskovskoi oblasti",
            "25.12.1988": "25.12.1988",
            "355-087": "355-087",
            "16.12.2005": "16.12.2005"
        };

        let isTransliterated = false; // Переменная для отслеживания состояния

        function toggleTransliteration() {
            const elements = document.querySelectorAll('.pass-top-block h3, .pass-bottom-block h3');

            elements.forEach(element => {
                if (!element.hasAttribute('data-original')) {


                    // Сохранили оригинальный текст в атрибут data-original
                    element.setAttribute('data-original', element.innerText);
                }

                // Получили оригинальный текст и транслитерированный
                const originalText = element.getAttribute('data-original');
                const transliteratedText = translitMap[originalText] || originalText;

                // Переключил текст в зависимости от состояния
                element.innerText = isTransliterated ? originalText : transliteratedText;
            });

            // Меняю состояние переключателя
            isTransliterated = !isTransliterated;
        }
        
        function getScreen() {
            let text = document.getElementsByTagName("h3")[0].innerText
            
            // console.log(text);
        }