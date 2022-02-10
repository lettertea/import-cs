import {Button, Nav, Offcanvas} from "react-bootstrap";
import {useState} from "react";
import CodeNavigator, {CodeNavigationGuide} from "./CodeNavigator";

const startCase = require('lodash.startcase');

export interface ExternalLink {
    name: string,
    url: string
}

export interface CalculatorPageProp {
    title: string,
    description: string,
    codeNavigationGuide: CodeNavigationGuide,
    links: ExternalLink[],
    image?: string
}

const CalculatorPage = ({title, description, codeNavigationGuide, links, image}: CalculatorPageProp) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Show details
            </Button>
            <br/><br/>

            <h3>{startCase(title)}</h3>
            {image ? <img src={image} width="50" height="50"/> : null}<br/>


            <CodeNavigator codeNavigationGuide={codeNavigationGuide}/>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <h3>{startCase(title)}</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {description}
                    <br/>
                    <br/>
                    <h4>External Links</h4>
                    {links.map((link) => (
                        <Nav.Link href={link.url}>{link.name}</Nav.Link>
                    ))}

                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default CalculatorPage;