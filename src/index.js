import { regiterUser } from './funcion'

// regiterUser()

/**
 * Esta variable almacena un nombre
 * @type {String}
 */
const nombre = 'jose'

/**
 * @type  {Array<number| String>}
 */
const amigos = ['1']



/**
 * @typedef {Object} usuario
 * @property {Number} id Este es el id del usuario
 * @property {String} nombre Es el nombre del usuario
 * @property {Number}  edad Edad del usuario
 */

/**
 * @type  {usuario}
 */
const usuario = {
  id: 1,
  nombre: 'jose',
  edad: 25
}

/**
 * Clase para Articulo
 * @class Articulo
 */
class Articulo {
  /**
   * Crear an instance of Articulo.
   * @constructor
   * @param {String} titulo titulo del articulo
   * @param {String} texto descripcion del articulo
   */
  constructor (titulo, texto) {
    this.titulo = titulo
    this.texto = texto
  }

  /**
   * BorrarArticulo
   * @static
   * @param {String} id el id del aritculo
   * @returns {boolean} retorna true si es correcto el proceso
   */
  static borrarArticulo (id) {
    // ...
    return true
  }
}

const dato  =new Articulo('Este es mi titulo', 'aasd')
