export class VentaModel
{idventa : number;
numeroventa : number;
nombreventa : string;
titulo : string;
idusuario : number;
idcliente : number;
fechaventa:Date = new Date();
tipoventa : number;
idoficina : number;
subtotal : decimal(10,0);
descuento : decimal(10,0);
total : decimal(10,0);
idmoneda : number;
descripcion : string;
idestadoventa : number;
pagado : decimal(10,0);
cambio : decimal(10,0);
idusuarioresponsable : number;
idaperturacierrecaja : number;
constructor() {
this.idventa = 0;
this.numeroventa = 0;
this.nombreventa = '';
this.titulo = '';
this.idusuario = 0;
this.idcliente = 0;
this.tipoventa = 0;
this.idoficina = 0;
this.subtotal = decimal(10,0);
this.descuento = decimal(10,0);
this.total = decimal(10,0);
this.idmoneda = 0;
this.descripcion = '';
this.idestadoventa = 0;
this.pagado = decimal(10,0);
this.cambio = decimal(10,0);
this.idusuarioresponsable = 0;
this.idaperturacierrecaja = 0;
}}