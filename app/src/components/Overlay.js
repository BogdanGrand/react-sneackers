function Overlay() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img className="btn-remove" src="/img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem">
            <img src="/img/sneackers/sneackers1.jpg" alt="sneackers" />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 uan</span>
            </div>
            <img
              className="btn-remove"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>

          <div className="cartItem">
            <img src="/img/sneackers/sneackers2.jpg" alt="sneackers" />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <span>12 999 uan</span>
            </div>
            <img
              className="btn-remove"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <p>Итого: </p>
              <div></div>
              <span>21 498 руб. </span>
            </li>
            <li>
              <p>Налог 5%: </p>
              <div></div>
              <span>1074 руб. </span>
            </li>
          </ul>
          <button className="greenBtn">
            Оформити замовлення{" "}
            <img className="arrow-btn" src="/img/arrow-btn.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
