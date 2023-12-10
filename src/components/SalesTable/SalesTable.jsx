import React from 'react'

export const SalesTable = ({userSales}) => {
  return (
    <div className="mt-4">
    <h2>Ventas del Usuario</h2>
    {userSales.length > 0 ? (
        <table className="table">
            <thead>
                <tr>
                    <th>ID Venta</th>
                    <th>Fecha</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Estado</th>
                   
                </tr>
            </thead>
            <tbody>
                {userSales.map((sale) => (
                    <tr key={sale.id}>
                        <td>{sale.id}</td>
                        <td>{sale.date}</td>
                        <td>{sale.address}</td>
                        <td>{sale.phone}</td>
                        <td>{sale.status}</td>
                       
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>No hay ventas para mostrar.</p>
    )}
    </div>
  )
}
