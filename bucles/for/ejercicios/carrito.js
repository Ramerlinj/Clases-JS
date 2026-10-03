const pedidos = [
  { cliente: "Sofía", productos: [{ precio: 50, cantidad: 1 }, { precio: 25, cantidad: 2 }] },
  { cliente: "Carlos", productos: [{ precio: 120, cantidad: 1 }, { precio: 10, cantidad: 3 }] },
  { cliente: "Lucía", productos: [{ precio: 40, cantidad: 2 }] }
];


function procesarPedidos (pedidos){
  let totalGeneral = 0;

  for (let i = 0; i < pedidos.length; i++){
    let totalCliente = 0;

    for ( const prod of pedidos[i].productos ){
      totalCliente += prod.precio * prod.cantidad
    }

    if ( i=== 0) totalCliente =  totalCliente - (totalCliente * 0.10)  ;

    document.write(`${pedidos[i].cliente}: $${totalCliente.toFixed(2)} <br/>`);
    totalGeneral += totalCliente;
  }
    document.write(`Total tienda: $${totalGeneral.toFixed(2)} <br/>`);

  }

procesarPedidos(pedidos)
