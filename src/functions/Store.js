import React from "react";
import {action, makeObservable, observable} from "mobx";

class StoreDatos {

    a_b = []																	//textos
    a_c = [{
        a_a: true,																//carga module
        a_b: false,																//loggin module
        a_c: false,																//module taquilla
        a_d: false,																//module reception
        a_e: false,																//barra
        a_f: false,																//admin
        a_i: true,                                                              //superadmin

        b_a: '',																//si es miembro o no
        b_b: '',																//id user
        b_c: 0,																	//number ticket offline

        c_a: '',											                    //var user loggin
        c_b: '',																//var user pass
        c_c: false,																//messages filter error
        c_d: '',                                                                //id_user
        c_e: '',                                                                //id_attender
        c_f: '',                                                                //id_business
        c_k: false,                                                             //date

        d_a: '',																//aux token key, api, ws
        d_b: '',																//aux service type
        d_c: 'GlobalVision',													//app name index db name
        d_d: true,		                                                        //llave online
        d_e: 'http://con.localhost',											//key
        d_f: 'http://apifa.traker.ga',											//api
        d_g: -5,																//api

        g_a: 'ws://ws.traker.ga:6950?App=GoTicket',						    //usanda
        g_b: '',																//var socket
        g_c: false,																//preconnect
        g_d: false,																//connected
        g_m: '',                                                                //extra...
        g_n: [],                                                                //extra...
        g_p: '',                                                                //extra...

        e_t: '',                                                                //date

    }]

    a_z = [{
        g_o: false,                                                                //extra...
    }]

    a_g = []
    a_h = []
    a_f = []																				//rooms
    a_m = []                                                                                //id_user
    a_n = []                                                                                //id_business
    a_o = []                                                                                //GET-data
    a_p = []                                                                                //GET-data-admin
    a_w = [{}]                                                                                //GET-data-business

    b_b = (a) => {
        this.a_b = a.q								//textos
        this.a_h = a.u								//numeros para botones
        this.a_i = a.v								//botones largos
        this.a_l = a.n								//configuracion cliente
    }

    b_e = (a) => {
        this.a_g = a.r
        this.a_f = a.q
        this.a_m = a.n
        this.a_n = a.s								//configuracion cliente_2
        this.a_p = a
    }

    b_f = (a) => {
        this.a_z = a.l
        this.a_w = a.n
    }

    c_a = (a, b) => { this.a_c[0][a] = b }

    z_a = (a, b) => { this.a_z[0][a] = b }

    increment(llave, val) {
        switch (llave) {
            case 1:
                this.increment(8)
                this.a_c[0].a_b = true
                this.a_c[0].e_a = this.a_b[2].Text
                this.a_c[0].e_c = ''
                this.a_c[0].e_d = 'di3'
                break;
            case 2:
                this.increment(8)
                this.a_c[0].a_c = true
                this.a_c[0].b_a = val
                this.a_c[0].e_c = 'gr_3x2_1p'
                this.a_c[0].e_d = 'di3'
                this.a_c[0].e_a = this.a_b[6].Text
                break;
            case 3:
                this.increment(8)
                this.a_c[0].a_d = true
                this.a_c[0].e_c = 'gr_3x2_1p'
                this.a_c[0].e_d = 'di3'
                this.a_c[0].e_a = this.a_b[2].Text
                break;
            case 4:
                this.increment(8)
                this.a_c[0].a_e = true
                this.a_c[0].e_c = 'po_re'
                this.a_c[0].e_d = 'di3'
                this.a_c[0].e_a = this.a_b[0].Text
                break;
            case 5:
                this.increment(8)
                this.a_c[0].a_f = true
                this.a_c[0].e_c = 'gr_3x2_1p'
                this.a_c[0].e_d = 'di3'
                this.a_c[0].e_a = this.a_b[0].Text
                break;
            case 6:
                this.a_c[0].a_c = false
                this.a_c[0].a_f = true
                this.a_c[0].e_c = 'gr_3x2_1p'
                this.a_c[0].e_d = 'di3'
                this.a_c[0].e_a = this.a_b[6].Text
                this.a_c[0].b_h = this.a_c[0].c_f
                this.a_c[0].c_f = ''
                this.a_c[0].c_g = ''
                break;

            case 7:
                this.a_c[0].a_b = true
                break;

            case 8:
                this.a_c[0].a_a = false
                this.a_c[0].a_b = false
                this.a_c[0].a_c = false
                this.a_c[0].a_d = false
                this.a_c[0].a_e = false
                this.a_c[0].a_f = false
                break;

            default:
                console.log("neutro")
                break;

        }

    }

    constructor() {
        makeObservable(this, {
            a_g: observable,
            a_f: observable,
            a_m: observable,
            a_n: observable,
            a_o: observable,
            a_p: observable,
            a_z: observable,
            a_w: observable,

            b_b: action,
            b_e: action,
            b_f: action,
            c_a: action,
        })
    }

}
export default new StoreDatos();
