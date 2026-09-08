//Cura I:
namespace Parcial1.Farmacia.Antes;

public interface IEmpleadoDeFarmacia
{
    void RegistrarPedido(string medicamento, int cantidad);
    void AutorizarVentaControlada(string medicamento);
    void AjustarPrecio(string medicamento, decimal nuevoPrecio);
    void VerLibroDeControlados();
}

//cajero implementaba funciones que no necesitaba

public class Cajero : IEmpleadoDeFarmacia
{
    public void RegistrarPedido(string medicamento, int cantidad)
        => Console.WriteLine($"[CAJA] Pedido: {cantidad} x {medicamento}");

    public void AutorizarVentaControlada(string medicamento)
        => throw new NotSupportedException();

    public void AjustarPrecio(string medicamento, decimal nuevoPrecio)
        => throw new NotSupportedException();

    public void VerLibroDeControlados()
        => throw new NotSupportedException();
}

//este es el Empleado de Farmaceutica:
public class Farmaceutico : IEmpleadoDeFarmacia
{
    public void RegistrarPedido(string medicamento, int cantidad)
        => Console.WriteLine($"[FARM] Pedido: {cantidad} x {medicamento}");

    public void AutorizarVentaControlada(string medicamento)
        => Console.WriteLine($"[FARM] Venta controlada de {medicamento} autorizada");

    public void AjustarPrecio(string medicamento, decimal nuevoPrecio)
        => Console.WriteLine($"[FARM] {medicamento} ahora cuesta {nuevoPrecio:0.00} Bs");

    public void VerLibroDeControlados()
        => Console.WriteLine("[FARM] Libro de medicamentos controlados");
}


//Despues
//Refactor : Jhair Anderson Choque 

public interface IRegistradorDePedidos
{
    void RegistrarPedido(string medicamento, int cantidad);
}

public interface IAutorizadorDeVentaControlada
{
    void AutorizarVentaControlada(string medicamento);
}

public interface IAjustadorDePrecios
{
    void AjustarPrecio(string medicamento, decimal nuevoPrecio);
}

public interface ILectorLibroDeControlados
{
    void VerLibroDeControlados();
}


