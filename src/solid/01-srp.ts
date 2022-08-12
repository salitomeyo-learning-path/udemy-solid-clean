(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private masterEmail: string = 'email@email.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', emailList, template);
        }
    }

    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['correo@correo.com'], 'to-clients');
        }
    }

    class CartBloc {
        private itemsOnCart: Object[] = []

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    const cartBloc = new CartBloc();
    cartBloc.onAddToCart(10);


})();
