//Cura I:

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

