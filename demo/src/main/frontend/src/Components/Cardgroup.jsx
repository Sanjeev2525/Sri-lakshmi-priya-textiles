import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBRipple,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function CardGroup(){
    return(
        <div>
            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.freepik.com/free-psd/several-white-cushions-closeup_176382-1007.jpg?w=1060&t=st=1679589714~exp=1679590314~hmac=b6094548c357f094fd19a0bec4eeada62996bcf7d8e5d9db8175b59fcea570dc\' fluid alt='...' />
        <a href="/products/pillow">
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Pillow Cover</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/products/pillow'>Shop</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.freepik.com/free-psd/elegant-bedroom-hotel-room-with-classic-furniture_176382-189.jpg?w=1060&t=st=1679589994~exp=1679590594~hmac=22446dea7afdd7fce72ff29509bcbe8fdc2673b07022df55829f1a77ee16817e' fluid alt='...' />
        <a href="/products/bedspread">
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Bed Spread</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/products/bedspread'>Shop</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src="https://i0.wp.com/gowrishop.com/wp-content/uploads/2023/01/1000009582.jpg?fit=2500%2C1204&ssl=1\'" fluid alt='...' />
        <a href="/products/bedsheet">
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Bed Sheet</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/products/bedsheet'>Shop</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.freepik.com/free-vector/realistic-icon-with-black-white-ornamental-carpet-floor-vector-illustration_1284-66915.jpg?w=1060&t=st=1679589921~exp=1679590521~hmac=e6ba279959e1dc232747b8b1053671a77f3a97286685ed4d0b7d362416a66617' fluid alt='...' />
        <a href="/products/mat">
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Mat</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='/products/mat'>Shop</MDBBtn>
      </MDBCardBody>
    </MDBCard>
      </MDBCol>
    </MDBRow>
        </div>
    );
}