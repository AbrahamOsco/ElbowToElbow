1. Normalize se supone que normaliza ( que en todos los navegadores mi aplicacion se vera igual)
   No heredo para cada tipo de tiqueta un estilo prefijado. 
1. En general solo hay un html y lo que cambia es el contenido. Link se hace una sola vez.
1. Aveces los desarolladores generan su propia normalizacion. 
   Link rel -> relaciona una hoja de estilo y el href: le pega a este archivo. 
1. DOM -> la parte que se ve. 
1. Si le pego al body tambien lo van a heredar los hijos. 
1. clase amarillo -> con '.amarillo' en el css 
    1. El id es efecto contrario toma un elemento particular. Una p puede tener id y clases 
    e incluso puede tener varias clases. 
    1. Si usas el id por ej: id='ParrafoPrincipal' en el css es con #. #ParrafoPrincipal.
1. Las propiedades van en forma de cascada de arriba hacia abajo. 
1. Si aplica los mismos valores a las misma propiedades h1, h2, h3. 
1. Para aplicar una propeidad a un span dentro de una p : se hace asi -> p span { color: red}
1. con p * a . Con esto aplica un efecto a una etiqueta de tipo a que no es hijo directo de p. 
    arranca a partir de los nietos de p. 
1. https://uniwebsidad.com/libros/css/capitulo-2/selectores-basicos pagina para selectores basicos. 
1. <p class = " especial destacado error  " </p> -> se puede poner muchas clases a la vez.  
1. https://flukeout.github.io/ acabar todo 
1. RGC combinacion del green red and blue. color (255, 0, 100), RGC para web, Hexa para impresiones? 
1. https://coolors.co/ff99c9-c1bddb-a2c7e5-58fcec-303a2b Paleta de colores.  
1. Hay que ir manejando todos los tamanio. Tenemos dos unidades de medidas. Unidades absolutas. 
    1cm , 1 mm, 1pt (0,35 mm) (pt = punto)  ,  1pc (12 pt) (pc = pica). 
    1. Unidades relativas. 
        Toman su valor respecto de algun parametro.
        1. px (pixel) muy usado, es relativo tiene un tamanio segun el dispositivo.  
        1. rem : toma como parametro el valor de tamanio de fuente de html. (etiqueta mas alta root).
            1 rem = 16px,      
        1. El em respecto del tamanio de la letra del elemento. 
        1. el %. EL body tenga un ancho del 50%. 
1. para iconos: fontawesom / iconify (para iconos)
1. cdjns lo necesario para usar fontawesome. 
1. para importar una imagne de fontawesome simplemente usar el SVG. 
   <svg .... >



