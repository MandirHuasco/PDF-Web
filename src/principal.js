import React, {useState} from "react";

import StoreDatos from "./functions/Store";
import Conection from "./functions/Conection";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {observer} from "mobx-react";
import dateFormat from "dateformat";
import {Document, Image, Page, PDFViewer, Text, View, StyleSheet} from "@react-pdf/renderer";

//IMAGES

import img100 from "./img/head-pdf.png";

function Principal() {

    const [styleaId, setStyleaId] = useState("nav-bg-select");
    const [styleAId, setStyleAId] = useState("");

    const [stylebId, setStylebId] = useState("");
    const [styleBId, setStyleBId] = useState("div-off");

    const changeStyleAId = () => {
        console.log("menu-action-A");

        setStyleAId("div-on");
        setStyleaId("nav-bg-select");

        setStyleBId("div-off");
        setStylebId("");
    };

    const changeStyleBId = () => {
        console.log("menu-action-B");

        setStyleAId("div-off");
        setStyleaId("");

        setStyleBId("div-on");
        setStylebId("nav-bg-select");

    };

    //----DATA----

    const [TimeData, setTimeData]= useState('');
    const Horas = parseInt(dateFormat("Sat Jun 09 2007 8:00:00", "HH:MM::ss").slice(0,-6));//8643759575000
    let VarDateTwo = [];

    function Validar(e){
        StoreDatos.c_a('c_k', true)
        Conection.a_q(2, e, 0)
        setTimeData(e)
        //console.log(e + "E")
    }

    if(StoreDatos.a_z[0].g_o === true){
        {StoreDatos.a_p.info.slice(0).reverse().map((c) =>(
            VarDateTwo.push(c.date.slice(0,-9))
        ))}
    }

    console.log(TimeData + ' Time Data');

    //----FIN DATA----

    //----CSS PDF----
    const borderColor = '#90e5fc'
    const styles = StyleSheet.create({
        tableContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 24,
            borderWidth: 1,
            borderColor: '#bff0fd',
        },
        container: {
            flexDirection: 'row',
            borderBottomColor: '#000',
            backgroundColor: '#1d4984',
            color: '#fff',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            textAlign: 'center',
            fontStyle: 'bold',
            flexGrow: 1,
            fontSize: "14px",
        },
        descripcion: {
            width: '20%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        cantidad: {
            width: '50%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
        },
        total: {
            width: '30%'
        },
        row: {
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            backgroundColor: '#f5f3ff',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            fontStyle: 'bold',
            fontSize: "14px",
        },
        rowpar: {
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            fontStyle: 'bold',
            fontSize: "14px",
        },
        desc: {
            width: '20%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: 'center',
            paddingLeft: 8,
            fontSize: "10px",
        },
        cant: {
            width: '50%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: 'left',
            fontSize: "10px",
            paddingRight: 8,
        },
        tot: {
            width: '30%',
            textAlign: 'center',
            fontSize: "10px",
            paddingRight: 8,
        },
        totrue: {
            width: '30%',
            textAlign: 'center',
            fontSize: "10px",
            color: '#7d9000',
            paddingRight: 8,
        },
        totfalse: {
            width: '30%',
            textAlign: 'center',
            fontSize: "10px",
            color: '#f00',
            paddingRight: 8,
        },
    });
    //----FIN CSS PDF----

    return (<>
        <div className="contenedor-app">
            <div className="background"> </div>
            <div className="header-cont">
                <nav className="nav-cont">
                    <ul className="nav-ul">
                        <li className={styleaId + " nav-li"}><a onClick={changeStyleAId}>Ver Web</a></li>
                        <li className={stylebId + " nav-li"}><a onClick={changeStyleBId}>Ver PDF</a></li>
                    </ul>
                </nav>
            </div>
            <div className="body-cont">
                <div className="cont-date">
                    <DateRangePicker
                        className="width-100"
                        calendarAriaLabel="Toggle calendar"
                        minDate={new Date(2021,11,27)}
                        maxDate={new Date()}
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date"
                        onChange={(e) => Validar(e)}//(e)=> Conection.a_q(2, e, 0)
                        value={StoreDatos.a_c[0].e_t}
                        yearAriaLabel="Year"
                    />
                </div>

                {StoreDatos.a_z[0].g_o === true &&
                <>
                    <div className={styleAId + " cont-date cont-date-scroll"}>
                        {StoreDatos.a_p.info.slice(0).reverse().map((l, o) =>(
                            <table className="table-data" key={o}>
                                <thead>
                                    <tr className="tr-head">
                                        <td className="td-head">Nro</td>
                                        <td className="td-head">Nombres</td>
                                        <td className="td-head">{l.date.slice(0,-8)}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {l.data.map((d, f) =>(
                                        <tr key={f}>
                                            {Conection.a_i(d.data) === false ?
                                                <>
                                                    <td className="td-body">{f + 1}</td>
                                                    <td className="td-body td-aling-initial">
                                                        {StoreDatos.a_z.map((c) => (
                                                            c.Id_user_services === d.id ?
                                                                c.User_Firstname + ' ' + c.User_Lastname + ' ' + c.User_Name
                                                                :''
                                                        ))}
                                                    </td>

                                                    <td className="td-body td-body-bg-green">
                                                        {parseInt((Conection.bal(2, {in : d.data[d.data.length-1].Time_register, out : d.data[0].Time_register}))) >= Horas ?
                                                            <ion-icon name="checkmark-outline"></ion-icon>
                                                            :
                                                            <ion-icon name="close-outline"></ion-icon>
                                                        }
                                                    </td>
                                                </>

                                                :
                                                <>
                                                    <td className="td-body">{f + 1}</td>
                                                    <td className="td-body td-aling-initial">
                                                        {StoreDatos.a_z.map((c) => (
                                                            c.Id_user_services === d.id ?
                                                                c.User_Firstname + ' ' + c.User_Lastname + ' ' + c.User_Name
                                                                :''
                                                        ))}
                                                    </td>
                                                    <td className="td-body td-body-bg-green">
                                                        <ion-icon name="remove-outline"></ion-icon>
                                                    </td>
                                                </>
                                            }
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ))}
                    </div>

                    <div className={styleBId + " cont-date"}>
                        <PDFViewer style={{width: "100%", height: "90vh", margin: "auto",}}>
                            <Document>
                                {StoreDatos.a_p.info.slice(0).reverse().map((l) =>(
                                    <Page
                                        size="A4"
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: 10,
                                                borderBottom: 5,
                                            }}
                                        >
                                            <Image
                                                src={img100}
                                                alt="random image"
                                                style={{ maxWidth: "400px", maxHeight: "400" }}
                                                className="img-cotizacion"
                                            />

                                            <Text style={{
                                                color: "#757575",
                                                textAlign: "center",
                                                fontSize: 20,
                                                lineHeight: 1,
                                                paddingTop: "20px",
                                                paddingBottom: 5,}}>
                                                {StoreDatos.a_w.Business_name}</Text>
                                            <Text style={{
                                                textAlign: "center",
                                                fontSize: 15,}}>RUC: {StoreDatos.a_w.RUC}</Text>
                                        </View>

                                        <View
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                backgroundColor: "white",
                                                padding: 5,
                                            }}
                                        >
                                            <Text style={{
                                                color: "#5d4e6e",
                                                fontSize: 12,
                                                paddingBottom: 2,}}>{StoreDatos.a_w.Address}</Text>

                                        </View>

                                        <View style={{
                                            position: "relative",
                                            width: "420px",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}>

                                            <View style={styles.tableContainer}>
                                                <View style={styles.container}>
                                                    <Text style={styles.descripcion}>Nro</Text>
                                                    <Text style={styles.cantidad}>Nombres</Text>
                                                    <Text style={styles.total}>{l.date.slice(0,-8)}</Text>
                                                </View>
                                            </View>

                                            {l.data.map((d, f) =>(
                                                <View
                                                    style={
                                                        f%2 === 0 ?
                                                            styles.row
                                                            :
                                                            styles.rowpar
                                                    }
                                                    key={f}
                                                >
                                                    {Conection.a_i(d.data) === false ?
                                                        <>
                                                            <Text style={styles.desc}>{f + 1}</Text>
                                                            <Text style={styles.cant}>
                                                                {StoreDatos.a_z.map((c) => (
                                                                    c.Id_user_services === d.id ?
                                                                        c.User_Firstname + ' ' + c.User_Lastname + ' ' + c.User_Name
                                                                        : null
                                                                ))}
                                                            </Text>
                                                            <Text style={
                                                                parseInt((Conection.bal(2, {in : d.data[d.data.length-1].Time_register, out : d.data[0].Time_register}))) >= Horas ?
                                                                    styles.totrue
                                                                    :
                                                                    styles.totfalse
                                                            }>
                                                                {parseInt((Conection.bal(2, {in : d.data[d.data.length-1].Time_register, out : d.data[0].Time_register}))) >= Horas ?
                                                                    'Cumple 8 horas'
                                                                    :
                                                                    'No cumple 8 horas'
                                                                }
                                                            </Text>
                                                        </>
                                                        :
                                                        <>
                                                            <Text style={styles.desc}>{f + 1}</Text>
                                                            <Text style={styles.cant}>
                                                                {StoreDatos.a_z.map((c) => (
                                                                    c.Id_user_services === d.id ?
                                                                        c.User_Firstname + ' ' + c.User_Lastname + ' ' + c.User_Name
                                                                        : null
                                                                ))}
                                                            </Text>
                                                            <Text style={styles.tot}>
                                                                Null
                                                            </Text>
                                                        </>}
                                                </View>
                                            ))}

                                        </View>

                                    </Page>
                                ))}
                            </Document>
                        </PDFViewer>
                    </div>
                </>
                }

            </div>
        </div>
    </>)
}
export default observer(Principal);