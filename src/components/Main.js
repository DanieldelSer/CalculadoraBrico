import Cards from '../assets/Cards'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mosquitera from '../img/mosquitera-enrollable.jpg';
import cortinas from '../img/cortinatiras.jpg';
import persiana from '../img/persiana-alicantina.jpg';

const Main = () => {
    return (
        <Container>
            <Row md={3}>

                <Col>
                    <Cards
                        img={mosquitera}
                        link="/mosquiteras"
                        title="Mosquiteras"
                        text={<ul>
                            <li>Enrollable cajón redondo</li>
                            <li>Corredera con rodamiento</li>
                            <li>Fija con felpudo y clips de sujección</li>
                        </ul>} />
                </Col>

                <Col>
                    <Cards
                        img={cortinas}
                        link="/cortinas"
                        title="Cortinas de tiras"
                        text={<ul>
                            <li>Tiras lisas, rizadas, onduldas y canutillos</li>
                            <li>Tiras transparentes, verdes, marrón, azul, etc</li>
                            <li>Tiras de plástico y metálicas</li>
                        </ul>} />
                </Col>

                <Col>
                    <Cards
                        img={persiana}
                        link="/persianas"
                        title="Persianas y Alicantinas"
                        text={<ul>
                            <li>Cadenillas con polea metálica y frenos de retencion</li>
                            <li>Fantasías poleas con freno incorporado y ángulos para instalar</li>
                            <li>Fija con felpudo y clips de sujección</li>
                        </ul>} />
                </Col>

            </Row>
        </Container>
    )


};

export default Main;