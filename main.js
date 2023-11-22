
let cantidadProductos = 0;
let totalVentas = 0;
let arrayProductos = [
  { id: 1, nombre: 'Laptop', precio: 1200 },
  { id: 2, nombre: 'Teléfono', precio: 800 },
  { id: 3, nombre: 'Tablet', precio: 500 },
  { id: 4, nombre: 'Smartwatch', precio: 300 },
];


function agregarProducto(nombre, precio) {
  cantidadProductos++;
  arrayProductos.push({ id: cantidadProductos, nombre, precio });
}


let venta = {
  idVenta: 1,
  productosVendidos: [
    { idProducto: 1, cantidad: 2 },
    { idProducto: 3, cantidad: 1 },
  ],
};


function buscarProductoPorID(id) {
  return arrayProductos.find(producto => producto.id === id);
}

function filtrarProductosPorPrecio(maxPrecio) {
    return arrayProductos.filter(producto => producto.precio <= maxPrecio);
  }
  

  venta.productosVendidos.forEach(item => {
    let producto = buscarProductoPorID(item.idProducto);
    if (producto) {
      totalVentas += producto.precio * item.cantidad;
    }
  });
  
  console.log('Cantidad total de productos:', cantidadProductos);
  console.log('Total de ventas realizadas:', totalVentas);
  
  agregarProducto('Auriculares', 100); 
  let productoBuscado = buscarProductoPorID(2);
console.log('Producto buscado:', productoBuscado);

let productosFiltrados = filtrarProductosPorPrecio(600);
console.log('Productos con precio menor o igual a 600:', productosFiltrados);
  