import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './style/Layouts'
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigations';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Incomes'
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
// import ViewTransaction from './components/ViewTrasactions/ViewTransaction';
import ViewTransactionItems from './components/ViewTrasactions/ViewTransactionsItems';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
   
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <ViewTransactionItems />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
      <Navigation active={active} setActive={setActive} />
      <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    // background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,72,123,1) 100%);
    border: 0.5px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default App;
