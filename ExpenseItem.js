//a component in react is just a js function.


function ExpenseItem() {
  return (
    <div className="expense-item">
      
      <div className="expense-item__description">
        <h2>Food Rs.10</h2>
        <h2>petrol Rs.100 </h2>
        <h2>Movies Rs.200 </h2>
      </div>
      <div className="expense-item__price"></div>

    </div>
  );

}
export default ExpenseItem;
