# Detecciones SOLID

## 1. SRP — GestorDePedidos

La clase GestorDePedidos, ese tiene el metodo ProcesarPedido(), que muestra varias responsabilidades: calcular precios, guardar el pedido, generar el vale y enviar el correo.
Lo cual nos dice que tiene multiples razones para cambiar.

## 2. OCP — switch de tipoMenu

El switch de tipoMenu obliga a modificar el codigo existente cada vez que se agrega un nuevo tipo de menu. 
Esto viola OCP porque el comportamiento no puede extenderse sin modificar el codigo existente.

## 3. DIP — dependencias concretas

GestorDePedidos crea directamente las clases BaseDeDatosComedor y CorreoUniversitario mediante new. 
Por eso depende de implementaciones concretas en lugar de depender de abstracciones.

