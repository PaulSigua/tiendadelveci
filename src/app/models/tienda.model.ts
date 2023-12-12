export class Tienda {
    id?: string;
    description?: string;
    nameProduct?: string;
    price?: number;
    urlImage?: string;
}

export class Mensaje {
    id?: string;
    name?: string;
    email?: string;
    message?: string;
}

export class Cuenta {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
}

export class DatosPersonales {
    id?: string;
    idClient?: string;
    name?: string;
    email?: string;
    password?: string;
}

export class DatosTarjeta {
    id?: string;
    nameCard?: string;
    numCard?: number;
    dateBirth?: Date;
    cvv?: number;
}