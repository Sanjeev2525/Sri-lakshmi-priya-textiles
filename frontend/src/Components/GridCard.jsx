import { Card,Col } from "antd";

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const {Meta} = Card;
const GridCard = (props) =>{

    return(
        <div style={{alignItems: 'center'}}>
            <Col> 
            <Card
    style={{
      width: 380,
    }}
    cover={
      <img
        alt="error"
        src={props.photos}
        href={`/products/${props.product}/${props.name}`}
      />
    }
   
  >
    <Meta
      title={props.name}
      description={'₹'+props.price +"("+ props.size+")"}
    />
  </Card>
  
   </Col>
        </div>
    )
}

export default GridCard