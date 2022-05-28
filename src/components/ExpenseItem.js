import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 5, 28);
    const expenseTitle = "Car Insurance";
    const expnseAmount = "$294.67"
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item_description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item_price">{expnseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;