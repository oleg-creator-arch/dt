import Tags from '@/widgets/tags';
import './flat.scss';
import { CopyText, Typography } from '@/shared/ui';
import { ReactComponent as IconCopy } from '@/shared/img/copy.svg';
import { Link } from '@/shared/ui/link/Link';
import AddInfo from '@/widgets/add-info';
import { createCallChain } from 'typescript';
import Slider from '@/widgets/slider';

// import { useLazyQuery } from '@apollo/client';
// import { useCookies } from 'react-cookie';
// import { GET_FAVORITECOUNTRIES } from '@/shared/api/graphqlV1';
// import { addFavoriteCountry } from '@/entities/viewer/model/user/infoUserSlice';
// import { getListCountriesFetch } from '@/entities/country/model/country/infoCountrySlice';
// import {
//   getInfoErrorResponse,
//   getIsFullInfoCountry,
//   getIsLoading,
//   getListCountry,
// } from '@/entities/country/model/country/countriesSelectors';
// import SelectorCountry from '@/features/selector-country';
// import ErrorGetDataCountries from '@/widgets/error-get-data-countries';
// import Loader from '@/shared/ui/loader';

interface IFlatProps {}

const Flat: React.FC<IFlatProps> = ({}: IFlatProps) => {
  // const dispatch = useDispatch();
  // const [cookie] = useCookies(['accessToken']);

  // const [getFavoriteCountry, { loading, error, data }] = useLazyQuery(GET_FAVORITECOUNTRIES, {
  //   context: {
  //     headers: {
  //       ...Headers,
  //       authorization: `Bearer ${cookie.accessToken}`,
  //     },
  //   },
  //   errorPolicy: 'all',
  // });
  // useEffect(() => {
  //   if (data) {
  //     if (data.getMe.FavoriteCountry) {
  //       dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
  //     }
  //   }
  // }, [data]);

  // useEffect(() => {
  //   dispatch(getListCountriesFetch());
  //   getFavoriteCountry();
  // }, []);

  // const isLoading = useSelector(getIsLoading);
  // const listCountry = useSelector(getListCountry);
  // const infoErrorResponse = useSelector(getInfoErrorResponse);
  // const isFullInfoCountry = useSelector(getIsFullInfoCountry);

  // if (infoErrorResponse.trim().length !== 0)
  //   return <ErrorGetDataCountries infoError={infoErrorResponse} />;
  // if (isLoading) return <Loader />;
  const title = '2 Комнатная квартира';
  const address = 'улица Бондаренко, 32';
  const addressLink = 'https://yandex.ru/maps/-/CDCvUQpH';
  const price = 123;
  const description =
    'Пpодаётся уютный дoмик в дeревне Исергaповo.В домe eсть водa и cан узeл, уcтaнoвлeн стеклопакет ,газoвoе oтoпление по всeму дoму и дажe нaстoящaя печь!Деpeвня наxодитcя вcегo в 7км от гopoдa Бавлы и в15км oт городa Oктябрьский.Еcть вcе для уютной жизни: мaгaзины, шкoла и детcкий сад в шaгoвой доступнoсти.Тихое и спокойное место, идеальное для отдыха. Отличная плодородная почва. Счетчика на воду нет, можно поливать сколько угодно!Маленькая речка проходит в конце участка.' +
    'Пpодаётся уютный дoмик в дeревне Исергaповo.В домe eсть водa и cан узeл, уcтaнoвлeн стеклопакет ,газoвoе oтoпление по всeму дoму и дажe нaстoящaя печь!Деpeвня наxодитcя вcегo в 7км от гopoдa Бавлы и в15км oт городa Oктябрьский.Еcть вcе для уютной жизни: мaгaзины, шкoла и детcкий сад в шaгoвой доступнoсти.Тихое и спокойное место, идеальное для отдыха. Отличная плодородная почва. Счетчика на воду нет, можно поливать сколько угодно!Маленькая речка проходит в конце участка.';

  const addInfoData = {
    bed: true,
    internet: false,
    fridge: false,
    washingMachine: false,
    microwave: true,
    hotWater: true,
    safe: false,
    tv: false,
    conditioner: false,
    shopsNearby: false,
    dishes: false,
    elevator: false,
    balcony: false,
    signaling: false,
    furniture: false,
    parking: false,
  };
  const phone = '+79779579212';
  const formatPhone = (phone: string) => {
    let result =
      '+7 ' +
      phone.substring(2, 5) +
      ' ' +
      phone.substring(5, 8) +
      ' ' +
      phone.substring(8, 10) +
      ' ' +
      phone.substring(10, 12);

    return result;
  };
  const nameUser = 'Малика';
  const urlPhoto = [
    'https://photopole.ru/wp-content/uploads/gostinaia-komnata-90.webp',
    'https://bigfoto.name/uploads/posts/2021-11/1637938057_11-bigfoto-name-p-obichnikh-kvartir-realnie-11.jpg',
    'https://mykaleidoscope.ru/uploads/posts/2022-07/1658378089_26-mykaleidoscope-ru-p-dizain-kukhni-v-odnokomnatnoi-kvartire-diz-27.jpg',
    'https://amiel.club/uploads/posts/2022-09/1664455597_3-amiel-club-p-kvartira-v-temnikh-tonakh-krasivo-3.jpg',
  ];
  return (
    <div className="flat-page">
      <Slider urlPhotos={urlPhoto} />
      <div className="content">
        <Typography type="display-md">{title}</Typography>
        <div className="address">
          <Typography type="display-sm">
            <Link to={addressLink}>{address}</Link>
          </Typography>
          <CopyText value={address}>
            <IconCopy />
          </CopyText>
        </div>
        <Typography type="display-md">{price} Р</Typography>
        <div className="tags">
          <Tags variant={'IconSquare'} data={'50'} />
          <Tags variant={'IconBedroom'} data={'2'} />
          <Tags variant={'IconStairs'} data={'4/9'} />
        </div>
        <Typography type="display-md" className={'headline'}>
          Описание
        </Typography>
        <Typography type="text-md" className={'description'}>
          {description}
        </Typography>
        <Typography type="display-md" className={'headline'}>
          Дополнительная информация
        </Typography>
        <AddInfo data={addInfoData} />
      </div>
      <div className="phone">
        <Typography type="text-md">
          <Link to={'tel:' + phone}>{formatPhone(phone) + ' ' + nameUser}</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Flat;
