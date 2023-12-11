/* eslint-disable react/prop-types */
export const OrderDetail = ({sale}) => {
 
  const total = sale.itemList.reduce((acc, item) => acc + item.amount * item.product.price, 0);

  return (
    <div>
      <p>
        <strong>ID de la orden:</strong> {sale.id}
      </p>
      <p>
        <strong>Teléfono de contacto:</strong> {sale.phone}
      </p>
      <p>
        <strong>Dirección de entrega:</strong> {sale.address}
      </p>
      <p>
        <strong>Productos:</strong>
      </p>
      <ul>
        {sale.itemList.map((item) => (
          <li key={item.id}>
            {item.product.name} - ${item.product.price} - {item.amount} unidades
          </li>
        ))}
      </ul>
      <p>
        <strong>Total:</strong> ${total}
      </p>
      <p>
        <strong>Estado:</strong> {sale.status}
      </p>
    </div>
    
  )
}
