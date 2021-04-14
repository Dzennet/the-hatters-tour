import React, { useState } from "react";
import c from "./Discount.module.css";
import loader from "../../../common/img/loader.svg";

function Discount() {
  const [isFormVisible, setisFormVisible] = useState(false);
  const [isFormSend, setisFormSend] = useState(false);
  const [isFormDone, setisFormDone] = useState(false);

  const sendForm = () => {
    setTimeout(() => {
      setisFormSend(false);
    }, 1200);
    setTimeout(() => {
      setisFormDone(true);
    }, 0);
  };

  return (
    <section className={c.discount}>
      <div className={c.discount_headers}>
        <h2>ХОТИТЕ УВИДЕТЬ КОНЦЕРТ THE HATTERS В СВОЕМ ГОРОДЕ?</h2>
        <h3>
          ОСТАВЬТЕ СВОИ КОНТАКТЫ И ПОЛУЧИТЕ ВОЗМОЖНОСТЬ ПРИОРИТЕТНОГО ВЫКУПА
          БИЛЕТОВ СО СКИДКОЙ
        </h3>
      </div>

      {isFormVisible ? (
        <form className={c.discount_inner_form}>
          <div className={c.discount_inner_form_info}>
            <input type="text" placeholder="Город" />
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Телефон" />
            <input type="text" placeholder="Места" />
            <input type="text" placeholder="Количество билетов" />
            <input type="text" placeholder="Желаемая цена" />
          </div>
          <div className={c.discount_inner_form_btn}>
            <button
              onClick={() => {
                setisFormSend(true);
                sendForm();
              }}
              type="reset"
              className="buy_btn"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      ) : (
        <div className={c.discount_buy}>
          <button
            onClick={() => {
              setisFormVisible(true);
            }}
            className="buy_btn"
          >
            ПОЛУЧИТЬ СКИДКУ
          </button>
        </div>
      )}
      {isFormDone ? (
        <div className={c.discount_loading_success}>
          <div>Заявка успешно отправлена!</div>
        </div>
      ) : null}
      <div className={c.discount_warn}>
        <p>
          ОСТАВЛЯЯ ЗАЯВКУ ВЫ ВЫРАЖАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ И ХРАНЕНИЕ ВАШИХ
          ЛИЧНЫХ ДАННЫХ НА УСЛОВИЯХ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ
        </p>
      </div>
      {isFormSend ? (
        <div className={c.discount_loading}>
          <img src={loader} alt="loading..." />
          <div>Отправка...</div>
        </div>
      ) : null}
    </section>
  );
}

export default Discount;
