import { useState } from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Container, Row, Col } from 'react-bootstrap';

import CardMosquitera from '../assets/CardMosquitera';

import persianaalicantina from '../img/persianaalicantina.jpg';
import persianaceilan from '../img/persiana-ceilan.jpg';


const Persianas = () => {

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
                    <Col xs lg="3">
                        <div className="justify-content-center">
                            <h2 className="text-black">Persianas y Alicantinas</h2>
                        </div>
                    </Col>
                    <Col xs lg="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Alto</InputGroup.Text>
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
                            img={persianaalicantina}
                            title="Cadenillas con polea met??lica y frenos de retenci??n"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            Alicantina pl??stico PVC:
                                            <li>Imitaci??n madera, verde y marfil</li>
                                            <li>Precio: <strong>26,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 26.95)}???</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Alicantina madera pino <strong>sin pintar</strong></li>
                                            <li>Precio: <strong>25,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 25.50)}???</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            Alicantina madera pintada:
                                            <li>Verde r??stico, marfil, blanco, barniz pino, miel, nogal y gris </li>
                                            <li>Precio: <strong>30,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 30.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardMosquitera
                            img={persianaceilan}
                            title="Fantas??as Polea con freno incorporado y ??ngulos para instalar"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Mini Ceylan <strong>sin pintar</strong></li>
                                            <li>Precio: <strong>32,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 32.95)}???</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            Mini Ceylan <strong>pintada</strong>
                                            <li>Verde, pino miel, nogal y blanco</li>
                                            <li>Precio: <strong>37,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 37.95)}???</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>Ceylan <strong>sin pintar</strong></li>
                                            <li>Precio: <strong>34,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 34.95)}???</strong></p>
                                    </div>
                                    <div>
                                        <ul>
                                            Ceylan <strong>pintada</strong>
                                            <li>Verde, pino miel, nogal y blanco</li>
                                            <li>Precio: <strong>39,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 39.95)}???</strong></p>
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

export default Persianas;