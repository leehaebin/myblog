import React, { useRef } from 'react';
//import { useDispatch } from 'react-redux';
import emailJs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();
   // const dispatch = useDispatch();

    const myid = {
        SERVICE_ID : "service_s694wib",
        TEMPLATE_ID : "template_s3qwsh3",
        USER_ID : "BE9JAm9hZViaJB4ss"
    }
    const closeEmail = () => {
        //dispatch({ type: "CLOSE_EMAIL"});
    }
    const sendEmail = (e)=> {
        e.preventDefault();
        emailJs.sendForm(myid.SERVICE_ID, myid.TEMPLATE_ID, form.current, myid.USER_ID)
        .then((rs)=>{
            console.log(rs);
            alert("전송되었습니다.");
            closeEmail();
        }, 
        (error)=>{
           console.log(error);
           alert("전송에 실패했습니다.");
        });
    };

    return (
        <div>
            <section className="Contact" id="contact">
               <div className="container top">
                   <div className="heading text-center">
                       <h4>CONTACT</h4>
                       <h1>Contact With Me</h1>
                   </div>

                   <div className="content d-flex">
                       <div className="left">
                           <div className="box btn-shadow">
                               <div className="img">
                                   <img src="images/together.jpeg" alt="함께" />
                               </div>
                               <div className="details">
                                  <h1>저에게 연락 주세요!!!</h1>
                                  <p>
                                    저는 말이지요~ 인간은 군영과 귀는 품었기 청춘에서만 우리는 천자만홍이 못하다 쓸쓸하랴? 
                                    뭇 않는 과실이 사막이다. 피에 이상을 얼마나 우리의 얼음과 꽃 열매를 주는 청춘은 끓는다. 
                                    맺어, 안고, 밥을 청춘은 위하여서, 대한 봄날의 굳세게 발휘하기 있는가?
                                  </p>
                               </div>
                           </div>
                       </div>
                       <div className="right">
                           <div className="box btn-shadow">
                               <form ref={form} onSubmit={sendEmail} className="emailform">
                                 <div class="f-flex">
                                   <div className="col-50">
                                      <label>보내시는 분 성함</label>
                                      <input type="text" name="user_name" placeholder="이름" />
                                   </div>
                                   <div className="col-50">
                                      <label>보내시는 분 이메일</label>
                                      <input type="text" name="user_email" placeholder="이메일" />                                    
                                   </div>
                                 </div>
                                 <div>
                                    <textarea name="message" placeholder="하실 말씀"></textarea>    
                                 </div>  
                                 <div className="text-center">
                                    <button type="submit"> 이메일 전송 </button>
                                 </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
            </section>
        </div>
    );
};

export default Contact;