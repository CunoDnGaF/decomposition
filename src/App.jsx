import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './App.css';

function App() { 
  const newsList = [
    {
      newsImage: './src/images/remove.svg',
      newsTitle: 'Путин...'
    },
    {
      newsImage: './src/images/remove.svg',
      newsTitle: 'Шаман...'
    },
    {
      newsImage: './src/images/remove.svg',
      newsTitle: 'Слово пацана...'
    },
    {
      newsImage: './src/images/remove.svg',
      newsTitle: 'Ивлеева...'
    }
  ];

  const currencyList = [
    {
      currency: 'AUD', 
      value: '58,2831'
    }, 
    {
      currency: 'AZN', 
      value: '52,1115'
    },
    {
      currency: 'AMD', 
      value: '21,8513'
    }
  ];

  const cardList = [
    {
      title: 'Погода',
      content: [
        'Утром -20',
        'Днём -14'
      ],
    },
    {
      title: 'Посещаемое',
      content: [
        'Недвижимость - о сталинках',
        'Маркет - люстры и светильники', 
        'Авто.ру - привод 4x4 до 500 000'
      ],
    },
    {
      title: 'Карта Германии',
      content: [
        'Расписания'
      ],
    },
    {
      title: 'Телепрограмма',
      content: [
        '02:00 ТНТ.Best',
        '02:15 Джинглики', 
        '02:15 Наедине со всеми'
      ],
    },
    {
      title: 'Эфир',
      content: [
        'Управление как искусство',
        'Ночь. Мир в это время', 
        'Андрей Возн...'
      ],
    }
  ]

  const adBlock = {
    adTitle: 'Работа над ошибками', 
    adText: 'Смотрите на Яндексе и запоминайте', 
    adImage: './src/images/remove.svg'
  };

  return (
    <div className='app'>
      <Header 
          newsMenuList={['Сейчас в СМИ', 'в Германии', 'Рекомендуем']}
          newsList={newsList}
          currencyList={currencyList}
          adBlock={adBlock}
      />
      <Body 
          searchMenuList={['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Эфир', 'еще']}
          bannerImage={'./src/images/remove.svg'}
      />
      <Footer 
          cardList={cardList}
      />
    </div>
  );
}

export default App;
