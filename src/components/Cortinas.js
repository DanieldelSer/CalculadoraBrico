import { useState } from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Container, Row, Col } from 'react-bootstrap';

import CardCortinas from '../assets/CardCortinas';

import rizadaMetalizada from '../img/RizadaMetalizada.png';
import rizadaCristal from '../img/RizadaCristal.jpg';
import rizadaOpaco from '../img/RizadaOpaco.jpg';
import desiree from '../img/Desiree.jpg';
import diamante from '../img/Diamante.jpg';
import estrella from '../img/Estrella.jpg';
import onduladaTosca from '../img/OnduladaTosca.jpg';
import sara from '../img/Sara.jpg';
import spiral from '../img/Spiral.jpg';
import trenzada from '../img/Trenzada.jpg';
import multicolorCoral from '../img/MulticolorCoral.jpg';
import multicolorIris from '../img/MulticolorIris.jpg';
import canutillo from '../img/Canutillo.jpg';
import miami from '../img/Miami.jpg';
import luna from '../img/Luna.jpg';
import kriska from '../img/Kriska.jpg';


const Cortinas = () => {

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
                            <h2 className="text-black">Cortinas</h2>
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
                <Col xs lg="8">
                    <div className="justify-content-md-center">
                        <ul>
                            <li>Los colores de tonos marrones llevar??n montante de color <strong>bronce</strong></li>
                            <li>Los colores grises y metalizados llevar??n montante de color <strong>plata</strong></li>
                            <li>Los blancos llevar??n montante de color <strong>blanco</strong></li>
                            <li>Se puede cambiar el color del montante por indicaci??n previa del cliente</li>
                        </ul>
                    </div>
                </Col>
                <Row className="justify-content-md-center" md={3}>
                    <Col >
                        <CardCortinas
                            img={rizadaMetalizada}
                            clase="img-thumbnail rounded"
                            title="Tubo rizado"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Metalizados Bronce y Oro</li>
                                            <li>Precio: <strong>42,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={rizadaCristal}
                            title="Tubo rizado"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Cristal azul, transparente y verde</li>
                                            <li>Precio: <strong>43,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 43.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={rizadaOpaco}
                            title="Tubo rizado"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Opacos marfin y marr??n </li>
                                            <li>Precio: <strong>42,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={desiree}
                            title="Desiree"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Opacos marr??n y gris</li>
                                            <li>Transparente marr??n, blanco y verde</li>
                                            <li>Precio: <strong>27,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 27.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={diamante}
                            title="Diamante"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Verde y bronce</li>
                                            <li>Precio: <strong>42,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={estrella}
                            title="Estrella"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Marr??n y gris</li>
                                            <li>Precio: <strong>42,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={onduladaTosca}
                            title="Ondulada Tosca"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Marr??n-Marfil, azul, verde</li>
                                            <li>Cristal marr??n y cristal negro</li>
                                            <li>Precio: <strong>27,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 27.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={sara}
                            title="Sara"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Marr??n, cristal, verde y azul</li>
                                            <li>Precio: <strong>45.95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 45.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={spiral}
                            title="Spiral"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Verde, blanco y marr??n</li>
                                            <li>Precio: <strong>40,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 40.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={trenzada}
                            title="Trenzada"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Verde-blanco, marr??n-blanco y marr??n claro-oscuro</li>
                                            <li>Precio: <strong>46,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 46.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={multicolorCoral}
                            title="Multicolor Coral"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Grueso</li>
                                            <li>Precio: <strong>44,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 44.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={multicolorIris}
                            title="Multicolor Iris"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Fino</li>
                                            <li>Precio: <strong>42,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 42.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={canutillo}
                            title="Canutillo"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Jaspeado marr??n</li>
                                            <li>Precio: <strong>43,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 43.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={miami}
                            title="Miami"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Marr??n: Claro y oscuro</li>
                                            <li>Precio: <strong>61,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 61.95)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={luna}
                            title="Luna"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            <li>Verde, azul, rojo, amarillo, blanco y negro</li>
                                            <li>Precio: <strong>43,50???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 43.50)}???</strong></p>
                                    </div>
                                </>
                            }
                        />
                    </Col>
                    <Col>
                        <CardCortinas
                            img={kriska}
                            title="Kriska"
                            clase="img-thumbnail rounded"
                            text={
                                <>
                                    <div>
                                        <ul>
                                            Cadena de aluminio
                                            <li>Morado, azul, rojo, dorado, plata y bronce</li>
                                            <li>Precio: <strong>60,95???/m<sup>2</sup></strong></li>
                                        </ul>
                                        <p className="text-warning">Total: <strong>{calculatePrice(high, width, 60.95)}???</strong></p>
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

export default Cortinas;