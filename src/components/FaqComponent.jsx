import { Container, Row, Col, Accordion } from "react-bootstrap"
import { faq } from "../data/index"

export const FaqComponent = () => {
  return (
    <div>
      <Container className="faq">
        <Row>
          <Col className="text-center fw-bold">
            <h2>Pertanyaan yang sering ditanyakan</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-sm-1 g-2 pt-4">
          {faq.map((data) => {
            return(
            <Col key={data.id}>
              <Accordion>
              <Accordion.Item eventKey={data.eventKey}>
                <Accordion.Header>{data.title}</Accordion.Header>
                <Accordion.Body>
                  {data.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent
