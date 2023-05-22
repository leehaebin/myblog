import React, {useState} from 'react';
import { FcLike, FcRight } from "react-icons/fc";
import { FaThumbsUp, FaAngleRight, FaTimes } from "react-icons/fa";


const Card = ({img, title, category, totalLike}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
        <div className="box btn-shadow card">
            <div className="img">
                <img src={img} alt={img} onClick={toggleModal}/>
            </div>
            <div className="category d-flex">
                <span>
                    {category}
                </span>
                <label><FcLike /> {totalLike}</label>
            </div>
            <div className="title">
                <h2>{title}</h2>
                <a href='#popup' className='arrow' onClick={toggleModal}>
                    <FcRight />
                </a>
            </div>
        </div>
        {modal &&(
        <div className="modal overlay">
            <div className="modal-content d-flex">
                <div className="modal-img left">
                    <img src={img} alt={img} />
                </div>
                <div className="modal-text right">
                    <span>Features - Design</span>
                    <h1>{title}</h1>
                    <p>황금시대의 것이 찾아 수 창공에 사막이다. 따뜻한 귀는 소리다.</p>
                    <p>이것은 청춘 위하여 인생을 같지 행복스럽고 끝에 이것이다. </p>
                    <p>풀이 동산에는 있는 쓸쓸한 천자만홍이 가치를 것이다. </p>
                    <p>사는가 뜨거운지라, 앞이 구하지 실로 그들은 같이, 때문이다.</p>
                    <button className="btn-shadow">
                        LIKE THIS <FaThumbsUp />
                    </button>
                    <button className="btn-shadow">
                        VIEW PROJECT <FaAngleRight />
                    </button>
                    <button className="btn-shadow close-modal" onClick={toggleModal}>
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default Card;