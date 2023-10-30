# Clase 19 
1. id clave primaria de tipo int.  
1. El servidor de bd se encara que nunca se repita el id.
    1. Trigger restriciones que estan programadas.
1. Le explicitamos que uno columan de una tabla tiene una FK.
1. Jefe id clave foranea en la tabla Empleado. Clave foranea que apunta a la PK de la misma tabla. 
1. reion padre de departamento lo veo por la pata de gallo
1. DataBase forward enginner -> 
1. Crea primero region, porque luego el departamento va a apuntar a una region. 
1. AUTOINCRMENT -> hace que se autoincrmeente. 
1. Caso muchos a muchos departamento-region:
    1. Region:
        1 BUenos aires
        2 Mendoza
        3 Cordoba
    1. Departamento:
        10 ventas 
        11 administracion
    1. DepartamentoRegion:
        deptoid region_id
        10      1  
        10      3
    1. ACA Clave primaria son las 2, cada una es una fk de las otras tablas. 
1. DDL (Lenguaje de definicion de datos )
1. DML (manipulacion de datos )
1. describe nos muestra las estructuras si nos olvidamos los tipos de datos. 
1. Si el id es autoincrmenetal no le pono nada y solo le pongo el nombre. 
1. Insert la instruccion que nos permite insertar una fila en una tabla. 
1. udpate departamento 
    set regionID = 3 
    where id = 40; // Ojo si no pones el where aca entonces setearas todas las filas con la reionID = 3.
1. La instruccion delete permite eliminar una fila de una tabla. 
1. set sql_safe_udpates = 0; //  para deshabilitar  el safemode de work bench.
1. Join en SQL: 
    select departamento.nombre, region.nombre
    from departamento, region
    where departamento.regionId = region.id
1. https://sqlbolt.com/lesson/select_queries_introduction
1. case senstivie. 
1. Like para buscar strins. y hacer con: 
    1.  %Toy story% mostrar todas lsa peliculas
1.     


