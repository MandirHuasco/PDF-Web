import StoreDatos from "./Store";
import dateFormat from "dateformat";

class Conection {
    async a_n(a, b){
        if (b === 'pr'){
            return new Promise( (resolve, reject) =>{
                StoreDatos.c_a('g_b', new WebSocket(a))
                StoreDatos.c_a('g_c', true)
                StoreDatos.a_c[0].g_b.onopen = () => {
                    StoreDatos.c_a('g_d', true)
                    resolve('WebSocket Client Connected. ')
                }
                //console.log(RapidStore.a_c[0].g_b)
                StoreDatos.a_c[0].g_b.onerror = (e)=> {
                    StoreDatos.c_a('g_c', false)
                    reject(e)
                }
                /*
                setTimeout( () =>{

                }, 500)
                */
            })
        }
    }
    a_o(a, b){
        // var a contiene info del error
        if (b ==='pr'){
            setTimeout( () =>{
                console.log('Coneccion perdida, reconectando.')
                this.a_n(StoreDatos.a_c[0].g_a, 'pr').then((b)=>{
                    console.log(b)
                }).catch((e)=>{
                    console.log('Reintentando')
                })
                StoreDatos.a_c[0].g_b.onclose = (e) => {
                    this.a_o(e, 'pr')
                }
            }, 10000)
        }
    }
    a_i(a){            //empty
        if(Array.isArray(a) && !a.length) {
            return true
        } else {
            return false
        }
    }
    baf(a, b){ //  validate actual marck
        let zz = this.bak(1, b) , ww = this.bak(0, 0)
        let xx = ww - dateFormat(ww, 'HH:MM:ss')
        if (a===1){
            return zz < xx ? '' : dateFormat(zz, 'yyyy-mm-dd HH:MM:ss')
        }
        if (a===2){
            return dateFormat(zz, 'HH:MM:ss')
        }
    }

    bak(a, b){ //datetime to gettime -- fecha a numeros
        return a===1? new Date(b).getTime() : new Date().getTime()
    }
    bal(a, b){ // diference between two hours
        if (a === 1){
            let yy = this.baf(1, b.in)!==''? this.bak(1, b.in): '', zz = this.baf(1, b.out)!==''? this.bak(1, b.out) : ''
            if (zz === ''){
                yy = 0
            }
            let aa = (zz - yy)/ 1000
            let ss = aa%60
            let bb = (aa - ss)/60
            let mm = bb%60
            let cc = (bb - mm)/60
            let hh = cc%24
            let dd = (cc - hh)/24
            console.log(b, yy, zz)
            return dd===0? hh : dd + hh

        }
        if (a ===2){
            let yy = this.baf(2, b.in)!==''? this.bak(1, b.in): '', zz = this.baf(2, b.out)!==''? this.bak(1, b.out) : ''
            if (zz === ''){
                yy = 0
            }
            let aa = (zz - yy)/ 1000
            let ss = aa%60
            let bb = (aa - ss)/60
            let mm = bb%60
            let cc = (bb - mm)/60
            let hh = cc%24
            let dd = (cc - hh)/24
            console.log(b, yy, zz)
            return dd===0? hh : dd + hh

        }
    }
    async a_q(a, b, c) {
        if (a===1){
            try {
                StoreDatos.a_c[0].g_b.send(JSON.stringify({
                    event         : 'CLIENT_LOGGIN',
                    payload     : {
                        user            : '',
                        pass            : '',
                        dni                : '41126608'

                    },
                    app            : 'GlobalVision',
                    token        : 'kkjsd8fi198sd8f7124509df0gdajasgda83936598wj'
                }))
            } catch (e){
                console.log(e)
            }
            Promise.resolve().then(

                StoreDatos.a_c[0].g_b.onmessage = (e) => {
                    if (e === undefined) return //manejar este envento vacio

                    let oo = JSON.parse(e.data)

                    if( oo.event === 'CLIENT_LOGGIN' && oo.status === true){
                        StoreDatos.b_f(oo.data)
                        //console.log(StoreDatos.a_z[0].g_o)
                    }
                }
            )
        }
        if (a===2) {
            //console.log(a, 'ONLINE')
            StoreDatos.c_a('e_t', [b[0],b[1]])
            //console.log(StoreDatos.a_c[0].e_t + "DATE")

            if (StoreDatos.a_c[0].c_k === true){
                StoreDatos.c_a('c_k', false)
                try {
                    StoreDatos.a_c[0].g_b.send(JSON.stringify({
                        event         : 'USER_GET_DATA',
                        payload     : {
                            in                    : b[0],
                            out                    : b[1],
                            Id_user                : 2,
                            Id_company             : 15,
                            Id_divitions        : 0,
                            Id_user_services    : '', //StoreDatos.a_m.Id_user_services,
                            User_zone            : -5
                        },
                        app            :  StoreDatos.a_c[0].d_c,
                        token        : 'kkjsd8fi198sd8f7124509df0gdajasgda83936598wj'
                    }))
                } catch (e){
                    console.log(e)
                }
                Promise.resolve().then(

                    StoreDatos.a_c[0].g_b.onmessage = (e) => {
                        if (e === undefined) return //manejar este envento vacio

                        let xx = JSON.parse(e.data)

                        if( xx.event === 'USER_GET_DATA' && xx.status === true){
                            StoreDatos.b_e(xx.data)
                            StoreDatos.z_a('g_o', true)
                            //console.log(StoreDatos.a_z[0].g_o)
                        }
                        if( xx.event === 'USER_GET_DATA' && xx.status === false){
                            StoreDatos.z_a('g_o', false)
                            //console.log(StoreDatos.a_z[0].g_o)
                        }
                    }
                )
            }
        }
    }
}
export default new Conection();