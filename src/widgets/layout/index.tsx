import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getFormModal } from '@/entities/viewer/model/user/userSelectors';
// import FormLogin from '../Login';
// import FormRegister from '../Register';
// import Header from '../header';
// import { formModal } from '@/entities/viewer/model/user/types';
// import Modal from '@/shared/ui/modal';

interface IDefaultLayoutProps {}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({}: IDefaultLayoutProps) => {
  // const stateModal = useSelector(getFormModal);

  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Modal>{stateModal === formModal.login ? <FormLogin /> : <FormRegister />}</Modal>; */}
    </>
  );
};

export default DefaultLayout;
