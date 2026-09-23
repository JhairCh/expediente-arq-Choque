// Refactor: Jhair Anderson Choque

namespace Integradora.Comedor;

//Esta interfaz es una abstraccion para guardar pedidos
public interface IRepositorioPedido
{
    void GuardarPedido(
        string estudiante,
        string menu,
        int cantidad,
        decimal total);
}

//esta clase es una implementacion de IRepositorioPedido lo que hara que simule que se guarda en una base de datos
public class BaseDeDatosComedor : IRepositorioPedido
{
    public void GuardarPedido(
        string estudiante,
        string menu,
        int cantidad,
        decimal total)
    {
        Console.WriteLine(
            $"[BD] INSERT INTO pedidos VALUES ('{estudiante}', '{menu}', {cantidad}, {total})");
    }
}

public class GestorDePedidos
{
    //El gestor de pedidso debende de la abstraccion de IRepositorioPedido
    private readonly IRepositorioPedido repositorio;

    //se recibe la implementaciond esde afuera por el constructor
    public GestorDePedidos(IRepositorioPedido repositorio)
    {
        this.repositorio = repositorio;
    }

    public void ProcesarPedido(
        string estudiante,
        string tipoMenu,
        int cantidad)
    {
        decimal precioBase;

        switch (tipoMenu)
        {
            case "estandar":
                precioBase = 12;
                break;

            case "vegetariano":
                precioBase = 14;
                break;

            case "beca":
                precioBase = 5;
                break;

            default:
                precioBase = 12;
                break;
        }

        decimal total = precioBase * cantidad;

        repositorio.GuardarPedido(
            estudiante,
            tipoMenu,
            cantidad,
            total);

        Console.WriteLine("----- VALE DE COMEDOR -----");
        Console.WriteLine(
            $"{estudiante}: {cantidad} x menú {tipoMenu}");
        Console.WriteLine(
            $"TOTAL: {total:0.00} Bs");

        var correo = new CorreoUniversitario();

        correo.Enviar(
            $"Pedido registrado: {cantidad} x {tipoMenu}, {estudiante}");
    }
}

public class CorreoUniversitario
{
    public void Enviar(string mensaje)
    {
        Console.WriteLine($"[CORREO] {mensaje}");
    }
}

public static class Demo
{
    public static void Correr()
    {
        IRepositorioPedido repositorio =
            new BaseDeDatosComedor();

        var gestor = new GestorDePedidos(repositorio);

        gestor.ProcesarPedido(
            "Noelia",
            "vegetariano",
            2);
    }
}