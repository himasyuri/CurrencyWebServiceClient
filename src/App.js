import './App.css';
import { useEffect, useState } from 'react';
import CurrencyList from './Components/CurrencyList';
import MyModal from './UI/MyModal/MyModal';
import CurrencyService from './API/CurrencyService';
import Loader from './UI/Loader/Loader';
import { UseFetching } from './Hooks/UseFetching';
import Pagination from './UI/Pagination/Pagination';
import InputCurrChar from './UI/Input/InputCurrChar';
import MyButton from './UI/Button/MyButton';
import CurrencyItem from './Components/CurrencyItem';

function App() {
  const [currencies, setCurrencies] = useState([])
  const [currency, setCurrency] = useState({})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [charcode, setCharcode] = useState('')
  const [fetchCurrencies, isCurrenciesLoading, currencyError] = UseFetching(async () => {
    const response = await CurrencyService.getall(page);
    setCurrencies([...currencies, ...response.data.currencies]);
    setTotalPages(response.data.pages)
    console.log(response)
  })

  const findCurrency = async(e) => {
    e.preventDefault()
    setModal(true)
    const response = await CurrencyService.getCurrByCharcode(charcode)
    console.log(response.data)
    setCurrency(response.data)
    setCharcode('')
  }

  const changePage = (page) => {
    setCurrencies([])
    setPage(page)
  }

  useEffect(() => {
    fetchCurrencies(page);
  }, [page])
  return (
    <div className="App">
      <form>
        <InputCurrChar
          value = {charcode}
          onChange={e => setCharcode(e.target.value)}
          type="text"
          placeholder="Charcode"
        />
        <MyButton onClick={findCurrency}>Найти</MyButton>
      </form>
      <MyModal visible={modal} setVisible={setModal}>
        <CurrencyItem charCode={currency.charCode} name={currency.name} nominal={currency.nominal} value={currency.value}/>
      </MyModal>
      {isCurrenciesLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 50px 50px 50px' }}><Loader /></div>
        : <div><CurrencyList currencies={currencies} /></div>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>

  );
}

export default App;
