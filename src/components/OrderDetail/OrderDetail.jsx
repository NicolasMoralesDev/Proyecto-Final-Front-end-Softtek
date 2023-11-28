/* eslint-disable react/prop-types */
export const OrderDetail = ({order}) => {
  return (
    <div>
      <p>
        <strong>ID de la orden:</strong> {order.id}
      </p>
      <p>
        <strong>Teléfono de contacto:</strong> {order.phone}
      </p>
      <p>
        <strong>Dirección de entrega:</strong> {order.address}
      </p>
      <p>
        <strong>Productos:</strong>
      </p>
      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.quantity} unidades
          </li>
        ))}
      </ul>
      <p>
        <strong>Total:</strong> ${order.total}
      </p>
    </div>
  )
}
