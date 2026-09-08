P1.1 - Deteccion de violaciones SOLID

1. I - Interface -> IEmpleadoDeFarmacia y Cajero - Cajero esta obligado a implementar metodos que no necesita ni puede realizar. Por eso termina lanzando NotSupportedException.

2. O - Ocp -> GestorDePedidos.ProcesarPedido() - El metodo usa un switch para decidir el descuento segun el tipo de cliente. Si aparece un nuevo tipo de cliente, hay que modificar este metodo.

3. D - Dip -> GestorDePedidos.ProcesarPedido() - GestorDePedidos crea directamente BaseDeDatosMySql y CorreoSmtp. Asi depende de clases concretas en vez de depender de contratos.

4. S - Srp -> GestorDePedidos.ProcesarPedid - El metodo hace varias tareas: calcula el descuento, guarda el pedido, muestra el comprobante y envia el correo. Tiene varias razones diferentes para cambiar.

