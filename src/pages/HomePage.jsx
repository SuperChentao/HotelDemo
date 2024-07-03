import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          视频播放
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video controls style={{width:'100%',aspectRatio: 16/9}} className="d-block">
          <source src="/2.mp4" type="video/mp4"/>
          您的浏览器不支持 video 标签。
        </video>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide}>关闭</Button>
      </Modal.Footer>
    </Modal>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="container text-left px-2">
        <div>
          <a href="">343-xxx-xxx</a>
          <p>First road 1<br/>Banff, KK oP7<br/>Canada</p>
        </div>
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4" style={{ background: "url(/bg.jpg) no-repeat", backgroundSize: 'cover' }}>
            <h5 className="pt-5 pb-5" style={{lineHeight: 1.6}}>
              BanffNB666 since 1675. Welcome to BanffNB666, your serene escape nestled in the heart of Banff
              NationaPark. Enjoy modern amenities, breathtaking mountain views, and exceptional service. Our luxurious
              roomsgourmet dining, and rejuvenating spa ensure a memorable stay. Perfect for adventurers and
              relaxationseekers alike. Experience Banff's natural beauty with us. description here.
            </h5>
            <div className="text-center pt-5">
              <button  className="btn btn-outline-primary btn-lg my-2" onClick={() => setModalShow(true)}>
                点击查看酒店视频
              </button>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default withLayout(HomePage);
