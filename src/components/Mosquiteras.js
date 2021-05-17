import { useState } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardMosquitera from '../assets/CardMosquitera';

// JSON
import data from '../assets/tablaPreciosMosquiteras.json'
import dataMarron from '../assets/tablaPreciosMosquiterasMarron.json'
import dataBG from '../assets/tablaPreciosMosquiterasBGVBM.json'
import dataVeteado from '../assets/tablaPreciosMosquiterasVeteado.json'

// Imagenes
import mosquiteraEnrollableCard from '../img/mosquitera-enrollable-card.jpg';
import mosquiteraFijaCard from '../img/mosquitera-fija-clipada-card.jpg';
import mosquiteraCorrederaCard from '../img/mosquitera-corredera-card.png';



const Mosquiteras = () => {

    const [high, setHigh] = useState(0);
    const [width, setWidth] = useState(0);
    const [hiround, setHiround] = useState((Math.ceil(high * 20) / 20).toFixed(2));
    const [wiround, setWiround] = useState((Math.ceil(width * 20) / 20).toFixed(2));

    const calculatePrice = (hi, wi, price) => {
        let num;
        hi = (Math.ceil(hi * 20) / 20).toFixed(2);
        wi = (Math.ceil(wi * 20) / 20).toFixed(2);

        if (hi * wi <= 1 && hi * wi > 0) {
            return parseFloat(price);
        } else if (hi * wi === 0) {
            return 0;
        } else {
            num = parseFloat((hi * wi) * price);
            return Number(num.toFixed(2));
        }
    };

    const obtainPrice = (table) => {
        if (high > 2.401 || width > 2.001) {
            return <p className="text-danger">Consultar</p>
        } else if (high < 0 || width < 0) {
            return <p className="text-danger">Error</p>
        } else if (table === "data") {
            return data.find(
                o => o.sinceWidth <= width && o.untilWidth >= width
                    &&
                    o.sinceHigh <= high && o.untilHigh >= high
            ).price[0];
        } else if (table === "brown") {
            return dataMarron.find(
                o => o.sinceWidth <= width && o.untilWidth >= width
                    &&
                    o.sinceHigh <= high && o.untilHigh >= high
            ).price[0];
        } else if (table === "bg") {
            return dataBG.find(
                o => o.sinceWidth <= width && o.untilWidth >= width
                    &&
                    o.sinceHigh <= high && o.untilHigh >= high
            ).price[0];
        }  else if (table === "veteado") {
            return dataVeteado.find(
                o => o.sinceWidth <= width && o.untilWidth >= width
                    &&
                    o.sinceHigh <= high && o.untilHigh >= high
            ).price[0];
        }
    }

    const handleKeyDownHigh = (event) => {
        if (event.key === 'Enter') {
            document.getElementById('width').focus();
        }
    }
    const handleKeyDownWidth = (event) => {
        if (event.key === 'Enter') {
            document.getElementById('high').focus();
        }
    }

    const manageChangeHigh = (e) => {
        setHigh(e.target.value);
        setHiround((Math.ceil(e.target.value * 20) / 20).toFixed(2));
    };
    const manageChangeWidth = (e) => {
        setWidth(e.target.value);
        setWiround((Math.ceil(e.target.value * 20) / 20).toFixed(2));
    };

    return (
        <div>
            <Container className="sticky-top pt-3 mt-5 bgColor">
                <Row className="d-flex justify-content-center d-flex align-items-center">
                    <Col xs lg="3" className="justify-content-start">
                        <div className="justify-content-center">
                            <h2 className="text-black">Mosquiteras</h2>
                        </div>
                    </Col>
                    <Col xs lg="4" >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" >Alto</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                onChange={manageChangeHigh}
                                onKeyDown={handleKeyDownHigh}
                                className="auto"
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type="number"
                                min="0"
                                step="0.01"
                                id="high"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Ancho</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                onChange={manageChangeWidth}
                                onKeyDown={handleKeyDownWidth}
                                className="auto"
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type="number"
                                min="0"
                                step="0.01"
                                id="width"
                            />
                        </InputGroup>
                    </Col>
                    <Row>
                        <Col xs lg="2">
                            <div className="justify-content-md-center">
                                <p className="mb-4 p-1 text-danger">{hiround}</p>
                                <p className="p-1 text-danger">{wiround}</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-md-center" md={3}>

                    <Col >
                        <CardMosquitera
                            img={mosquiteraEnrollableCard}
                            title="Enrollable cajón redondo"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Blanco y plata</li>
                                            <li>Precio: <strong>53,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice("data")}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón</li>
                                            <li>Precio: <strong>56,50€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice("brown")}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Bronce</li>
                                            <li>Gris</li>
                                            <li>Verde</li>
                                            <li>Burdeos</li>
                                            <li>Precio: <strong>58,50€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice("bg")}€</strong></p>
                                    </div>
                                    <div>
                                        Veteados madera:
                                        <ul>
                                            <li>Pino Nudo</li>
                                            <li>Envero Oscuro</li>
                                            <li>Golden</li>
                                            <li>Precio: <strong>88,00€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice("veteado")}€</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>

                    <Col>
                        <CardMosquitera
                            img={mosquiteraFijaCard}
                            title="Fija con felpudo y clips de sujección"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Blanco y Plata <strong>sin montar</strong></li>
                                            <li>Precio: <strong>32,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 32.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Blanco y Plata <strong>montada</strong></li>
                                            <li>Precio: <strong>39,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 39.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>sin montar</strong></li>
                                            <li>Precio: <strong>35.95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 35.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>montada</strong></li>
                                            <li>Precio: <strong>43,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 43.95)}€</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>

                    <Col>
                        <CardMosquitera
                            clase="p-2 hove"
                            img={mosquiteraCorrederaCard}
                            title="Corredera con rodamiento"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Blanco y plata <strong>sin montar</strong></li>
                                            <li>Precio: <strong>36,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 36.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Blanco y plata <strong>montada</strong></li>
                                            <li>Precio: <strong>43,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 43.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>sin montar</strong></li>
                                            <li>Precio: <strong>39,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 39.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>montada</strong></li>
                                            <li>Precio: <strong>46,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 46.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Bronce anonizado <strong>sin montar</strong></li>
                                            <li>Precio: <strong>44,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 44.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Bronce anonizado <strong>montada</strong></li>
                                            <li>Precio: <strong>52,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 52.95)}€</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Mosquiteras;