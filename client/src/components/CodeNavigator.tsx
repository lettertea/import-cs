import {Button, Card, Col, Container, Offcanvas, Row} from "react-bootstrap";
import {useState} from "react";
import {CodeBlock, irBlack} from "react-code-blocks";

interface Step {
    description: string,
    lineNumber: string
}


export interface CodeNavigationGuide {
    code: Function,
    steps: Step[]
}

const CodeNavigator = ({codeNavigationGuide}: { codeNavigationGuide: CodeNavigationGuide }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [stepIndex, setStepIndex] = useState(0)


    const addStepIndex = (otherOperand: number) => {
        // Although extremely, extremely unlikely, avoid using functional setState as it can theoretically
        // bypass if conditional when function is triggered too quickly due to its asynchronous nature
        const newIndex = stepIndex + otherOperand
        if (newIndex < codeNavigationGuide.steps.length && newIndex >= 0) {
            setStepIndex(newIndex)
        }
    }

    const currentStep = () => codeNavigationGuide.steps[stepIndex]

    const StepsNavigation = () => (<div><Button variant="outline-primary" size="sm">
        <img src="https://static.thenounproject.com/png/1297552-200.png" width="25" height="25"/><br/>
    </Button>
        <Button variant="outline-primary" size="sm">
            <img src="https://www.vhv.rs/dpng/d/437-4375289_rewind-arrow-svg-png-icon-free-download-rewind.png"
                 width="25" height="25"/><br/>
        </Button>
        <Button variant="outline-primary" size="sm" onClick={() => addStepIndex(-1)}>
            <img
                src="https://e7.pngegg.com/pngimages/85/844/png-clipart-computer-icons-arrow-icon-design-encapsulated-postscript-left-arrow-angle-internet.png"
                width="25" height="25"/><br/>
        </Button>
        <Button variant="outline-primary" size="sm" onClick={() => addStepIndex(1)}>
            <img src="https://static.thenounproject.com/png/74838-200.png" width="25" height="25"/><br/>
        </Button>
        <Button variant="outline-primary" size="sm">
            <img src="https://cdn0.iconfinder.com/data/icons/playback-1/24/fast-forward-512.png" width="25"
                 height="25"/><br/>
        </Button>
        <Button variant="outline-primary" size="sm">
            <img src="https://static.thenounproject.com/png/1297558-200.png" width="25" height="25"/><br/>
        </Button></div>)


    return (
        <div>
            <Container>
                <StepsNavigation/>
                <br/>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col style={{width: 100}}>
                                <CodeBlock
                                    text={`const ${codeNavigationGuide.code.name} = ${codeNavigationGuide.code.toString()}`}
                                    language={"js"}
                                    showLineNumbers={true}
                                    startingLineNumber={true}
                                    theme={irBlack}
                                    highlight={currentStep().lineNumber}
                                />

                            </Col>

                            <Col>
                                <strong>Step {stepIndex+1}</strong>
                                <br/>
                                {currentStep().description}
                                <br/>
                                {"['mango'] -> [apple] -> [papaya] -> [orange] -> [lychee] -> [cherry] -> [banana] -> [bread] -> [pineapple] -> [] -> [] -> []"}
                            </Col>


                        </Row>

                    </Card.Body>
                </Card>

            </Container>


            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <h3>Selection Sort</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>

        </div>
    );
};

export default CodeNavigator;