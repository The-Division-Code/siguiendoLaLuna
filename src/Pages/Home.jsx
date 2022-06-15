import { Carousel, Card, Button, CardGroup } from "react-bootstrap";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className="container">
      <br />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/Foto-Posada.jpg"
            alt="First slide"
            height={450}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/Foto-Posada.jpg"
            alt="First slide"
            height={450}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/Foto-Posada.jpg"
            alt="First slide"
            height={450}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <h2 className={styles.h2}  >La Posada</h2>
      <p className="text-center">
        Situada en el barrio residencial El Pinar de La lucila del Mar podrás
        disfrutar de caminatas por el bosque acompañado del canto de pájaros
        hasta llegar a nuestras amplias playas que conservan sus tradicionales
        postales familiares.
      </p>
      <p className="text-center">
        Nuestro proyecto tuvo como principal objetivo hacer sentir a nuestros
        huéspedes como en su propia casa atendiendo con calidez y estando
        presente las 24 horas lo que nos permitió a lo largo de los años
        nutrirnos de diversas culturas y experiencias de nuestros huéspedes. Es
        difícil de explicar en palabras , no quisimos ser un hotel ni un hostel
        tampoco un complejo de departamentos o un apart, desde 2012 quisimos ser
        Posada de mar Siguiendo la luna.
      </p>
      <p className="text-center">Vení a descubrirnos.</p>
      <div align="center">
        <iframe
          width="80%"
          height="400px"
          src="https://www.youtube.com/embed/VQu0ZOGU-t0?autoplay=1&mute=1"
          title="YouTube video player"
          playing={true}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />

      <div>
        <h2 className={styles.h2}>Nuestras Habitaciones</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit
          soluta veritatis necessitatibus omnis quas assumenda labore earum
          autem similique incidunt, magni harum natus quasi iste dolorem nemo
          obcaecati ex! Odit illo voluptas esse? Aut quae quas perferendis rem
          sint, itaque dicta vitae officia debitis animi amet laborum placeat
          temporibus, nemo voluptatem. Beatae fugit nisi aspernatur recusandae
          ratione nostrum officiis dolor officia repellat pariatur? Dolores
          voluptatum qui, reprehenderit facilis nihil quo corporis aut provident
          odit excepturi impedit quam sit culpa hic porro eos expedita mollitia
          obcaecati dolore numquam accusamus quos! Aliquid distinctio,
          doloremque nostrum dolorum at sint maiores! Enim, maxime.
        </p>
        <CardGroup>
          <Card>
            <a href="/double-base" style={{ textDecoration: 'none', color:'black', textAlign:'center'}}>
              <Card.Img variant="top" src="./img/Habitacion-3p.jpg" />
              <Card.Body>
                <Card.Title>Habitaciones Dobles</Card.Title>
              </Card.Body>
            </a>
          </Card>
          <Card>
            <a href="/triple-base" style={{ textDecoration: 'none', color:'black', textAlign:'center'}}>
              <Card.Img variant="top" src="./img/Habitacion-3p.jpg" />
              <Card.Body>
                <Card.Title>Habitaciones Triples</Card.Title>
              </Card.Body>
            </a>
          </Card>
          <Card>
            <a href="/quadruple-base" style={{ textDecoration: 'none', color:'black', textAlign:'center'}}>
              <Card.Img variant="top" src="./img/Habitacion-3p.jpg" />
              <Card.Body>
                <Card.Title>Habitaciones Cuádruples</Card.Title>
              </Card.Body>
            </a>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
