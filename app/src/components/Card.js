function Card (){
    return(
        <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <div className="cardDesc">
              <img src="/img/sneackers/sneackers1.jpg" alt="sneackers" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            </div>
            <div className="cardPrice">
              <div>
                <span>Цена:</span>
                <p>7999uan</p>
              </div>
              <button>
                <img src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
    );
}

export default Card;