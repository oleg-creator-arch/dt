import Tags from '@/widgets/tags';
import './flat.scss';
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
  return (
    <div className="flat-page">
      <div></div>
      <Tags variant={'IconSquare'} data={'2'} />
    </div>
  );
};

export default Flat;
