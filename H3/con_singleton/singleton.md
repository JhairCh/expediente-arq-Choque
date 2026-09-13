Singleton
en este caso no aplicaria Singleton ya que el caso de Taller Tecnico no se identifica una clase que deba tener obligatoriamente una unica instancia durante la ejecucion del sistema.

Las clases principales que tenemos como Cliente, Tecnico, Equipo, OrdenTrabajo y Asignacion pueden tener multiples instancias porque estos representan elementos diferentes del negocio.

Asi que se considera adecuado mantener las clases independientes y permitir que existan tantas instancias como requiera el taller.