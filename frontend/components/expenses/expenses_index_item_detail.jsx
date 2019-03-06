import React from 'react';

const ExpensesIndexItemDetail = props => {
  let {
    createdAtMonth,
    createdAtDay,
    createdAtYear,
    description,
    amount,
    shares,
    creator,
    note
  } = props.bill;

  let billShares = shares.map( share => (
  <ShareIndexItem 
    share={share}
    key={share.user.id}
  />
  ));

  if (!props.showDetail) {
    return null;
  } else {
    return (
      <div className="expense-detail">
        <header>
          <div className="i-border"><i className="fas fa-receipt"></i></div>
          <div className="header-info">
            <h2>{description}</h2>
            <h3>${amount}</h3>
            <h4>Added by {creator.name} on {createdAtMonth} {createdAtDay}, {createdAtYear}</h4>
          </div>
        </header>

        <div className="body-info">
          <section className="share-info">
            <ul>
              {billShares}
            </ul>
          </section>

          <section className="notes">
            <p><i class="fas fa-comment"></i> Notes and Comments</p>
          { note && 
            <div className="note">
              <h2>Notes</h2>
              {note}
            </div>
          }
          </section>
        </div>
      </div>
    )
  }
};

const ShareIndexItem = props => {
  return (
    <div className="share-index-item">
      <img className="round-icon" src={window.images.cactus} />
      <div>{props.share.user.name} owes ${props.share.amount}</div>
    </div>
  )
}

export default ExpensesIndexItemDetail;