import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Strawbella from '../assets/strawbella.png';
import Green_Giant from '../assets/green_giant.png';
import Cookie_Monster from '../assets/cookie_monster.png';
import Monkey_Business from '../assets/monkey_business.png';
import Cookie_Dough from '../assets/cookie_dough.png';
import Mucho_Mango from '../assets/mucho_mango.png';
import Mint_To_Be from '../assets/mint_to_be.png';
import Shockers_Brownie from '../assets/shockers_brownie.png';
import Pink_Lady from '../assets/pink_lady.png';
import Whole_Latte_Love from '../assets/whole_latte_love.png';
import Jungle_Love from '../assets/jungle_love.png';
import Wildcats from '../assets/wildcats.png';
import Cocolicious from '../assets/cocolocious.png';

const IceMenu = () => (
  <Container id="icecreamrolls">
    {/* <Container className="category">
      <h1 className="title satisfy">Rolled  Ice Cream</h1>
      <div className="price satisfy"></div>
    </Container> */}
    <Container className="category" >
    <div className="rolled_ice">
      <div className="centered">
        <div className="title">Rolled  Ice Cream</div>
        <div className="title">$6.99</div>
      </div>
    </div>
      
    </Container>

      <Row>
        <Col xs={12}>
            <div className="step helvetica center">STEP 1</div>
            <div className="menu-instructions montserrat center">CHOOSE A FLAVOR LISTED BELOW</div>
            <div className="step helvetica center">STEP 2</div>
            <div className="menu-instructions montserrat center">CHOOSE 3 TASTY TOPPINGS AFTER YOUR ICE CREAM IS MADE</div>
          <div className="divider"></div>
        </Col>
            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Strawbella} alt="Strawbella"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Strawbella</Card.Title>
                  <Card.Text className="descriptions">
                    Strawberry Base, Graham Cracker &amp; Nutella
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Green_Giant} alt="Green Giant"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Green Giant</Card.Title>
                  <Card.Text className="descriptions">
                    Green Tea Base, Lychee &amp; Condensed Milk
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Cookie_Monster} alt="Cookie Monster"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Cookie Monster</Card.Title>
                  <Card.Text className="descriptions">
                    Vanilla Base, Oreo Cookie &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Monkey_Business} alt="Monkey Business"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Monkey Business</Card.Title>
                  <Card.Text className="descriptions">
                    Banana Base, Graham Cracker, Nutella &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Cookie_Dough} alt="Cookie Dough"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Cookie Dough</Card.Title>
                  <Card.Text className="descriptions">
                    Banana Base, Graham Cracker, Nutella &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Mucho_Mango} alt="Mucho Mango"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Mucho Mango</Card.Title>
                  <Card.Text className="descriptions">
                    Mango Base, Strawberry &amp; Condensed Milk
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Mint_To_Be} alt="Mint To Be"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Mint To Be</Card.Title>
                  <Card.Text className="descriptions">
                    Mint Base, Oreo Cookie &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Shockers_Brownie} alt="Shockers Brownie"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Shockers Brownie</Card.Title>
                  <Card.Text className="descriptions">
                    Chocolate Milk Base, Brownie &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Pink_Lady} alt="Pink Lady"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Pink Lady</Card.Title>
                  <Card.Text className="descriptions">
                    Strawberry Base, Graham Crackers &amp; Condensed Milk
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Whole_Latte_Love} alt="Whole Latte Love"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Whole Latte Love</Card.Title>
                  <Card.Text className="descriptions">
                    Coffee Base, Biscoff Cookie &amp; Caramel Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Jungle_Love} alt="Jungle Love"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Jungle Love</Card.Title>
                  <Card.Text className="descriptions">
                    Chocolate Base, Strawberry, Banana &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Wildcats} alt="Wildcats"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Wildcats</Card.Title>
                  <Card.Text className="descriptions">
                    Chocolate Base, Strawberry, Banana &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Wildcats} alt="Wildcats"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Wildcats</Card.Title>
                  <Card.Text className="descriptions">
                    Banana Base, Blackberry, Strawberry &amp; Chocolate Sauce
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={3} className="card-col">
              <Card>
                <Card.Img variant="top" src={Cocolicious} alt="Cocolicious"/>
                <Card.Body>
                <div className="divider"></div>
                  <Card.Title>Cocolicious</Card.Title>
                  <Card.Text className="descriptions">
                    Coconut ice cream mixed with Pineapple top with Coconut flakes &amp; Whipped Cream
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

        <Col xs={12}> 
          <hr className="hr"></hr>
          <div className="menu-subtitle text-center">TOPPINGS</div>
        </Col>
        
        <Col xs={4}>
          <div className="menu-title">CHOCOLATE GOODIES</div>
          <div className="menu-description">Brownies</div>
          <div className="menu-description">Crushed Reeses</div>
          <div className="menu-description">Crushed Butterfingers</div>
          <div className="menu-description">Chocolate Pocky Stick</div>
          <div className="menu-description">Oreo </div>
          <div className="menu-description">Mint Oreo </div>
          <div className="menu-description">Kit Kat </div>
          <div className="menu-description">Chocolate Chips </div>
          <div className="menu-description">M&amp;M's </div>
          <div className="menu-description">Chocolate Chip </div>
          <div className="menu-description">Crushed Peanuts </div>
          <div className="menu-description">Pecans</div>
        </Col>

        <Col xs={4}>
          <div className="menu-title">FRUITS</div>
            <div className="menu-description">Cherry</div>
            <div className="menu-description">Blueberry</div>
            <div className="menu-description">Strawberry</div>
            <div className="menu-description">Mango</div>
            <div className="menu-description">Banana</div>
            <div className="menu-description">Lychee</div>
            <div className="menu-description">Pineapple</div>
        </Col>

        <Col xs={4}>
          <div className="menu-title">CANDIES</div>
          <div className="menu-description">Marshmallow</div>
          <div className="menu-description">Gummy Bear</div>
          <div className="menu-description">Sprinkles</div>
          <div className="menu-description">Skittles</div>
          <div className="menu-description">Coconut Flakes</div>
          <div className="menu-description">Sour Patch Kids</div>
        </Col>
        
        <Col xs={4}>
          <div className="menu-title">CEREALS</div>
          <div className="menu-description">Cinnamon Toast Crunch</div>
          <div className="menu-description">Fruity Pebbles</div>
        </Col>

        <Col xs={4}>
          <div className="menu-title">COOKIES</div>
          <div className="menu-description">Graham Crackers</div>
          <div className="menu-description">Pretzel Stix</div>
          <div className="menu-description">Wafer Rolls</div>
          <div className="menu-description">Nilla Wafers</div>
        </Col>

        <Col xs={4}>
          <div className="menu-title">SYRUPS</div>
          <div className="menu-description">Condensed Milk</div>
          <div className="menu-description">Caramel Sauce</div>
          <div className="menu-description">Chocolate Sauce</div>
          <div className="menu-description">Strawberry Sauce</div>
        </Col>
        <Col xs={12}>
          <div className="notations">ADDITIONAL ADD-ONS +$0.50</div>
        </Col>

      </Row>
  </Container>
);

export default IceMenu;