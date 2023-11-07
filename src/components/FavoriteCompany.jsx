import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaTrash } from 'react-icons/fa'
import { removeFromFavAction } from "../redux/actions";

const FavoriteCompany = () => {
  const companyAdd = useSelector((state) => state.favourite.content)
  const dispatch = useDispatch()
const location = useLocation()

  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto my-3">
          <h1 className="display-1">FavoriteCompany</h1>
        </Col>
        <Col xs={2} className="mx-auto mt-5">
        <Link to="/" className={location.pathname === '/favourites' ? 'nav-link active' : 'nav-link'}>
          <h1 className="fs-4 mt-3 text-primary">Home</h1>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col>
        <ul style={{ listStyle: 'none' }}>
          {companyAdd.map((company, i)=>(
            <>
            <div style={{ border: '1px solid #00000033', borderRadius: 4 }} className="d-flex flex-row p-3 mt-4">
            <li key={i} >
              {<a href={company} target="_blank" rel="noreferrer">{company}</a>}
              {console.log(company,i)}
              {console.log(companyAdd)}
            </li>
            <Button
            className="ms-auto me-2"
            variant="danger"
            onClick={() => {
              dispatch(removeFromFavAction(i))
            }}
          >
            <FaTrash/>
          </Button>
          </div>
          </>
          ))}
        </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteCompany;
