# goit-js-hw-08-gallery

1) Создание и рендер разметки по массиву данных и предоставленному шаблону.
Переберать все картинки какие есть в массиве и для каждого - создать ли элемент, создать имг элемент, добавить его в ли, добавь ли в ул. Убедиться что все отображается в доме.

2) Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
Добавить ивент листенер на ul на клик. Вывести в консоль имг элемент по какому кликнули - выгрести его с ивента.

3) Открытие модального окна по клику на элементе галереи.
сделать img.lightbox__image видимым добавив (эдд или тогл) нужного класса.

4) Подмена значения атрибута src элемента img.lightbox__image.
Скорее всего тебе нужно выгребти срц из имейджа по какому кликнули (он у тебя будет в прошлом пункте) и проставить его для lightbox__image

5) Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
 - найти элемент галерее;
 - добавить ивент листенер на кнопку, в каком просто тогл нужного класса или ремув, какой скроет элемент галереи.

6) Очистка значения атрибута src элемента img.lightbox__image. (Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.)
В ивент листенере с прошлого пункта помимо того, чтоб изменять класс для элемента галереи, очисть еще срц.