import { Injectable } from '@angular/core';
import 'modernizr';

@Injectable()
class LocalStorageService {
    /** Verifica si esta habilitado el almacenamiento local de usuario */
    isEnabled(): boolean {
        let result = Modernizr.localstorage;
        if (!result) console.error('LocalStorage no está habilitado');
        return result;
    }

    /** Agrega un elemento al localStorage. Devuelve el objeto ingresado, caso contrario null */
    add(key: string, item: any): any {
        try {
            localStorage.setItem(key, JSON.stringify(item));
            return item;
        } catch (error) {
            return null;
        }
    }

    /** Quita un elemento del localStorage. Devuelve el elemento eliminado */
    remove(key: string): any {
        try {
            let item = localStorage.getItem(key); 
            if (item) {
                localStorage.removeItem(key);
                return JSON.parse(item);
            } else return null;
        } catch (error) {
            return null;
        }
    }

    /** Devuelve un elemento especifico del localStorage */
    getItem(key: string): any {
        try {
            let item = localStorage.getItem(key);
            if (item) return JSON.parse(item);
            else return null;
        } catch (error) {
            return null;
        }
    }

    /** Devuelve un arreglo con todos los objetos del localStorage */
    getAll(): any {
        let result = [];
        try {
            for(let key in localStorage) {
                result.push(JSON.parse(localStorage[key]));
            }
            return result;
        } catch (error) {
            return null;
        }
    }
}