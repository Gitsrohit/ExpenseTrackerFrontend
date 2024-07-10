import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { calender, rupees } from '../../utils/Icons';
import { dateFormat } from '../../utils/dateFormat/dateFormat';

function ViewTransactionItems() {
    const {viewTransactionHistory} = useGlobalContext()

    const [...transactions] = viewTransactionHistory()
    const rupeesIcon = '₹';
    return (
        <HistoryStyled>
            <h2>All Transaction</h2>
            {transactions.map((item) =>{
                const {_id,date, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p className='date'>
                        {calender}{dateFormat(date)}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `- ${rupeesIcon} ${amount <= 0 ? 0 : amount}` : `+ ${rupeesIcon} ${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding:2rem;
    .history-item{
        background: #000000;
        border: 1px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
        .date{
        display:flex;
        color: #FFFFFF;
        position:absolute;
        padding-left:15rem;
         justify-content: center;
        align-items: center;
        }
`;

export default ViewTransactionItems