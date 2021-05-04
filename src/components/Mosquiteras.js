import { useState } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardMosquitera from '../assets/CardMosquitera';

// JSON
import data from '../assets/tablaPreciosMosquiteras.json'

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

    const obtainPrice = () => {
        if (high > 2.401 || width > 1.801) {
            return <p className="text-danger">Consultar</p>
        } else {
            return data.find(
                o => o.sinceWidth <= width && o.untilWidth >= width
                    &&
                    o.sinceHigh <= high && o.untilHigh >= high
            ).price[0];
        }
    }
    const obtainPrice2 = (num) => {

        let price = 0;
        let finalPrice = 0;

        if (high > 2.401 || width > 1.801) {
            return <p className="text-danger">Consultar</p>
        } else {

            price = data.find(
                o => o.sinceWidth <= width && o.untilWidth >= width
                    &&
                    o.sinceHigh <= high && o.untilHigh >= high
            ).price[0];
            return  (price + (price * num)).toFixed(2);
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
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Alto</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                onChange={manageChangeHigh}
                                onKeyDown={handleKeyDownHigh}
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type="number"
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
                                placeholder=""
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type="number"
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
                                        <p className="text-warning">Total: <strong>{obtainPrice()}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón</li>
                                            <li>Precio: <strong> + 10%</strong> del total</li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice2(0.10)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Bronce</li>
                                            <li>Gris</li>
                                            <li>Verde</li>
                                            <li>Burdeos</li>
                                            <li>Precio: <strong> + 15%</strong> del total</li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice2(0.15)}€</strong></p>
                                    </div>
                                    <div>
                                        Veteados madera:
                                        <ul>
                                            <li>Pino Nudo</li>
                                            <li>Envero Oscuro</li>
                                            <li>Precio: <strong> + 55%</strong> del total</li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{obtainPrice2(0.55)}€</strong></p>
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
                                            <li>Blanco <strong>sin montar</strong></li>
                                            <li>Precio: <strong>31,20€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 31.20)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Blanco <strong>montada</strong></li>
                                            <li>Precio: <strong>39,30€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 39.30)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>sin montar</strong></li>
                                            <li>Precio: <strong>35.00€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 35.00)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>montada</strong></li>
                                            <li>Precio: <strong>42,00€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.00)}€</strong></p>
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
                                            <li>Precio: <strong>35,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 35.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Blanco y plata <strong>montada</strong></li>
                                            <li>Precio: <strong>42,00€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.00)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>sin montar</strong></li>
                                            <li>Precio: <strong>39,00€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 39.00)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Marrón <strong>montada</strong></li>
                                            <li>Precio: <strong>46,00€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 46.00)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Bronce anonizado <strong>sin montar</strong></li>
                                            <li>Precio: <strong>43,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 43.95)}€</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Bronce anonizado <strong>montada</strong></li>
                                            <li>Precio: <strong>50,95€/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 50.95)}€</strong></p>
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